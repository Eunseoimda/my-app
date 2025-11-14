// const numbers = [1, 3, 5, 7, 9];

// const someReturn = numbers.some((el, i)=>{

//     console.log('some:', i);
//     return el > 5;
// });
// console.log('some', someReturn);
const spait = [
  { codeName: 'ApplePie', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
  { codeName: 'BigBoss', members: ['스파이', '스파이', '스과이', '스파이', '스파이'] },
  { codeName: 'CEO', members: ['스파이', '스파이', '스파이', '습하이', '스파이'] }, // <-
  { codeName: 'DeathNote', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
  { codeName: 'EarlyBird', members: ['스파이', '스마이', '스파이', '스파이', '스파이'] },
  { codeName: 'Faker', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
];

function checkSpy(team) {
  // 여기에 코드를 작성하세요

    // every = 배열의 모든 요소가 콜백 함수를 실행시켰을 때 참이면 -> 참, 일부가 참이 아니면 -> 거짓
    // some = 배열의 일부 요소가 콜백 함수를 실행시켰을 때 참이면 참, 모두 아니면 거짓

    let message = team.members.every((item) => item === "스파이");
    


	return message;
};

// 테스트 코드
spait.forEach((team) =>
{
    if (checkSpy(team))
    { console.log("팀 " + team.codeName+ " 에는 이중 스파이가 없습니다.")

    }
    else
    {
    console.log("[주의!] 팀 " + team.codeName+ " 에 이중 스파이가 있습니다!")
    }
});
// 팀 ApplePie 에는 이중 스파이가 없습니다.
// [주의!] 팀 BigBoss 에 이중 스파이가 있습니다!
// [주의!] 팀 CEO 에 이중 스파이가 있습니다!
// 팀 DeathNote 에는 이중 스파이가 없습니다.
// [주의!] 팀 EarlyBird 에 이중 스파이가 있습니다!
// 팀 Faker 에는 이중 스파이가 없습니다.
// 스파이 요원을 전문적으로 파견하는 기업인 스파잇에는 총 6개의 팀이 있습니다.
// 스파잇의 대표 영수는 어느 날 기업 내에 이중 스파이가 있다는 사실을 알게 되었어요.

// 아래의 조건을 참고하여 각 팀의 멤버들 중에 순수 스파이가 아닌 사람이 있는지 확인하는 checkSpy 함수를 완성해 주세요.

// 스파잇의 직원들은 모두 '스파이'로 불리고, 이중 스파이는 '스파이와 비슷한 이름'을 갖고 있습니다.
// checkSpy 함수의 첫번째 파라미터에는 하나의 팀을 표현하는 객체를 아규먼트로 전달받게 됩니다.
// checkSpy 함수는 내부에서 some 혹은 every 메소드를 활용합니다.
// checkSpy 함수는 최종적으로 message 변수에 담긴 값을 출력하게 됩니다.
// 아래 출력 결과를 참고하여 message 변수를 선언하고, 각 팀의 멤버들을 확인한 뒤 적절한 문구를 담아 주세요!