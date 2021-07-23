
const onClickDeleteButtonDetail = async (postId) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      // 확인 버튼 클릭 시 동작
      response = await axios.delete(`/community/posts/${postId}/delete/`);
      window.location.href = 'http://127.0.0.1:8000/community/'
    }
    else;
}



const getCommentElement = (content, postId, commentId, author, created_at ,emotionCount) => {
	
    let newCommentDiv = document.createElement('div');
    newCommentDiv.setAttribute('id',`${commentId}-comment`);
    newCommentDiv.setAttribute('class', 'comment-box');
    let newCommentElement = document.createElement('div');
    let newCommentContent = document.createElement('p');
    newCommentContent.innerHTML = `${author}: ${content} &nbsp; &nbsp;${created_at} &nbsp;`;
    newCommentElement.appendChild(newCommentContent);
    newCommentDiv.appendChild(newCommentElement);


    let replyButton = document.createElement('button');
    replyButton.setAttribute('onclick', `makeRecommentBox(${postId},${commentId})`);
    replyButton.setAttribute('class', `make-recomment-button`);
    replyButton.innerHTML = "답글 달기";
    newCommentDiv.appendChild(replyButton);

    let likeboxParent = document.createElement('button');
    likeboxParent.innerHTML = '좋아요';
    likeboxParent.setAttribute('class', 'like-box-parent');

    let likeboxChild = document.createElement('div');
    likeboxChild.setAttribute('class', 'like-box-child');

    let bestdiv = document.createElement('div');
    bestdiv.setAttribute('class', 'emotion-best');
    let bestlink = document.createElement('a');
    bestlink.setAttribute('id', `${commentId}-comment-best-button`);
    bestlink.setAttribute('onclick', `onClickCommentBestButton(${postId}, ${commentId})`);
    bestimg = document.createElement('img');
    bestimg.setAttribute('class', 'emotion');
    bestimg.setAttribute('src', "/static/privateCommunity/img/best.png");
    bestlink.appendChild(bestimg);
    bestdiv.appendChild(bestlink);
    likeboxChild.appendChild(bestdiv);

    let thanksdiv = document.createElement('div');
    thanksdiv.setAttribute('class', 'emotion-thanks');
    let thankslink = document.createElement('a');
    thankslink.setAttribute('id', `${commentId}-comment-thanks-button`);
    thankslink.setAttribute('onclick', `onClickCommentThanksButton(${postId}, ${commentId})`);
    thanksimg = document.createElement('img');
    thanksimg.setAttribute('class', 'emotion');
    thanksimg.setAttribute('src', "/static/privateCommunity/img/thanks.png");
    thankslink.appendChild(thanksimg);
    thanksdiv.appendChild(thankslink);
    likeboxChild.appendChild(thanksdiv);

    let surprisingdiv = document.createElement('div');
    surprisingdiv.setAttribute('class', 'emotion-surprising');
    let surprisinglink = document.createElement('a');
    surprisinglink.setAttribute('id', `${commentId}-comment-surprising-button`);
    surprisinglink.setAttribute('onclick', `onClickCommentSurprisingButton(${postId}, ${commentId})`);
    surprisingimg = document.createElement('img');
    surprisingimg.setAttribute('class', 'emotion');
    surprisingimg.setAttribute('src', "/static/privateCommunity/img/surprising.png");
    surprisinglink.appendChild(surprisingimg);
    surprisingdiv.appendChild(surprisinglink);
    likeboxChild.appendChild(surprisingdiv);

    let funnydiv = document.createElement('div');
    funnydiv.setAttribute('class', 'emotion-funny');
    let funnylink = document.createElement('a');
    funnylink.setAttribute('id', `${commentId}-comment-funny-button`);
    funnylink.setAttribute('onclick', `onClickCommentFunnyButton(${postId}, ${commentId})`);
    funnyimg = document.createElement('img');
    funnyimg.setAttribute('class', 'emotion');
    funnyimg.setAttribute('src', "/static/privateCommunity/img/funny.png");
    funnylink.appendChild(funnyimg);
    funnydiv.appendChild(funnylink);
    likeboxChild.appendChild(funnydiv);

    likeboxParent.appendChild(likeboxChild);
    newCommentDiv.appendChild(likeboxParent);
    // <div class="emotion-icon none" id="{{comment.id}}-best-icon">
    //           <img class="emotion-icon n" src="/static/privateCommunity/img/best.png" />
    //         </div>
    let commentBestIcon = document.createElement('div');
    commentBestIcon.setAttribute('class', 'emotion-icon none');
    commentBestIcon.setAttribute('id', `${commentId}-best-icon`);
    let commentBestImage = document.createElement('img');
    commentBestImage.setAttribute('class', 'emotion-icon');
    commentBestImage.setAttribute('src', '/static/privateCommunity/img/best.png');
    commentBestIcon.appendChild(commentBestImage);
    newCommentDiv.appendChild(commentBestIcon);

    let commentThanksIcon = document.createElement('div');
    commentThanksIcon.setAttribute('class', 'emotion-icon none');
    commentThanksIcon.setAttribute('id', `${commentId}-thanks-icon`);
    let commentThanksImage = document.createElement('img');
    commentThanksImage.setAttribute('class', 'emotion-icon');
    commentThanksImage.setAttribute('src', '/static/privateCommunity/img/thanks.png');
    commentThanksIcon.appendChild(commentThanksImage);
    newCommentDiv.appendChild(commentThanksIcon);

    let commentSurprisingIcon = document.createElement('div');
    commentSurprisingIcon.setAttribute('class', 'emotion-icon none');
    commentSurprisingIcon.setAttribute('id', `${commentId}-surprising-icon`);
    let commentSurprisingImage = document.createElement('img');
    commentSurprisingImage.setAttribute('class', 'emotion-icon');
    commentSurprisingImage.setAttribute('src', '/static/privateCommunity/img/surprising.png');
    commentSurprisingIcon.appendChild(commentSurprisingImage);
    newCommentDiv.appendChild(commentSurprisingIcon);

    let commentFunnyIcon = document.createElement('div');
    commentFunnyIcon.setAttribute('class', 'emotion-icon none');
    commentFunnyIcon.setAttribute('id', `${commentId}-funny-icon`);
    let commentFunnyImage = document.createElement('img');
    commentFunnyImage.setAttribute('class', 'emotion-icon');
    commentFunnyImage.setAttribute('src', '/static/privateCommunity/img/funny.png');
    commentFunnyIcon.appendChild(commentFunnyImage);
    newCommentDiv.appendChild(commentFunnyIcon);

    let commentEmotionCount = document.createElement('p');
    commentEmotionCount.setAttribute('class', 'comment-emotion-count none');
    commentEmotionCount.setAttribute('id', `${commentId}-emotion-count`);
    commentEmotionCount.innerHTML = `${emotionCount}`;
    newCommentDiv.appendChild(commentEmotionCount);


    let deleteDiv = document.createElement('div');
    let deleteButton = document.createElement('a');
    deleteButton.setAttribute('onclick', `onClickCommentDelete(${postId},${commentId})`);
    deleteButton.innerHTML = "&nbsp;&nbsp;삭제";
    deleteDiv.appendChild(deleteButton);
    newCommentDiv.appendChild(deleteDiv);
    
    return newCommentDiv; 
}
  
