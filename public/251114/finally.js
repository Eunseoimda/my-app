// function printMembers(...members) {
//   for (const member of members) {
//     console.log(member);
//   }
// }

// try {
//   printMembers('영훈', '윤수', '동욱');
// } catch (err) {
//   alert('에러가 발생했습니다!');
//   console.error(err);
// } finally {
//   const end = new Date();
//   const msg = `코드 실행을 완료한 시각은 ${end.toLocaleString()}입니다.`;
//   console.log(msg);
// }

// 퀴즈 객체 예시
const quiz1 = {
  question: '다음 중 스승의 날과 생일이 같은 인물은 누구일까요?',
  example: ['율곡 이이', '퇴계 이황', '세종대왕', '신사임당'],
  answer: 3,
  solution: '훈민정음 창제 등 우리나라 문화와 교육 발전에 남긴 업적이 가장 큰 인물이라는 평가와 함께, 이 시대의 스승이 세종대왕처럼 존경받았으면 하는 바람으로 세종대왕의 탄생일이 스승의 날로 지정되었습니다.',
};

const quiz2 = {
  question: '다음 중 희노애락에 속하지 않는 것은 무엇일까요?',
  example: ['사랑', '기쁨', '즐거움'],
  answer: 1,
  solution: '희노애락에서의 애를 사랑 애(愛)라고 자칫 오해할 수가 있지만, 희노애락의 애는 슬플 애(哀)입니다. 기쁨은 기쁠 희(喜), 즐거움은 즐거울 락(樂)에 담겨 있습니다.',
};

// printQuiz 함수 수정
function printQuiz(obj) {
  try {
    // 구조분해 시도
    const { question, example } = obj;

    // 문제 문자열 생성
    let exMsg = '';
    for (let i = 0; i < example.length; i++) {
      exMsg += `${i + 1}. ${example[i]}  `;
    }

    console.log(question);
    console.log(exMsg);
  } catch (error) {
    // 에러 발생 시 에러 이름만 출력
    console.log(error.name);
  }
}

// 테스트 코드
console.log('GURU');
printQuiz(quiz1);  // 정상 출력
printQuiz(1);      // TypeError
printQuiz("");     // TypeError
printQuiz({});     // TypeError (example이 없어서 에러)
printQuiz(quiz2);  // 정상 출력
