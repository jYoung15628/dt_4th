const span = document.querySelector('span');

span.innerHTML = '<b>맛없다ㅡㅡ;;</b>';
span.style.color = 'red';

const container = document.querySelectorAll('ul li');
for (let i = 0; i < container.length; i++) {
    container[i].classList.toggle('todo', 'done');
}
console.log(container);

const todo = document.getElementsByClassName('todo');

for (let i = 0; i < todo.length; i++) {
    todo[i].classList.toggle('done');
}

const done = document.getElementsByClassName('done');

for (let i = 0; i < done.length; i++) {
    done[i].classList.toggle('todo');
}

const section = document.querySelector('section');
const icecreams = [
    '내가 아인슈페너?!',
    '엄마는 외계인',
    '민트 초콜릿 칩',
    '뉴욕 치즈케이크',
    '아이스 초당옥수수',
    '초콜릿 무스',
    '체리쥬빌레',
    '뮤! 넌 내거야',
    '오레오 쿠키 앤 크림',
];

for (let num = 0; num<icecreams.length; num++){
    
    const box = document.createElement('div');
    box.classList.add('article-box');

    const img = document.createElement('img');
    img.classList.add('img-box');

    const rank = document.createElement('h3');
    rank.classList.add('text-center');

    const ice = document.createElement('div');
    ice.classList.add('text-center');

    
    const icyImg = `./ice/ice${num}.png`; // 이미지 경로 문자열
    img.setAttribute('src', icyImg); // img 요소에 src 속성을 추가
    rank.innerText = `Top ${num + 1}`;
    ice.textContent = icecreams[num];

    box.append(img, rank, ice);
    section.append(box);
    
};