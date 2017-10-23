var Person = function (name, surname) {
      this.firstName = name;
      this.lastName = surname;
      this.age = 30;
    }, johnExample, person2;

Person.prototype.letMeIntroduceMyself = function () {
  return 'My name is ' + this.firstName + ' ' + this.lastName;
};

johnExample = new Person("Tomek", "Hajto");
person2 = new Person("Mateusz", "Borek");
console.log(johnExample.letMeIntroduceMyself());  // My name is John Example
console.log(person2.letMeIntroduceMyself());  // My name is John Example

console.log(johnExample.firstName); 