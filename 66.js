const toDoList =document.getElementById("to-do-list");

const addNewTodo = (text)=>{ // => 스타일은 fat arrow

    const li = document.createElement("li"); //여기서 li는 tagname
    li.textContent = text;
    
    toDoList.appendChild(li);

}
//Arrow Functions vs Regular Functions
addNewTodo("운동하기");
addNewTodo("독서하기");
addNewTodo("코딩하기"); 
 
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
