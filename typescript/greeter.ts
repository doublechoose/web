function greeter(person) {
    return "Hello, " + person;
}

function greeter_1(person:string) {
    return "Hello, " + person;
}

interface Person{
    firstName: string;
    lastName: string;
}

function greeter_2(person: Person){
    return "Hello, "+person.firstName + " " + person.lastName;
}

class Student {
    fullName: string;
    constructor(public firstName,public middleInitial,public lastName) {
        this.fullName = firstName+ " " + middleInitial+" "+lastName;
    }
}
function greeter_3(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user3 = new Student("Jane","M.","User");



// let user2 = {firstName:"Jane", lastName:"User"};

// let user1 = [0,1,2]

// let user = "Jane User";



document.body.innerHTML = greeter_3(user3)