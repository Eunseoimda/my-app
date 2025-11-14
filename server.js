import express from 'express';
import path from 'path';
// 예시 npm 패키지 import 가능
import lodash from 'lodash';

const app = express();
const port = 3000;

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// 버튼 클릭 시 실행되는 라우트
app.get('/run-task', (req, res) => {
  // Node.js + npm 패키지 기능 실행
  const arr = [1, 2, 3, 4];
  const shuffled = lodash.shuffle(arr); // 예: lodash 사용
  console.log('버튼 클릭! 배열 섞기 결과:', shuffled);

  res.send(`Node.js + lodash 실행됨: ${shuffled}`);
});

app.listen(port, () => {
  console.log(`서버 시작: http://localhost:${port}`);
});
