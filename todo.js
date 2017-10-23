var todos = (function () {
    var todoList = [
        { title: "todo1", isDone: false },
        { title: "todo2", isDone: true },
        { title: "todo3", isDone: false },
        { title: "todo4", isDone: true }
    ]


    return {
        numberOfDoneTodos: function () {
            var numberOfTodos = 0;
            for (var i = 0; i < todoList.length; i++) {
                if (todoList[i].isDone) {
                   numberOfTodos ++;
                }
            }

            return numberOfTodos;
        }
    }

})();

console.log(todos.numberOfDoneTodos());
console.log(todos.todoList);