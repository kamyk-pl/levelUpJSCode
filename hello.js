(function () {  
    
    var people = [
                { name: "Pawel", isTrainer :true }, 
                { name: "Daniel", isTrainer:true }, 
                { name: "Dorota", isTrainer:false }],
        trainers = [],
        students = [],
        numberOfTrainers,
        numberOfStudents;

    for (var i = 0; i < people.length; i++) {
        if (people[i].isTrainer) {
            trainers.push(people[i]);
        }
    }

     numberOfTrainers=trainers.length;
     

    people.forEach(function (element) {
        if (!element.isTrainer) {
            students.push(element);
        }

    });

    numberOfStudents=students.length;

    console.log("Hello World Level upie 2017")
    console.log("W bazie mamy ", numberOfTrainers, " trenerow")
    console.log("oraz ", numberOfStudents, " studentow")

}());
