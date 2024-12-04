// JS 표준 내장 객체
// - 기본적으로 미리 정의된 객체
// - 모든 JS환경에서 사용할 수 있는 내장 객체들을 말한다
// - 자주 사용되는 기능들을미리 구현해 놓은것

// #1. Date 객체 : 시간, 날짜

// 날짜 생성하여 저장
let now = new Date();
console.log(now);

// new Date(TimeStamp)
let jan_01_1970 = new Date(0);
console.log(jan_01_1970);

let jan_02_1970 = new Date( 24 * 3600 * 100); // 24시간
console.log(jan_02_1970);
// 타임스탬프는 (TimeStamp)
// - 특정 시점의 날짜와 시간을 "숫자로 표현한값"
// - 보통 "에포크" 이후의 시간을 초 또는 밀리초 단위로 시간을 나타냄

//  Q) 에포크(Epoch)?
// - 특정 시간의 기준점
// - 1970년 1월 1일 09:00:00 UTC를 기준

// Q2) why? 왜 1970년 1월1일이 기준인가요?
// - 1. 역사적인 이유
//      - 유닉스 os에서 타임스탬프를 처음 정의할 때 사용한 날짜 (유닉스 시스템이 등장한 시점)
// - 2. 기술적인 편의성
//      - 시간을 숫자로 표현하여 계산하기가 수학적으로 편리함

// new Date(date_string)
let date = new Date('2024-12-04');
console.log('date',date); // Wed Dec 2024 09:00:00 CMT+0900

let date2 = new Date('2024', '11', '04'); // MM(0~11)[1월 ~ 12월] => 인덱스 값 11-> 12월
console.log('date', date2); 

let date3 = new Date
// * 관련 메서드
// - 객체 점 접근법
// - getDate(): '월'의 몇번째 날인지 반환
// - getDay(): '주'의 몇번째 날인지 반환합니다 (0부터 시작)
// - getMonth( ): 몇번째 달인지 반환 (0부터 시작)
// - getHours(): 시간 반환합니다 (0부터 23까지)
// - getMinutes(): 분을 반환합니다 (0부터 59까지)
// - getSeconds(): 초를 반환합니다 (0부터 59까지)
// - getMillisesons(): 밀리초를 반환 (0부터 999까지)
// - getTime(): 1970년 1월 1일부터 현재까지의 밀리초 단위의 시간을 반환

console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());
console.log(now.getDay()); // 0(일) ~6(토)
console.log(now.getHours()); // 11
console.log(now.getMinutes()); // 45

// -------------------------------

// Math 객체
// 수학적인 상수와 함수

// *속성
console.log(Math.E); // 2.718281828459045 자연로그
console.log(Math.PI); // 3.1415992653589793 파이
console.log(Math.SQRT2); // 1.4142 2의 제곱근 = 루트

// 메서드
console.log(Math.min(100, -2, 0, 5)); // -2 최소값 출력
console.log(Math.max(100, -2, 0, 5)); // 100 최대값 출력
console.log(Math.round(5.3124)); // 5 => 반올림
console.log(Math.round(5.8124)); // 6 
console.log(Math.ceil(5.3124)); // 6 => 강제 올림
console.log(Math.floor(5.712)); // 5 => 강제 내림
console.log(Math.random()); // 0 <= x < 1 범위의 난수

// Math.random() 응용예시
// 0 ~ 9
console.log(Math.floor(Math.random() * 10)); //  0<=x<10
console.log(Math.floor(Math.random()* 11)); // 0<=x < 11

// Quiz
// Q1) 1~100
console.log(Math.floor(Math.random() * 100)+1); // 0<= x < 100 ==> "1<x<101"

// Q2) 20 ~ 22
console.log(Math.floor(Math.random()* (22 - 20 + 1 ))+ 20);
// console.log(Math.floor(Math.random()*(3))+20);
// 0<=x<3 ==> 20<=x<23

// Q)실습
console.log(Math.floor(Math.random()* 11));

// Math.floor(Math.random() * (5 - 2 + 1)) + 2;
// // = Math.floor(Math.random() * 4) + 2 ; // 2~ 5
/**
 * function rand(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   document.writeln(rand(1, 3));
   document.writeln(rand(77, 88));
 */