const onAddComment = async (postId) => {
    const commentInputElement = document.getElementById("comment-input");
    if(commentInputElement.value) {
        // axios로 보내줄 data Form을 만들어 줍니다. 
        let data = new FormData();
        // content라는 key를 만들고, tag input 값을 적어줍니다. 
        data.append("content", commentInputElement.value);
        // aixos 요청에 의한 응답을 받을 때까지 기다렷다가 response에 할당해준다. 
        const response = await axios.post(`/community/posts/${postId}/comments/`, data);
        const commentElement = getCommentElement(commentInputElement.value, postId, response.data.commentId, response.data.author, response.data.created_at, response.data.emotionCount);
        commentlist = document.getElementById("comment-list")
        commentlist.appendChild(commentElement);
        recomment_list = document.createElement('div');
        recomment_list.setAttribute('id', `${response.data.commentId}-recomment-list`);
        recomment_list.setAttribute('class', 'recomment-list');
        // emptydiv = document.createElement('div');
        commentlist.appendChild(recomment_list);

        commentInputElement.value="";
        const commentCount = document.getElementById('comment-count');
        commentCount.innerHTML = `<strong>댓글이 ${response.data.commentCount}개 있습니다</strong>`;

        //send notification
        axios.get(`/community/posts/${postId}/notification/comment/`)
    }
}

