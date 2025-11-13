// const toDoList =document.getElementById("id");

// const addNew= (text)=>{ // => 스타일은 fat arrow

//     const li = document.getElementById('id'); //여기서 li는 tagname
//     li.textContent = text;
    
//     toDoList.appendChild(li);

// }
// //Arrow Functions vs Regular Functions

// addNew("운동하기");
// addNew("독서하기");
// addNew("코딩하기"); 
const addNewList = (Text) => {
  const todayList = document.getElementById("to-do-list");
  const li = document.createElement("li");
  li.innerHTML = Text;
  todayList.appendChild(li);

};
addNewList("메이플스토리2");

const willNewList = (Text) => {
  const TomorrowList = document.getElementById('will-do-list');
  const will = document.createElement('li');
  will.innerText = Text;
  TomorrowList.appendChild(will);
};
willNewList("마비노기모바일");
// function sum(a,b){
//     return a+b;
// }
// const sum = (a , b) => {
//     return a + b;
// };
const obj = {
  name: 'JS',
  
  regularFunc: function() {
    console.log('일반 함수 this:', this.name);
  },
  
  arrowFunc: () => {
    console.log('화살표 함수 this:', this.name);
  }
};

obj.regularFunc(); // "JS" → obj에 바인딩
obj.arrowFunc();   // undefined → this는 상위 스코프(global) 참조
