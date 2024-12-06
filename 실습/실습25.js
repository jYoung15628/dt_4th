// 랜덤색상
const btn = document.querySelector('button');
const body = document.querySelector('body');
const h2 = document.querySelector('h2');

btn.addEventListener('click',
        
    function(){

        let r = (Math.floor(Math.random() * 255));
        let g = (Math.floor(Math.random() * 255));
        let b = (Math.floor(Math.random() * 255));
        body.style.backgroundColor = `rgb(${r},${g},${b})`;
        h2.textContent = `rgb(${r}, ${g}, ${b})`;
    }
);
 


// TODO: 아래 조건을 만족하도록 js 파일을 수정하기
      // 문제
      // - [ ] 아이디 input과 댓글 input을 입력하고 [등록] 버튼을 누르면, 댓글이 추가됩니다.
      //     - 폼을 "제출"헸을 때에 해당하는 이벤트는 무엇인가요?
      // - [ ] 아이디 값과 댓글 값을 가져와야 합니다.
      // - [ ] <li> 태그를 새로 만들고, "아이디 - 댓글내용" 형식이 되도록 설정합니다.
      // - [ ] <ul class="comment-list"> 태그에 li를 추가합니다.
      // - [ ] 아이디 input과 댓글 input을 초기화해야 합니다.

      // 폼 이벤트


const userID = document.getElementsByClassName('userid');
const comment = document.getElementsByClassName('comment');
const submitForm = document.querySelector('form');
const list = document.querySelector('.comment-list');

submitForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    const userInput = document.querySelector('input[name="userid"]');
    const commentInput = document.querySelector('input[name="comment"]');

    const newComment = commentInput.value.trim(); // 댓글 공백 제거
    const newUser = userInput.value.trim(); // 양쪽 공백 제거

    if (newUser !== '') {
        const newUserLi = document.createElement('li'); // <li></li>
        newUserLi.style.fontWeight = 'bold';
        // 아이디와 댓글 결합하여 표시
        newUserLi.textContent = `${newUser}: ${newComment}`; // "아이디: 댓글" 형식
        list.appendChild(newUserLi); // li 요소를 ul에 추가
    }

    userInput.value = '';
    commentInput.value = '';

});