const getReCommentElement = (content, postId, commentId, recommentId, author, created_at, emotionCount) => {
	
    let newReCommentElement = document.createElement('div');
    newReCommentElement.setAttribute('id',`${recommentId}-recomment`);
    newReCommentElement.setAttribute('class', 'recomment-box');

    let recommentContentHolder = document.createElement('div');
    let recommentContent = document.createElement('p');
    recommentContent.innerHTML = `&nbsp; &nbsp;&nbsp; &nbsp; ㄴ> ${author}: ${content} &nbsp; &nbsp;${created_at} &nbsp;`;
    recommentContentHolder.appendChild(recommentContent);
    newReCommentElement.appendChild(recommentContentHolder);

    let likeboxParent = document.createElement('button');
    likeboxParent.setAttribute('class', 'like-box-parent');
    likeboxParent.innerHTML = "좋아요";
    
    let likeboxChild = document.createElement('div');
    likeboxChild.setAttribute('class', 'like-box-child');

    let bestdiv = document.createElement('div');
    bestdiv.setAttribute('class', 'emotion-best');
    let bestlink = document.createElement('a');
    bestlink.setAttribute('id', `${recommentId}-recomment-best-button`);
    bestlink.setAttribute('onclick', `onClickReCommentBestButton(${postId}, ${commentId}, ${recommentId})`);
    bestimg = document.createElement('img');
    bestimg.setAttribute('class', 'emotion');
    bestimg.setAttribute('src', "/static/privateCommunity/img/best.png");
    bestlink.appendChild(bestimg);
    bestdiv.appendChild(bestlink);
    likeboxChild.appendChild(bestdiv);

    let thanksdiv = document.createElement('div');
    thanksdiv.setAttribute('class', 'emotion-thanks');
    let thankslink = document.createElement('a');
    thankslink.setAttribute('id', `${recommentId}-recomment-thanks-button`);
    thankslink.setAttribute('onclick', `onClickReCommentThanksButton(${postId}, ${commentId}, ${recommentId})`);
    thanksimg = document.createElement('img');
    thanksimg.setAttribute('class', 'emotion');
    thanksimg.setAttribute('src', "/static/privateCommunity/img/thanks.png");
    thankslink.appendChild(thanksimg);
    thanksdiv.appendChild(thankslink);
    likeboxChild.appendChild(thanksdiv);

    let surprisingdiv = document.createElement('div');
    surprisingdiv.setAttribute('class', 'emotion-surprising');
    let surprisinglink = document.createElement('a');
    surprisinglink.setAttribute('id', `${recommentId}-recomment-surprising-button`);
    surprisinglink.setAttribute('onclick', `onClickReCommentSurprisingButton(${postId}, ${commentId}, ${recommentId})`);
    surprisingimg = document.createElement('img');
    surprisingimg.setAttribute('class', 'emotion');
    surprisingimg.setAttribute('src', "/static/privateCommunity/img/surprising.png");
    surprisinglink.appendChild(surprisingimg);
    surprisingdiv.appendChild(surprisinglink);
    likeboxChild.appendChild(surprisingdiv);

    let funnydiv = document.createElement('div');
    funnydiv.setAttribute('class', 'emotion-funny');
    let funnylink = document.createElement('a');
    funnylink.setAttribute('id', `${recommentId}-recomment-funny-button`);
    funnylink.setAttribute('onclick', `onClickReCommentFunnyButton(${postId}, ${commentId}, ${recommentId})`);
    funnyimg = document.createElement('img');
    funnyimg.setAttribute('class', 'emotion');
    funnyimg.setAttribute('src', "/static/privateCommunity/img/funny.png");
    funnylink.appendChild(funnyimg);
    funnydiv.appendChild(funnylink);
    likeboxChild.appendChild(funnydiv);

    likeboxParent.appendChild(likeboxChild);
    newReCommentElement.appendChild(likeboxParent);


    let recommentBestIcon = document.createElement('div');
    recommentBestIcon.setAttribute('class', 'emotion-icon none');
    recommentBestIcon.setAttribute('id', `${recommentId}-recomment-best-icon`);
    let recommentBestImage = document.createElement('img');
    recommentBestImage.setAttribute('class', 'emotion-icon');
    recommentBestImage.setAttribute('src', '/static/privateCommunity/img/best.png');
    recommentBestIcon.appendChild(recommentBestImage);
    newReCommentElement.appendChild(recommentBestIcon);

    let recommentThanksIcon = document.createElement('div');
    recommentThanksIcon.setAttribute('class', 'emotion-icon none');
    recommentThanksIcon.setAttribute('id', `${recommentId}-recomment-thanks-icon`);
    let recommentThanksImage = document.createElement('img');
    recommentThanksImage.setAttribute('class', 'emotion-icon');
    recommentThanksImage.setAttribute('src', '/static/privateCommunity/img/thanks.png');
    recommentThanksIcon.appendChild(recommentThanksImage);
    newReCommentElement.appendChild(recommentThanksIcon);

    let recommentSurprisingIcon = document.createElement('div');
    recommentSurprisingIcon.setAttribute('class', 'emotion-icon none');
    recommentSurprisingIcon.setAttribute('id', `${recommentId}-recomment-surprising-icon`);
    let recommentSurprisingImage = document.createElement('img');
    recommentSurprisingImage.setAttribute('class', 'emotion-icon');
    recommentSurprisingImage.setAttribute('src', '/static/privateCommunity/img/surprising.png');
    recommentSurprisingIcon.appendChild(recommentSurprisingImage);
    newReCommentElement.appendChild(recommentSurprisingIcon);

    let recommentFunnyIcon = document.createElement('div');
    recommentFunnyIcon.setAttribute('class', 'emotion-icon none');
    recommentFunnyIcon.setAttribute('id', `${recommentId}-recomment-funny-icon`);
    let recommentFunnyImage = document.createElement('img');
    recommentFunnyImage.setAttribute('class', 'emotion-icon');
    recommentFunnyImage.setAttribute('src', '/static/privateCommunity/img/funny.png');
    recommentFunnyIcon.appendChild(recommentFunnyImage);
    newReCommentElement.appendChild(recommentFunnyIcon);


    let recommentEmotionCount = document.createElement('p');
    recommentEmotionCount.setAttribute('class', 'recomment-emotion-count none');
    recommentEmotionCount.setAttribute('id', `${recommentId}-recomment-emotion-count`);
    recommentEmotionCount.innerHTML = `${emotionCount}`;
    newReCommentElement.appendChild(recommentEmotionCount);


    let deleteDiv = document.createElement('div');
    let deleteButton = document.createElement('a');
    deleteButton.setAttribute('onclick', `onReClickCommentDelete(${postId},${commentId},${recommentId})`);
    deleteButton.innerHTML = "&nbsp;&nbsp;삭제";
    deleteDiv.appendChild(deleteButton);
    newReCommentElement.appendChild(deleteDiv);

    
    return newReCommentElement; 
}
  
