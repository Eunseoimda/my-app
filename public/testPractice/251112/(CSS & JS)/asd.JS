
// data-field 속성을 가진 태그들을 모두 찾아서 fields에 저장

// 결과는 배열 비슷한 NodeList (예: <b>, <b>, <b> 총 3개)

const fields = document.querySelectorAll('[data-field]');
//화면에 표시할 데이터를 객체 형태로 저장

// title, manager, status → property 이름

// 나중에 task[field] 이렇게 접근함
const task = {
  title: 'aaaa',
  manager: 'eunseo, linnow',
  status: '',
};

for (let tag of fields) {
  const field = tag.dataset.field;
//dataset.field → data-field 속성값을 가져옴

// 예: 첫 번째 <b data-field="title"> → field = "title"
  tag.textContent = task[field];
};
// tag.textContent 는 <b> 태그 내부에 들어갈 글자

// task[field] 는 객체에서 해당 key 의 값 가져오기

// 즉 "title" → task["title"] → "aaaa"

// 결과적으로 <b>aaaa</b> 가 됨
// 버튼들(btn 클래스 가진 모든 버튼)을 불러옴
const btns = document.querySelectorAll('.btn');


for (let btn of btns) {
    const status = btn.dataset.status;
    btn.onclick = function () {
    fields[2].textContent = status;
    fields[2].dataset.status = status;
    }
};