let mathScore = prompt('수학 점수 입력');
console.log('mathScore >>>> ', mathScore, typeof mathScore);
let engScore = prompt('영어 점수 입력');
console.log('engScore >>>> ', engScore, typeof engScore);
let avg = (mathScore + engScore) / 2;
console.log(`수학, 영어 평균점수는 ${avg}점 입니다.`);
