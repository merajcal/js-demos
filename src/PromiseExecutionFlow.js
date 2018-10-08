function foo() {
    console.log('foo');

    return new Promise(resolve => {
        console.log('foo timeout before');

        setTimeout(() => {
            console.log('foo timeout');

            resolve('foo resolved');
        }, 1000);

        console.log('foo timeout after');
    });
}

function bar() {
    console.log('bar');

    return new Promise(resolve => {
        console.log('bar timeout before');

        setTimeout(() => {
            console.log('bar timeout');

            resolve('bar resolved');
        }, 3000);

        console.log('bar timeout after');
    });
}

// 1
/* foo()
    .then(function (res) {
        console.log('inside then 1: ' + res);
        return bar();
    }).then(function (res) {
        console.log('inside then 2: ' + res);
    });;
    */

// case 2
/* foo()
  .then(bar())
  .then(function(res) {
    console.log('inside then 2: ' + res);
  });

  */

// case 4

foo()
    .then(function (res) {
        console.log('inside then 1: ' + res);
        bar();
    })
    .then(function (res) {
        console.log('inside then 2: ' + res);
    });

    // foo
    // foo timeout before
    // foo timeout after
    // foo timeout
    // inside then 1:  foo resolved
    // bar
    // bar timeout before
    // bar timeout after
    // bar timeout
    