const onAddReComment = async (postId, commentId) => {
    const recommentInputElement = document.getElementById(`${commentId}-recomment-input`);
    if(recommentInputElement.value) {
        // axios로 보내줄 data Form을 만들어 줍니다. 
        let data = new FormData();
        // content라는 key를 만들고, tag input 값을 적어줍니다. 
        data.append("content", recommentInputElement.value);
            // aixos 요청에 의한 응답을 받을 때까지 기다렷다가 response에 할당해준다. 
        const response = await axios.post(`/community/posts/${postId}/comments/${commentId}/`, data);

        // delete existing recomment input box
        const recomment_list = document.getElementById(`${commentId}-recomment-list`);
        recomment_list.lastChild.remove();
        recomment_list.lastChild.remove();
        recomment_list.lastChild.remove();

        const recommentElement = getReCommentElement(recommentInputElement.value, postId, commentId, response.data.recommentId, response.data.author, response.data.created_at, response.data.emotionCount);
        recomment_list.appendChild(recommentElement);
        const commentCount = document.getElementById('comment-count');
        commentCount.innerHTML = `<strong>댓글이 ${response.data.commentCount}개 있습니다</strong>`;
    }
    axios.get(`/community/comments/${commentId}/notification/recomment/`)
}

const onClickCommentDelete = async (postId, commentId) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      // 확인 버튼 클릭 시 동작
      const deletedComment = document.getElementById(`${commentId}-comment`);
      deletedComment.style.display = 'none';
      response = await axios.delete(`/community/posts/${postId}/comments/${commentId}/delete`);
      const commentCount = document.getElementById('comment-count');
      commentCount.innerHTML = `<strong>댓글이 ${response.data.commentCount}개 있습니다</strong>`;
    }
    else;
}

const onClickReCommentDelete = async (postId, commentId, recommentId) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      // 확인 버튼 클릭 시 동작
      const deletedComment = document.getElementById(`${recommentId}-recomment`);
      deletedComment.style.display = 'none';
      response = await axios.delete(`/posts/${postId}/comments/${commentId}/delete/${recommentId}`);
      const commentCount = document.getElementById('comment-count');
      commentCount.innerHTML = `<strong>댓글이 ${response.data.commentCount}개 있습니다</strong>`;
    }
    else;
}
/// 비동기 게시글 감정표현
const onClickPostBestButton = async (postId) => {
    const post_best_button = document.getElementById("post-best-button");
    const response = await axios.post(`/community/posts/${postId}/emotion/best/`);
    post_best_button.firstElementChild.innerHTML = `${response.data.postBestCount}`;
}

