from django.shortcuts import render
from django.contrib.auth.models import User  # 추가
from django.contrib import auth  # 추가
from django.shortcuts import redirect  # 추가
from accounts.models import Profile

def login(request):
    return render(request, 'registration/login.html')

def signup(request):
    # 추가
    if request.method  == 'POST':
        if request.POST['password1'] == request.POST['password2']:
            user = User.objects.create_user(username=request.POST['username'], password=request.POST['password1'])
            Profile.objects.filter(user=user).update(college=request.POST['college'], major=request.POST['major']
                , batch=request.POST['batch'], tel=request.POST['tel']
                , email=request.POST['email'], tmi=request.POST['tmi']
                , github_id=request.POST['github_id'])
            user = User.objects.get(username=request.POST['username'])
            user.is_active = False
            user.save()
            return redirect('/community')

    return render(request, 'accounts/signup.html')


def infoupdate(request):
    if request.method == 'GET':
        user = request.user
        return render(request, 'accounts/infoupdate.html', {'user': user})
    elif request.method == 'POST':
        college = request.POST['college']
        major = request.POST['major']
        batch = request.POST['batch']
        tel = request.POST['tel']
        email = request.POST['tmi']
        github_id = request.POST['github_id']
        request.user.profile.college = college
        request.user.profile.major = major
        request.user.profile.batch = batch
        request.user.profile.tel = tel
        request.user.profile.email = email
        request.user.profile.github_id = github_id
        request.user.save()
        return redirect('/community')    