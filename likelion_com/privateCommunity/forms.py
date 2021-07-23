from django import forms
from .models import Post
from ckeditor_uploader.widgets import CKEditorUploadingWidget

categories = [('자유게시판', '자유게시판') , ('공지게시판', '공지게시판'), ('질의응답게시판', '질의응답게시판')
            , ('모집게시판', '모집게시판'), ('정보게시판', '정보게시판'), ('앨범게시판', '앨범게시판')
]

qna_types = [('코딩/개발', '코딩/개발') , ('자유', '자유')]


class PostForm(forms.ModelForm):
    title = forms.CharField(label = '제목')
    content = forms.CharField(label='본문', widget=CKEditorUploadingWidget())
    category = forms.CharField(label='게시판 선택', widget=forms.Select(choices=categories))
    
    class Meta:
        model = Post
        fields = ['title' , 'category', 'content']

class PostForm2(forms.ModelForm):
    title = forms.CharField(label = '제목')
    content = forms.CharField(label='본문', widget=CKEditorUploadingWidget())

    class Meta:
        model = Post
        fields = ['title' , 'content']


class PostForm_qna(forms.ModelForm):
    title = forms.CharField(label = '제목')
    content = forms.CharField(label='본문', widget=CKEditorUploadingWidget())
    qna_type = forms.CharField(label='유형', widget=forms.Select(choices=qna_types))
    
    class Meta:
        model = Post
        fields = ['title' , 'qna_type', 'content']