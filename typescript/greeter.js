function greeter(person) {
    return "Hello, " + person;
}
function greeter_1(person) {
    return "Hello, " + person;
}
function greeter_2(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter_3(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user3 = new Student("Jane", "M.", "User");
// let user2 = {firstName:"Jane", lastName:"User"};
// let user1 = [0,1,2]
// let user = "Jane User";
document.body.innerHTML = greeter_3(user3);
