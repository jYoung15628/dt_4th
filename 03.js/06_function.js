// 함수
// : 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합

// 구조
// - keyword : function
// - name : 함수 이름 - camelCase로 작성함
// parameter : 함수 선언시 매개변수로 받을 것
// body: 함수 내부 코드 (Scope 라고도 함)

// 용어 정리
// - 함수 정의(선언): 함수를 "생성"
// - 함수 호출: 함수를 "사용"

// 함수 선언 방식
// #1. 명시적 함수 선언 = 함수 (선언문)
// - 함수 이름과 매개변수를 명시하고 함수의 본문을 중괄호로 감싼다
// - 스크립트 어디에서든 호출 할 수 있다
// -"function" 키워드를 사용하여 함수를 선언하는 방식이다.

function helloWorld(){
    //함수 정의
    // return 키워드 생략 가능 (반환 값이 없을 경우)
    console.log('Hello, World!');
}
helloWorld(); //함수 호출

function helloWorld2(){
    return 'Hello, World! 2';
}
// helloWorld2();
console.log(helloWorld2());

// *return 이란? (반환 값)
// : 함수 내부 (body, block) 코드의 "최종 결과 값"
// 최종 결과 값을 저장하고 보관하기 위한 키워드
// return 키워드를 만나면 함수 실행 중단 (return 다음에 코드 더 작성 의미 없음)

// #2. 함수 표현식 (Function Expression)
// - 변수에 "익명 함수"를 할당(저장)하는 형태. // JS에서는 함수도 값이기에 가능함 
// - 변수가 선언된 이후에만 호출 할 수 있다.


// * 익명 함수란?
// - 말 그대로 이름이 없는 함수

// -> 이름을 지정할 수도 있음
// - 단 이 경우에는 함수 이름은 내부에서만 사용 가능!
// Ex)
const sayHello = function hello(){
    console.log('hello');
};

sayHello();
//hello(); // referenceError : hello is not defined (같은 스코프에 존재하지 않기 때문)

const helloWorld3 = function () {
    // return 생략버전
    console.log('Hello, world! 3');
};

const helloWorld4 = function () {
    // return 있는 버전
    return 'Hello, World! 4';
};

helloWorld3();
console.log(helloWorld4);
helloWorld3();
helloWorld3();
helloWorld3();


// ->  함수는 "여러 번" 호출이 가능하다!
// 매개변수가 있는 함수는 How?
// 1. 매개변수 1개 
function food(text){ // text : 매개변수
    return text;
}
console.log(food("제육덮밥")); // 매개변수 : 제육덮밥

const drinkPrice = 2000;
console.log(food(drinkPrice)); // 매개변수 : 2000

// 2. 매개변수 2개
function music(name, title){
    // return name + ' - ' + title; // name - title
    return `${name} - ${title}`; // 백틱 입력방식 => 많이 사용
}

console.log(music('윤도현', '흰수염고래'));

// 이렇게도 가능!
function music2 (name, title){
    console.log(`${name} - ${title}`);
}

music2('악뮤', '후라이의 꿈');

// #3. 화살표 함수 (arrow function) (ES6부터 지원)
// 함수 표현식의 축약형. 간결하게 정의
// 단일 표현식의 경우에는 중괄호와 return 키워드 생략 가능!
// 코드가 길어진다면(여러줄) 중괄호와 return 키워드 명시!
// - 함수명 쓰지 않음.

// 일반형 (단일 표현식)
// function square(x){
//     return x  * x;
// }
// console.log(squre(2));

// 축약형
const square1 = (x) => x ** 2 ;
// const square1 = (x) => x * x ; (같음!) 
// ** 뒤에 무조건 값(제곱값)을 넣어줘야 함 !
console.log(square1(3));
const square = (x, y) => x * y;
console.log(square(3,4)); //12

// 일반형 (여러줄)
// function triangle(base, height){
//     const area = (base * height) /2; 
//     // area : 변수 base, height: 메개변수 변수에 메개변수 값을 담아서  traingle 함수에서 호출!
//     return area;
// }

// 축약형
const triangle = (base, height) => {
    const area = (base * height) / 2 ;
    return area;
};

// * 호이스팅(hoisting) -> 함수, 변수
// - JS에서 변수 및 함수 선언이 해당 범위의 맨 위로 끌어올려지는 현상.
// - "함수 선언문"이 호이스팅!
// - 변수에서는 "var"

function sayHello5(){
    console.log('Hello');
}
sayHello5();

// - 정상 출력
// Q) 호이스팅이 좋은거에요? 나쁜거에요?
// A) 좋고 나쁘다고는 할 수 없다. 코드를 읽게 쉽게 하지만, 혼동할 수 있으므로 주의해야함!
// 코드의 가독성을 높이기 위해서는 선언을 가능한 상단에 위치시키는것이 좋다.

// 함수 표현식 (변수에다가 함수를 넣은것)
// - 호이스팅의 대상이 될 수 없음.
// - Why?
// - 변수에 함수가 할당되기 때문에 그 이후에만 호출 가능!

// sayHello6(); // referuenceError! 변수에 함수를 할당되기  때문에 이전 호출 불가능!
const sayHello6 = () => {
    console.log('hello2 ~~~~');
};
sayHello6(); // 이후 호출은 가능!

const sayHello7 = () => console.log('hello2 ~~~~'); 