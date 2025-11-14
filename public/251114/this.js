function printThisTitle(){
    console.log(this.title);
}
const courseA = {
    title : '프로그래밍 기초 in JavaSvript',
    printTitle: printThisTitle,
};

courseA.printTitle();