function counter() {
    var _counter = 0;
    return({
        add: function(increment) {
            _counter += increment;
        },
        retrieve: function() {
            return _counter;
        }
    })
}

const c = new counter();
c.add(10);
c.add(20);

console.log(c.retrieve())