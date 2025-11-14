// function getAge(){
//     const date = new Date();
//     return date.getFullYear()  - this.birth + 1;
// }
// const user = {
//     getAge,
//     name : 'codeit',
//     birth : 2017,
// };
// const user = {
//     name : "codeit",
//     birth : 2017,
//     getage : function(){
//         const date = new Date();
//         return date.getFullYear() - this.birth+1;
//     },
// };

// const title = '컴퓨터 개론';
// const lessonCount = 87;
// const course = {
//     title,
//     lessonCount
// };

// console.log(course);

const propertyName = 'birth';
const getJob = () => 'job';

const codeit = {
  ['topic' + 'Name']: 'Modern JavaScript',
  [propertyName]: 2017,
  [getJob()]: '프로그래밍 강사',
};
 console.log('1 '+ codeit.topicName);
 console.log('2 '+[propertyName]);
 console.log('3 '+codeit[getJob()]);
console.log('4 '+codeit.birth);
console.log('5 '+codeit.job);