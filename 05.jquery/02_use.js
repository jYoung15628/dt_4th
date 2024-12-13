// val() - value
function getValue() {
    // js
    // const inputVal = document.querySelector('input').value;
    // alert(inputVal);

    // jQuery
    const value = $('input').val();
    alert(value);
}

function setValue() {
    // js
    // document.querySelector('input').value = '하이!';

    // jQuery
    $('input').val('하이하이!');
}

// css()
function changeCssJS() {
    const span = document.querySelector('span');
    span.style.fontSize = '20px'; // 인라인 방식
    span.style.color = 'red';
}

function changeCssJquery() {
    // case1
    // $('span').css('font-size', '40px'); // css 스타일
    // $('span').css('color', 'blue');

    // case2 - css 여러 속성 한번에 적용
    $('span').css({
        fontSize: '40px', // 모든 span에 대해 폰트 크기 변경
        color: 'blue', // 모든 span에 대해 폰트 색상 변경
    });
}

function getCssJquery() {
    // js
    // console.log(document.querySelector('span').style.color);
    // style 객체는 인라인 스타일에 설정된 값만 가져올 수 있음.

    // jQuery
    console.log($('span').css('color'));
    // .css() 메서드는 브라우저에게 계산된 스타일 값을 반환.
    // 계산된 스타일을 반환하므로, 인라인 스타일뿐만 아니라 모든 적용된 스타일 정보를 가져 올 수 있음.
    // 반환 값은 대부분 RGB형식.
}

// attr()
function changeAttrJS() {
    // Quiz
    // a 태그를 선택하고 href 속성 값을 naver 주소로 변경
    const a = document.querySelector('a');
    // a.setAttribute('href', 'https://naver.com'); // HTML 속성 값을 설정하는 방법
    a.href = 'https://www.naver.com'; // Dom 요소의 속성에 직접 접근 하는 방법
}

function changeAttrJquery() {
    $('a').attr('href', 'https://www.daum.net');
}

//  text()
function changeTextJS() {
    // 퀴즈
    // p-text 클래스를 갖는 요소를 선택하고 , 요소의 텍스트를 임의의 값으로 변경
    const p = document.querySelector('.p-text');
    p.innerText = '메롱메롱';
}
function changeTextJquery() {
    $('.p-text').text('jquery로 텍스트 변경함');
}

// html()
function changeHtmlJS() {
    const html = document.querySelector('.p-html');
    html.innerHTML = '<h3>javascript</h3>';
}

function changeHtmlJquery() {
    $('.p-html').html('<h3>jQuery</h3>');
}

// 요소 추가하기
//  append()
const colors = document.querySelector('.colors');
function appendJS() {
   
    const li = document.createElement('li');

    li.innerHTML = '마지막으로 추가된 js';

    colors.append(li);
}

function appendJquery() {
    $('.colors').append('<li>마지막 자식으로 추가된 jquery</li>'); // 태그도 적용됨
}

// prepend()
function prependJS() {
    // const colors2 = document.querySelector('.colors');
    const li = document.createElement('li');

    li.innerText = '첫 자식으로 추가된 js';

    colors.prepend(li);
}

function prependJquery() {
    $('.colors').prepend('<li>첫 자식으로 추가된 jquery</li>'); // 태그도 적용됨
};

function beforeJS(){    
    const green = document.querySelector('.green');
    const li = document.createElement('li');

    li.innerHTML = 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)';
    li.style.color = 'blue';
    //  li.setAttribute('style','color: blue');
    green.before(li);
    
};

function beforeJquery(){
    $('.green').before(
        '<li style="color:red">green 클래스를 갖는 요소의 이전 형제 요소로 추가(jquery)</li>'
    );
};

function afterJS(){    
    const green = document.querySelector('.green');
    const li = document.createElement('li');

    li.innerHTML = 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)';
    li.style.color = 'green';
    //  li.setAttribute('style','color: blue');
    green.after(li);
    
};

function afterJquery() {
    $('.green').after('<li>다음 형제 요소로 추가 (Jquery)</li>');
}

// 요소 삭제하기
function removeJS(){
    const li =document.querySelector('#li2');
    li.remove();
}

function removeJquery(){
    $('#li2').remove();
}

// empty
function emptyJS(){
    // 참고! js에서는 emty 메서드가 없습니다
    // 1. ul 태그이자 num 클래스를 갖는 요소를 선택후
    const num = document.querySelector('ul.num');

    // 2. 해당 요소의  hmtl을 빈 문자열로 설정
    num.innerHTML = '';
}

function emptyJquery(){
    $('.num').empty();
};

function findParent() {
    console.log(document.querySelector('.child2').parentNode); // 모든 부모 노드 가능
    console.log(document.querySelector('.child2').parentElement); // 부모 "요소"인 것만 가능
    console.log(document.querySelector('html').parentNode); // 부모가 document면 #document
    console.log(document.querySelector('html').parentNode); // 부모가 document면 null
    console.log($('.child2').parent());
};

function findParents(){
    // js 없습니다! 패스
    console.log($('.child2').parents());
}

function findNext(){
    console.log(document.querySelector('.child2').nextElementSibling);
    console.log($('.child2').next());
};

function findPrev(){
    console.log(document.querySelector('.child2').previousElementSibling);
    console.log($('.child').prev());
}

function findChildren(){
    console.log(document.querySelector('.parent').children);
    console.log($('.parent').children());
}

//  클래스 조작하기
function addClass() {
    //  hi 아이디 갖는 요소 선택하여 'fs-50' 갖게하기
    // const hi = document.querySelector('#hi');
    // document.querySelctor('#hi').classList.add('fs-50);
    // hi.classList.add('fs-50');
    $('#hi').addClass('fs-50');

}

function removeClass(){
    // document.querySelector('#hi').classList.remove('fs-50');
    $('#hi').removeClass('fs-50');
}
 
function hasClass(){
    console.log(document.querySelector('#hi').classList.contains('fs-50'));
    console.log($('#hi').hasClass('fs-50'));
}

function toggleClass(){
    // console.log(document.querySelector('#hi').classList.toggle('bg-pink'));
    $('#hi').toggleClass('bg-pink');
}