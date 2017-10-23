var Person = function (name, surname) {
      this.firstName = name;
      this.lastName = surname;
      this.age = 30;
    }, johnExample, person2;

Person.prototype.letMeIntroduceMyself = function () {
  return 'My name is ' + this.firstName + ' ' + this.lastName;
};



var Worker = function (name, surname, job) {
  Person.call(this, name, surname);
  this.company = job;
}

Worker.prototype = Person.prototype;

Worker.prototype.letMeTellYouWhereIWork =  function(){
   return 'My name is ' + this.firstName + ' ' + this.lastName + 'and I work for ' +this.company;
}

var pawel = new Worker("pawel", "kaminski", "cap");

console.log(pawel.letMeIntroduceMyself());
console.log(pawel.letMeTellYouWhereIWork());



