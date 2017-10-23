var myFun = function (someInput) {
    var a = 1,
        b = 2,
        yourFun = function () {
            var b = 22,
                c = 3;
            // at this point a = 1, b = 22, c = 3
            a = 11;
        };
    // at this point a = 1, b = 2, c is not defined
    yourFun();
    // at this point a = 11, b = 2, c is not defined
};
myFun();