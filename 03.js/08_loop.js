// 반복문

// 1. for문

/*
    구문
    for([변수 선언 & 초기값 설정]; [조건식(범위 지정)]; [증감식]){
        반복 시킬 코드 내용 입력.
    }

*/

for (let i =0; i < 10; i++ ){
    // i가 0~9 총 10번 반복
    console.log('안녕', i);
}

// Q1) 1~5 출력
    for ( let i = 0; i<5; i++){
        console.log(i + 1);
    }

// Q2) 5~1 출력
    for ( let i = 5; i>0; i--){
        console.log(i);
    }

// 1부터 n까지의 합 구하기
let n = 10; // 어떤숫자까지 합을 구할지에 대한 n
let sum = 0; // 합을 저장할 변수
for (let i =1; i<=n; i++){
    sum += i;
    // sum = sum + i;
    console.log(i, sum);
};
console.log(sum);
console.log('-------------------------');

// 2. for ~ if 중첩
// * 간단 실습

// Q) 1 ~ 20 중에서 짝수 일 때의 합을 구하기
// hint 1) 1 ~ 20 까지의 숫자를 반복
// hint 2) 현재 반복 숫자가 짝수라면 (변수)에 더하기.
// hint 3) for문 안에 if문 조합 해보세요

let sum2 = 0; //짝수의 합 저장할 변수
// for(let n1=0; n1<=20; n++ ){
//     if (n1 % 2 === 0) {
//         sum2 = sum2 + n1;
//         console.log(i, sum2);
// }

for(let i=0; i<=20; i++){
    console.log(i);
    if(i %2 === 0){
        sum2 = sum2 + i;
        // sum2 += i;
        console.log(i, sum2);
    }
}


/////////////////////////////////////////
//3. while 문
//ex1)
let idx = 0;
while(idx <10){
    console.log('안녕', idx);
    idx = idx + 1;
    // idx += 1 ;
}

//ex3) while문 구구단
let i =2;
let j =1;
while(i < 10){
    while(j < 10){
        console.log(i, 'x', j, '=', i*j);
        // console.log(`${i} x ${j} = ${i*j}`);
        j++ ;
    }
    i++;
    j = 1;
}

// Q) 1부터 20까지의 홀수 합 구하기 (while 사용)
let e= 1;
let d = 0;

// while(e <= 20){
//     // 조건 : i 가 20 이하일때 반복
//     while (e % 2 === 1) {
//         // i가 홀수인지 확인
//         d += e; // 홀수면, 합에 더해주기
//         console.log(d);
//         e++;
//     }
    
// }

// Q) 10부터 1까지 역순으로 숫자 출력하기 (while문 사용)

let c = 10;

while (c > 0){
    
    console.log(c);
    c--;
}

// 4. do while 문
// while 문과 비슷하지만, 조건을 반복문 실행 후 확인함
// 조건이 참인지 여주에 상관없이 코드 블록을 최소 한번 실행한 후 조건을 검사한다
// 즉, 항상 코드 블록을 한번 실행한 다음, 조건이 참인 동안 반복을 계속

// 구문
// do {
//     // 실행할 코드 내용
// }while (조건);

//ex1)
let g = 1;
do{
    console.log('g/////', g);
    g++;
}while(g <= 5);
// 1 2 3 4 5

//ex2)
let number
do{
    number = parseInt(prompt('숫자를 입력하세요 (10보다 큰숫자):'), 10);
}while(number <= 10);
console.log('입력한 숫자: ', number);
// 10보다 작은 수를 입력하면 조건을 계속해서 만족하기 때문에 prompt가 반복 실행됨

////////////////////
// 5. break & continue
// - 반복문에서 사용되는 제어문

// # break
// - 반복문을 완전히 중단하고 빠져나옴

// # continue
// - 현재 반복을 중지하고 다음 반복으로 넘어감 (이번 회차 건너뛰기)

// ex) break
for ( let i = 1; i <= 10; i++){
    if ( i===5 ){
        break;
    }
    console.log(`i >>>>> ${i}`);
}

// 출력결과 : 1 2 3 4

//ex) continue
for( let i =1; i <=5; i++){
    if(i === 3){
        continue;
    }
    console.log(`i>>>> ${i}`);
}

// 출력결과 : 1 2 4 5