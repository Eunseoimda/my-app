function getFullName(){
    return `${this.FirstName} ${this.LastName}`;
};
const user = {
    FirstName : "Tess",
    LastName : "Jang",
    getFullName,
};

const admin = {
    FirstName : "Alex",
    LastName : "kim",
    getFullName : getFullName,
};

console.log(user.getFullName());
console.log(admin.getFullName());


