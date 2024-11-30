function Age() {
    let age = prompt('나이를 입력해주세요'); //prompt() => prompt 창

    if ( age >120 || age < 0) {
        console.log('입력값이 잘못 되었습니다. 숫자의 범위를 벗어났습니다');
    } else if (age >= 20) {
        console.log('성인');
    } else if (age >= 17) {
        console.log('고등학생');
    } else if (age >= 14) {
        console.log('중학생');
    } else if (age >= 8) {
        console.log('초등학생');
    } else {
        console.log('유아');
    }
}

console.log(Age());
// const result = Age();
// console.log(result); // 변수명으로 가져다 사용할때 활용도가 올라감
