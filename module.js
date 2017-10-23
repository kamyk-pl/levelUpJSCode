var person = (function () {
    var details = [{
        firstName: 'John',
        lastName: 'Example',
        age: 30
    },{
        firstName: 'John',
        lastName: 'Example',
        age: 30
    },{
        firstName: 'John',
        lastName: 'Example',
        age: 30
    }];

    return {
        letMeIntroduceMyself: function () {
            return 'My name is ' +
                details.firstName + ' ' + details.lastName;
        },

        setName:function(newName){
            details.firstName= newName;
        },
        job:"cap"
    
    };
})();



console.log(person.letMeIntroduceMyself()); // My name is John Example
person.setName("Janek")
console.log(person.letMeIntroduceMyself()); // My name is John Example
console.log(person.job)