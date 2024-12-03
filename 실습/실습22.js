// function A(){

//     let a = prompt('숫자를 입력해주세요');

//         if ( a % 13 == 0 && a % 2 == 1) {
//             return '13의 배수이면서 홀수입니다';
//         } else {
//             return '13의 배수와 홀수가 아닙니다';
//         }
//     }

// console.log(A());

// for (let i = 1; i <= 1000; i++) {
//     if (i % 13 == 0 && i % 2 == 1) {
//         console.log(i);
//     }
// }

// for (let b = 2; b <= 9; b++) {
//     for (let j = 1; j <= 9; j++) {
//         console.log(`${b} x ${j} = ${b * j}`);
//     }
// }

// let sum = 0;

// for (let number = 1; number <= 100; number++) {
//     if (number % 5 == 0 || number % 2 == 0) {
//         sum += number;
//     }
// }

// console.log(sum);

// Q) for문을 활용한 별 찍기.
// 결과 모습)
/**
 * h = 5 입력
 *     *    // i = 1; / j = h-1 = 4 / k = 1
 *    **    // i = 2; / j = h-2 = 3 / k = 2
 *   ***    // i = 3; / j = h-3 = 2 / k = 3
 *  ****
 * *****    // i = 5; / j = h-5 = 0 / k = 5
 */
// Hint 1) prompt 사용해서 높이를 입력 받기. - 10진수의 정수(int)형으로 형변환 할 것.
// Hint 2) 각 줄의 내용을 저장할 문자열 변수 만들기.
// Hint 3) 문자열(" ") 과 문자열(*)을 더한다.
// Hint 4) for문 중첩.

const h = parseInt(prompt('높이를 입력하세요: '), 10);

// 별 찍기
for (let i = 1; i <= h; i++) {
    let line = ''; // 각 줄의 내용을 저장할 문자열

    // 공백 추가
    for (let j = 1; j <= h - i; j++) {
        line = line + ' ';
    }
    // line = "    "

    // 별 추가
    for (let k = 1; k <= i; k++) {
        line = line + '*';
    }
    // line = "    *"

    console.log(line);
}
// h = 5 입력 했을 가정)
// i = 1 / j = 1 ~ 4 / k = 1 ====>        *
// i = 2 / j = 1 ~ 3 / k = 2 ====>       **
// i = 5 / j = 0 만족 x / k = 5 ====> *****

let sum1 = 0;

for (let n = 0; n <= 100; n++) {
    sum1 += n;
    console.log(sum1);
}

// 1~100까지 합을 for...of 문으로 구하기
let sum = 0;

// Array.from()으로 1부터 100까지의 배열 생성
const range = Array.from({ length: 100 }, (_, i) => i + 1);

for (const num of range) {
    sum += num;
}

console.log('1~100까지의 합:', sum);

let sum2 = 0;

const range1 = Array.from({ length: 100 }, (_, a) => a + 1);

range1.forEach((num1) => {
    sum2 += num1;
});

console.log('1~100까지의 합:', sum2);

let fruits1 = ['사과','딸기','파인애플','수박','참외','오렌지','자두','망고'];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];

const same = fruits1.filter(function (fruits) {
    return fruits2.includes(fruits);
});
console.log(`same ${same}`);

const diff = fruits1.filter(function (fruits) {
    return !fruits2.includes(fruits);
});
console.log(`diff ${diff}`);