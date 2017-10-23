var add = function (a, b) {
    return a + b;
};


var person = {
    firstName: 'John',
    lastName: 'Example',
    age: 30,
    letMeIntroduceMyself: function () {
        return 'My name is ' + this.firstName + ' ' + this.lastName;
    }
};

console.log(person.letMeIntroduceMyself());

person.lastName = "Kos";

console.log(person.letMeIntroduceMyself());