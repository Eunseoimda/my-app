
// showTitle 함수를 완성해 주세요
// showTitle 함수가 호출되면 가장 먼저 조건문을 통해 이벤트 객체의 target 프로퍼티에 담긴 요소에 data-title 속성의 값을 가지고 있는지
//  확인합니다.
// 조건문이 true일 경우 span 태그 형태의 요소 노드를 생성합니다.
// 이 요소 노드는 'title'이라는 class 값을 가지고 있어야 합니다.
// 이 요소 노드의 내부에 target 프로퍼티에 담긴 요소의 data-title 속성에 담긴 값을 할당해 주세요.
// 이 요소 노드를 target 프로퍼티에 담긴 요소의 마지막 자식 요소 노드로 추가해 주세요.
// 2. removeTitle 함수
function showTitle(e) {
	// 여기에 코드를 작성하세요
    const target = e.target.closest("[data-title]");

    if (target.dataset.title) {
        const el = document.createElement("span");
        if (!el) return;
        el.querySelector('.title');
        el.classList.add('title'); //이 요소 내부에 title 클래스
        
        el.textContent = target.dataset.title;
        e.target.append(el); //    

    }
}
// removeTitle 함수를 완성해 주세요
function removeTitle(e) {
    const target = e.target;
    const lastChild = target.lastElementChild
	// 여기에 코드를 작성하세요
    if(target.dataset.title){
      el.querySelector('.title');
        lastChild.remove();
    }
}

// '대상'과 '타입'을 수정해 주세요
const map = document.querySelector(".map");
map.addEventListener('mouseover', showTitle);
map.addEventListener('mouseout', removeTitle);