const onClickPostThanksButton = async (postId) => {
    const post_thanks_button = document.getElementById("post-thanks-button");
    const response = await axios.post(`/community/posts/${postId}/emotion/thanks/`);
    post_thanks_button.firstElementChild.innerHTML = `${response.data.postThanksCount}`;
}

const onClickPostSurprisingButton = async (postId) => {
    const post_surprising_button = document.getElementById("post-surprising-button");
    const response = await axios.post(`/community/posts/${postId}/emotion/surprising/`);
    post_surprising_button.firstElementChild.innerHTML = `${response.data.postSurprisingCount}`;
}

const onClickPostFunnyButton = async (postId) => {
    const post_funny_button = document.getElementById("post-funny-button");
    const response = await axios.post(`/community/posts/${postId}/emotion/funny/`);
    post_funny_button.firstElementChild.innerHTML = `${response.data.postFunnyCount}`;
}

/// 비동기 댓글 감정표현
const onClickCommentBestButton = async (postId, commentId) => {
    const comment_best_icon = document.getElementById(`${commentId}-best-icon`);
    
    const response = await axios.post(`/community/posts/${postId}/comments/${commentId}/commentEmotion/best/`);
    if(response.data.bestCount<1){
        comment_best_icon.setAttribute('class', 'emotion-icon none');
    }
    else{
        comment_best_icon.setAttribute('class', 'emotion-icon');
    }
    const emotion_count_p = document.getElementById(`${commentId}-emotion-count`);
    emotion_count_p.setAttribute('class', 'comment-emotion-count');
    emotion_count_p.innerHTML = response.data.emotionCount;
    if(response.data.emotionCount<1){
        emotion_count_p.setAttribute('class', 'comment-emotion-count none');
    }
}

const onClickCommentThanksButton = async (postId, commentId) => {
    const comment_thanks_icon = document.getElementById(`${commentId}-thanks-icon`);
    
    const response = await axios.post(`/community/posts/${postId}/comments/${commentId}/commentEmotion/thanks/`);
    if(response.data.thanksCount<1){
        comment_thanks_icon.setAttribute('class', 'emotion-icon none');
    }
    else{
        comment_thanks_icon.setAttribute('class', 'emotion-icon');
    }
    const emotion_count_p = document.getElementById(`${commentId}-emotion-count`);
    emotion_count_p.setAttribute('class', 'comment-emotion-count');
    emotion_count_p.innerHTML = response.data.emotionCount;
    if(response.data.emotionCount<1){
        emotion_count_p.setAttribute('class', 'comment-emotion-count none');
    }
}

const onClickCommentSurprisingButton = async (postId, commentId) => {
    const comment_surprising_icon = document.getElementById(`${commentId}-surprising-icon`);
    
    const response = await axios.post(`/community/posts/${postId}/comments/${commentId}/commentEmotion/surprising/`);
    if(response.data.surprisingCount<1){
        comment_surprising_icon.setAttribute('class', 'emotion-icon none');
    }
    else{
        comment_surprising_icon.setAttribute('class', 'emotion-icon');
    }
    const emotion_count_p = document.getElementById(`${commentId}-emotion-count`);
    emotion_count_p.setAttribute('class', 'comment-emotion-count');
    emotion_count_p.innerHTML = response.data.emotionCount;
    if(response.data.emotionCount<1){
        emotion_count_p.setAttribute('class', 'comment-emotion-count none');
    }
}

const onClickCommentFunnyButton = async (postId, commentId) => {
    const comment_funny_icon = document.getElementById(`${commentId}-funny-icon`);
    const response = await axios.post(`/community/posts/${postId}/comments/${commentId}/commentEmotion/funny/`);
    if(response.data.funnyCount<1){
        comment_funny_icon.setAttribute('class', 'emotion-icon none');
    }
    else{
        comment_funny_icon.setAttribute('class', 'emotion-icon');
    }
    const emotion_count_p = document.getElementById(`${commentId}-emotion-count`);
    emotion_count_p.setAttribute('class', 'comment-emotion-count');
    emotion_count_p.innerHTML = response.data.emotionCount;
    if(response.data.emotionCount<1){
        emotion_count_p.setAttribute('class', 'comment-emotion-count none');
    }
}


