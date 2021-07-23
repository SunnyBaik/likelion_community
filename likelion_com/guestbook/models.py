from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Guestbook(models.Model): # 모델 클래스명은 단수형을 사용 (Posts(x) Post(O))
    # id는 자동 추가
    author = models.ForeignKey(User, null=True, on_delete= models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'Guestbook({self.author}, {self.content}, {self.created_at}'

        