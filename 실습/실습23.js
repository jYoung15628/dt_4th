/* Date 객체의 getDay() 이용
getDay(): 요일별로 0 ~ 6(일 ~ 토) 으로 숫자 반환
*/
// 1. switch문 이용
switch (now.getDay()) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('평일');
        break;
    case 0:
    case 6:
        console.log('주말');
        break;
    default:
        console.log('알수없음');
        break;
}

// 2-1. if문: if 와 else if 로 모든 경우 일일이 확인
if (now.getDay() === 0) {
    console.log('주말');
} else if (now.getDay() === 1) {
    console.log('평일');
} else if (now.getDay() === 2) {
    console.log('평일');
} else if (now.getDay() === 3) {
    console.log('평일');
} else if (now.getDay() === 4) {
    console.log('평일');
} else if (now.getDay() === 5) {
    console.log('평일');
} else if (now.getDay() === 6) {
    console.log('주말');
}

// 2-2. if문: if 와 else 이용
if (
    now.getDay() === 5 ||
    now.getDay() === 1 ||
    now.getDay() === 2 ||
    now.getDay() === 3 ||
    now.getDay() === 4
) {
    console.log('평일');
} else {
    console.log('주말');
}

// 3. 삼항연산자 이용
const todayStatus = now.getDay() === 0 || now.getDay() === 6 ? '주말' : '평일';
console.log(todayStatus);
