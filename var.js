var myVar = 'global';
var myFunction = function () {
    var year = 2017,
    isMonday= true,
    name = "pawel",
    fullName = name +" kaminski",
    table = [];

    var emptyObject = {},
    person = {
      firstName : 'John',
      lastName : 'Example',
      age : 30
    };

    var name='lastName'




    console.log(person.firstName);
    console.log(person[name]);
    console.log(person.salutation || 'brak');
    console.log(person.adress && person.adress.street );

    person.firstName = "Janek";
    person['lastName'] = "Kos";
    person.job = "cap"
    
    console.log(person.firstName);
    console.log(person[name]);
    console.log(person.job)
};
myFunction();