/// 비동기 답글 감정표현
const onClickReCommentBestButton = async (postId, commentId, recommentId) => {
    const recomment_best_icon = document.getElementById(`${recommentId}-recomment-best-icon`);
    
    const response = await axios.post(`/community/posts/${postId}/comments/${commentId}/recomments/${recommentId}/recommentEmotion/best/`);
    if(response.data.bestCount<1){
        recomment_best_icon.setAttribute('class', 'emotion-icon none');
    }
    else{
        recomment_best_icon.setAttribute('class', 'emotion-icon');
    }
    const emotion_count_p = document.getElementById(`${recommentId}-recomment-emotion-count`);
    emotion_count_p.setAttribute('class', 'recomment-emotion-count');
    emotion_count_p.innerHTML = response.data.emotionCount;
    if(response.data.emotionCount<1){
        emotion_count_p.setAttribute('class', 'recomment-emotion-count none');
    }
}

const onClickReCommentThanksButton = async (postId, commentId, recommentId) => {
    const recomment_thanks_icon = document.getElementById(`${recommentId}-recomment-thanks-icon`);
    
    const response = await axios.post(`/community/posts/${postId}/comments/${commentId}/recomments/${recommentId}/recommentEmotion/thanks/`);
    if(response.data.thanksCount<1){
        recomment_thanks_icon.setAttribute('class', 'emotion-icon none');
    }
    else{
        recomment_thanks_icon.setAttribute('class', 'emotion-icon');
    }
    const emotion_count_p = document.getElementById(`${recommentId}-recomment-emotion-count`);
    emotion_count_p.setAttribute('class', 'recomment-emotion-count');
    emotion_count_p.innerHTML = response.data.emotionCount;
    if(response.data.emotionCount<1){
        emotion_count_p.setAttribute('class', 'recomment-emotion-count none');
    }
}

const onClickReCommentSurprisingButton = async (postId, commentId, recommentId) => {
    const recomment_surprising_icon = document.getElementById(`${recommentId}-recomment-surprising-icon`);
    
    const response = await axios.post(`/community/posts/${postId}/comments/${commentId}/recomments/${recommentId}/recommentEmotion/surprising/`);
    if(response.data.surprisingCount<1){
        recomment_surprising_icon.setAttribute('class', 'emotion-icon none');
    }
    else{
        recomment_surprising_icon.setAttribute('class', 'emotion-icon');
    }
    const emotion_count_p = document.getElementById(`${recommentId}-recomment-emotion-count`);
    emotion_count_p.setAttribute('class', 'recomment-emotion-count');
    emotion_count_p.innerHTML = response.data.emotionCount;
    if(response.data.emotionCount<1){
        emotion_count_p.setAttribute('class', 'recomment-emotion-count none');
    }
}

const onClickReCommentFunnyButton = async (postId, commentId, recommentId) => {
    const recomment_funny_icon = document.getElementById(`${recommentId}-recomment-funny-icon`);
    
    const response = await axios.post(`/community/posts/${postId}/comments/${commentId}/recomments/${recommentId}/recommentEmotion/funny/`);
    if(response.data.funnyCount<1){
        recomment_funny_icon.setAttribute('class', 'emotion-icon none');
    }
    else{
        recomment_funny_icon.setAttribute('class', 'emotion-icon');
    }
    const emotion_count_p = document.getElementById(`${recommentId}-recomment-emotion-count`);
    emotion_count_p.setAttribute('class', 'recomment-emotion-count');
    emotion_count_p.innerHTML = response.data.emotionCount;
    if(response.data.emotionCount<1){
        emotion_count_p.setAttribute('class', 'recomment-emotion-count none');
    }
}

const makeRecommentBox = (postId, commentId) => {
    const recomment_list = document.getElementById(`${commentId}-recomment-list`)
    let csrf = document.createElement('input');
    csrf.setAttribute("type","hidden");
    csrf.setAttribute("name","_token");
    csrf.setAttribute("value","{{csrf_field()}}");
 
    
    let replyinput = document.createElement('input');
    replyinput.setAttribute('id', `${commentId}-recomment-input`);
    replyinput.setAttribute('type', 'text');
    replyinput.setAttribute('name', 'content');

    let submit_button = document.createElement('button');
    submit_button.setAttribute('onclick', `onAddReComment(${postId}, ${commentId})`);
    submit_button.innerHTML = '답글 달기';
  

    recomment_list.appendChild(csrf);
    recomment_list.appendChild(replyinput);
    recomment_list.appendChild(submit_button);
}