from django.shortcuts import render, redirect
from guestbook.models import Guestbook
from django.contrib.auth.models import User

# Create your views here.

def list(request):
    guestbooklist = Guestbook.objects.all().order_by('-created_at')
    return render(request, 'guestbook/list.html', {'guestbooklist': guestbooklist})

def write(request):
    guestbook = Guestbook()
    guestbook.content = request.POST['content']
    guestbook = Guestbook.objects.create(content=guestbook.content, author=request.user)
    guestbook.save()
    return redirect('guestbook:list')

def delete(request, id):
    guestbook = Guestbook.objects.get(id=id)
    guestbook.delete() # 선택된 모델 인스턴스를 삭제하는 query 함수입니다.
    return redirect('guestbook:list')
