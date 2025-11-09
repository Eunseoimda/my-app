const btns = document.querySelector('#grade');
// document.querySelector('button');
// document.querySelectorAll('button')[0];
// document.getElementsByTagName('button')[0];

console.log(btns);

btns[0].onclick = function() {
    alert('정답입니다');
}