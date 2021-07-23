from django.urls import path
from privateCommunity import views

app_name = 'privateCommunity'
urlpatterns = [
    path('', views.home, name='home'), # 'localhost:8000/community/'
    path('noticecreate/', views.noticecreate, name='noticecreate'),
    path('announcecreate/', views.announcecreate, name='announcecreate'),
    path('applycreate/', views.applycreate, name='applycreate'),
    path('freecreate/', views.freecreate, name='freecreate'),
    path('infocreate/', views.infocreate, name='infocreate'),
    path('qnacreate/', views.qnacreate, name='qnacreate'),
    path('notice/', views.board_NoticeList, name='board_notice'),
    path('announce/', views.board_AnnounceList.as_view(), name='board_announce'),
    path('qna/', views.board_QnaList.as_view(), name='board_qna'),
    path('qna/code/', views.board_QnaList_code.as_view(), name='board_qna_code'),
    path('qna/free/', views.board_QnaList_free.as_view(), name='board_qna_free'),
    path('apply/', views.board_ApplyList.as_view(), name='board_apply'),
    path('free/', views.board_FreeList.as_view(), name='board_free'),
    path('info/', views.board_infoList.as_view(), name='board_info'),
    path('posts/new/', views.new, name= 'new'),
    path('notice/new/', views.new_notice, name= 'new_notice'),
    path('announce/new/', views.new_announce, name= 'new_announce'),
    path('apply/new/', views.new_apply, name= 'new_apply'),
    path('free/new/', views.new_free, name= 'new_free'),
    path('info/new/', views.new_info, name= 'new_info'),
    path('qna/new/', views.new_qna, name= 'new_qna'),
    path('posts/<int:id>/', views.show, name= 'show' ),
    path('posts/<int:id>/edit', views.edit, name='edit'),
    path('posts/<int:id>/delete/', views.delete, name='delete'),
    path('posts/<int:id>/comments/', views.CommentView.create, name='comment_create'),
    path('posts/<int:id>/comments/<int:cid>/', views.ReCommentView.create, name='recomment_create'),
    path('posts/<int:id>/comments/<int:cid>/delete/', views.CommentView.delete, name='comment_delete'),
    path('posts/<int:id>/comments/<int:cid>/delete/<int:rcid>/', views.ReCommentView.delete, name='recomment_delete'),
    path('posts/<int:id>/emotion/<str:type>/', views.EmotionView.create, name='postEmotion'),
    path('posts/<int:id>/comments/<int:cid>/commentEmotion/<str:type>/', views.CommentEmotionView.create, name='commentEmotion'),
    path('posts/<int:id>/comments/<int:cid>/recomments/<int:rcid>/recommentEmotion/<str:type>/', views.RecommentEmotionView.create, name='recommentEmotion'),
    path('posts/<int:id>/notification/<str:type>/', views.NotificationView.create_comment_notification, name='comment_notification_create'),
    path('comments/<int:cid>/notification/<str:type>/', views.NotificationView.create_recomment_notification, name='recomment_notification_create'),
]



