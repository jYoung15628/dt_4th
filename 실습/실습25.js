// 랜덤색상
// const btn = document.querySelector('button');
// const body = document.querySelector('body');
// const h2 = document.querySelector('h2');

// btn.addEventListener('click',

//     function () {
//         let r = Math.floor(Math.random() * 255);
//         let g = Math.floor(Math.random() * 255);
//         let b = Math.floor(Math.random() * 255);
//         body.style.backgroundColor = `rgb(${r},${g},${b})`;
//         h2.textContent = `rgb(${r}, ${g}, ${b})`;
//     }
// );

// TODO: 아래 조건을 만족하도록 js 파일을 수정하기
// 문제
// - [ ] 아이디 input과 댓글 input을 입력하고 [등록] 버튼을 누르면, 댓글이 추가됩니다.
//     - 폼을 "제출"헸을 때에 해당하는 이벤트는 무엇인가요?
// - [ ] 아이디 값과 댓글 값을 가져와야 합니다.
// - [ ] <li> 태그를 새로 만들고, "아이디 - 댓글내용" 형식이 되도록 설정합니다.
// - [ ] <ul class="comment-list"> 태그에 li를 추가합니다.
// - [ ] 아이디 input과 댓글 input을 초기화해야 합니다.

// 폼 이벤트

// const userID = document.getElementsByClassName('userid');
// const comment = document.getElementsByClassName('comment');
// const submitForm = document.querySelector('form');
// const list = document.querySelector('.comment-list');

// submitForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const userInput = document.querySelector('input[name="userid"]');
//     const commentInput = document.querySelector('input[name="comment"]');

//     const newComment = commentInput.value.trim(); // 댓글 공백 제거
//     const newUser = userInput.value.trim(); // 양쪽 공백 제거

//     if (newUser !== '') {
//         const newUserLi = document.createElement('li'); // <li></li>
//         newUserLi.style.fontWeight = 'bold';
//         // 아이디와 댓글 결합하여 표시
//         newUserLi.textContent = `${newUser}: ${newComment}`; // "아이디: 댓글" 형식
//         list.appendChild(newUserLi); // li 요소를 ul에 추가
//     }

//     userInput.value = '';
//     commentInput.value = '';
// });

// const value1 = document.querySelector('#value1');
// const value2 = document.querySelector('#value2');
// const operator = document.querySelector('#operator');
// const result = document.querySelector('#result');
// // [계산] 버튼 클릭시 cal() 함수가 실행되도록 인라인 방식으로 미리 설정해 두었습니다.
// function cal() {
//     const val1 = parseInt(value1.value);
//     const val2 = parseInt(value2.value);
//     const opr = operator.value;

//     switch (opr) {
//         case '+':
//             finalValue = val1 + val2;
//             break;
//         case '-':
//             finalValue = val1 - val2;
//             break;
//         case '*':
//             finalValue = val1 * val2;
//             break;
//         case '/':
//             finalValue = val1 / val2;
//             break;
//     }
//     result.value = finalValue;
// }
// [초기화] 버튼 클릭시 resetInput() 함수가 실행되도록 인라인 방식으로 미리 설정해 두었습니다.
// function resetInput() {
//     const form = document.querySelector('form');
//     form.reset();
// }


// TODO: practice14_설명.png 이미지의 조건을 만족하는 js 코드 작성
      // writeNote() 함수를 미리 정의해두었습니다.

      // [등록] 버튼 클릭시 writeNote() 함수가 실행되도록 인라인 방식으로 미리 설정해 두었습니다.
const writer = document.getElementById('writer');
const content = document.getElementById('content');
const table = document.getElementById('table');
const button = document.querySelector('button');

button.addEventListener('submit',
function writeNote() {
    
    e.preventDefault();

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() +1;
    const date = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();

    const day = `${year}-${month}-${day} ${hour}:${minute}`;
    

    const user = document.querySelector('input[id="writer"]');
    
    if (user !== ""){
        const Tr = document.createElement('tr');
        const userTd = document.createElement('td');
        const ctnTd = document.createElement('td');
        const Date = document.createElement('td');
        table.append(Tr);
        Tr.append(userTd, ctnTd, Date);

        userTd.innerText = writer.value;
        ctnTd.innerText = content.value;
        Date.innerText = day.value;
    }

    writer.value = '';
    content.value = '';
});

