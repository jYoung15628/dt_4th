// 요소 가져오기!
const div1 = document.getElementById("div1");
console.log(div1);

// #1. 태그 내부 내용 변경
//  innerHTML : 태그 사용 가능
//  innerText, textContent : 태그가 문자(기호)로 그대로 노출

console.log('innerText >>>>>>>>', div1.innerText); // how do you do
console.log('textContent>>>>>', div1.textContent); // how do you do today?

// 1. innerHTML 
div1.innerHTML = '여기는 <b> 첫번째</b> 태그!';
console.log('innerHTML>>>>>', div1);

// 2. innerText 와 textContent
// # 공통점 (= 쓰기)
// - 둘 모두 텍스트를 추가한다.

div1.innerText = '여기는 <b>두번째</b> 태그';
console.log('innerText >>>> ', div1);

div1.textContent = '여기는 <b>세번째</b> 태그';
console.log('textContent >>>> ', div1);

// # 차이점 (= 읽기)
// innerText = HTML 태그를 해석하지 x, 보여지는 텍스트만 그대로
// textContent = HTML 태그를 포함하여 처리.

// #2. 속성(attribute) 변경
// setAttribute(속성명, 변경할 속성 값 ) => 속성값을 '설정'
const naver = document.getElementById('naver');
naver.setAttribute('href', 'https://www.google.com');

const owl = document.getElementById('owl');
owl.setAttribute('src', '../실습/1.png');

//getAttribute(속성명) => 속성 값 '얻기'
console.log(document.getElementById('owl').getAttribute('src')); // ../실습/1.png 

// +) 참고1. 속성 접근(.) 연산자로도 가능.
console.log(document.getElementById('owl').id);

// +) 참고2. 연산자로 속성에 접근하고 = 할당 연산자로 속성 값 변경 가능
document.getElementById('naver').href = '#'; // 내부 앵커 / 현재 페이지의 상단으로 스크롤


// #3. CSS 지정
const h1 = document.querySelector('h1');
console.log(h1); 
const list = document.querySelectorAll('ul > li'); // 유사 배열 (NodeList)
console.log(list); 

//  1) style 속성
//  - DOM 요소의 인라인 스타일을 지정할 수 있도록 제공되는 속성
//  - style.XXX (XXX: camelCase)
list[0].style.backgroundColor = 'purple'; // background-color: ;
list[0].style.fontSize = '20px' ;
list[0].style.color = 'white';

// 반복문 사용해서 적용 (list 배열에 포함된 모든 요소)
for (let li of list){
    li.style.backgroundColor = 'pink';
    li.style.fontSize = '40px';
    li.style.color = 'skyblue';
}


// 2) classList 활용
// xxx.classList.add
// xxx.classList.remove
// xxx.classList.contains : 있는지 없는지 확인 (t/f)
// xxx.classList.togggle : 있으면 제거, 없으면 추가

h1.classList.add('add-h1');
h1.classList.remove('add-h1');
console.log(h1.classList.contains('add-h1')); //false
h1.classList.toggle('add-h1');
console.log(h1);

///////////////////////////////


// #4. 요소 찾기. (다른 노드에 접근)
//  계층 구조 (형제, 부모, 조상, 자손)

const friends = document.querySelector('#friends');
const hoon = document.querySelector('#hoon');

//  1. 자식요소
console.log(friends.children); // 유사 배열, 자식 모두 선택 // [li, lli#hoon, li, li, li, hoon: li#hoon]
console.log(friends.children[0]); //인덱스 접근

//  2. 부모 요소
console.log(hoon.parentNode);
console.log(hoon.parentNode.parentNode); // body 

// 3. 형제 요소
console.log(hoon.previousElementSibling); // 이전
console.log(hoon.nextElementSibling); // 다음
console.log(hoon.nextElementSibling.nextElementSibling); // 맹구 //형형제

////////////////////////////////////

// #5. 새로운 요소 생성
const container = document.querySelector('.container');
const p = document.createElement('p'); // p태그 생성 (요소 생성) <p></p>

console.log(p); // js로  <p></p>  태그를 만듬

p.innerText = '새로 추가된 p 요소 입니다';
p.style.fontWeight = 700;
p.style.backgroundColor = 'aquamarine';
// <p style= "font-weight: 700; background-color:"aquamarine"></p>

console.log(p);
// <p style= "font-weight: 700; background-color:"aquamarine">새로 추가된 p 요소 입니다</p>

// #6. 요소 추가
//  x.append(y) : x 요소의 맨 마지막 자식으로 y요소가 추가 // 여러개 가능
//  x.appendChild(y): x요소의 멘 마지막 자식으로 y 요소가 추가 // 한개만 가능
div1.appendChild(p);

const p2 = document.createElement('p');
const p3 = document.createElement('p');

p2.innerHTML = 'p2';
p3.innerHTML = 'p3';
console.log(p2);

p2.classList.add('p-2'); // p 태그에 p-2 클래스 추가
p3.classList.add('p-3');

container.append(p2, p3) // 여러개 추가가 가능


// x.prepend(y) : x요소의 맨 처음 자식으로 y요소가 추가
// x.before(y) : x요소의 바로 이전 형제 요소로 y요소 추가
// x.after(y) : x요소의 바로 다음 형제 요소로 y요소 추가

// const li1 = document.createElement('li');
// li1.textContent = '흰둥이';
// friends.prepend(li1);

// const li0 = document.createElement('li');
// li0.innerHTML = '<b>짱구 친구들을 소개 합니다.</b>';
// friends.prepend(li0);

// hoon.before(li1);
// hoon.after(li1); // 코드 가장 밑에 있는것만 적용

// #7. 요소삭제
//  x.remove() : x 요소 자체를 삭제
//  x.removeChile(y) : x의 자식 요소인 y가 삭제
// 둘 다 메모리에서 즉시 삭제되지 않으니, 참조를 유지하면 재활용이가능하다
const firstLi = document.querySelector('li'); // queryselector 첫번째 요소만 가져옴
console.log(firstLi); // 짱구

const ul = firstLi.parentNode; 
console.log(ul); // freinds

// ul.remove(); // ul 태그 자체가 삭제됨
// firstLi.remove(); // 짱구만 사라짐 


ul.removeChild(firstLi); // 짱구만 없어짐
div1.appendChild(firstLi); // 짱구를 잘라낸 것을 div1에 붙임  // JS 특성 상 메모리를 바로 삭제하지 않음


