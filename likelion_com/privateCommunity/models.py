from django.db import models
from django.db.models.fields import BooleanField
from django.utils import timezone
from django.contrib.auth.models import User
from ckeditor_uploader.fields import RichTextUploadingField

class Post(models.Model): # 모델 클래스명은 단수형을 사용 (Posts(x) Post(O))
    # id는 자동 추가
    author = models.ForeignKey(User, null=True, on_delete= models.CASCADE)
    title = models.CharField(max_length=256, blank=True, null=True)
    category = models.CharField(max_length=256, blank=True, null=True)
    qna_type = models.CharField(max_length=256, blank=True, null=True)
    content = RichTextUploadingField(blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(blank=True, null=True)
    view_count = models.IntegerField(blank=True, null=True)
    emotion_users = models.ManyToManyField(User, blank=True, related_name='emotion_posts', through='Emotion')

    def update_date(self): # 나중에 수정할 때 사용
        self.updated_at = timezone.now()
        self.save()

    def __str__(self):
        return self.title


class Comment(models.Model):
    author = models.ForeignKey(User, null=True, on_delete= models.CASCADE)
    content = models.TextField(blank=True, null=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)
    emotion_users = models.ManyToManyField(User, blank=True, related_name='emotion_comments', through='CommentEmotion')

    def __str__(self):
        return f'[post: {self.post}] {self.content}'

class ReComment(models.Model):
    author = models.ForeignKey(User, null=True, on_delete= models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
    content = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now=True)
    emotion_users = models.ManyToManyField(User, blank=True, related_name='emotion_recomments', through='ReCommentEmotion')

    def __str__(self):
        return self.body

class Emotion(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    type = models.CharField(max_length= 20)
    created_at = models.DateTimeField(default=timezone.now)

class CommentEmotion(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
    type = models.CharField(max_length= 20)
    created_at = models.DateTimeField(default=timezone.now)

class ReCommentEmotion(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    recomment = models.ForeignKey(ReComment, on_delete=models.CASCADE)
    type = models.CharField(max_length= 20)
    created_at = models.DateTimeField(default=timezone.now)

class Notification(models.Model):
    recipient = models.ForeignKey(User, on_delete=models.CASCADE)
    trigger_user = models.CharField(max_length=30)
    type = models.CharField(max_length=10)
    post_id = models.IntegerField(blank=True, null=True)
    unread = BooleanField(default=True)
    created_at = models.DateTimeField(default=timezone.now)
    
