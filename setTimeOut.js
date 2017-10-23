var bar = function () {
        console.log('bar...');
    },
    foo = function () {
        setTimeout(bar, 5000);
       
         console.log('foo...');
    };
foo();