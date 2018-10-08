const obj = {name: 'meraj'};

const greeting  = function(a,b) {
    return 'welcome '+ this.name+ ' to ' + a + ' and ' + b; 
}

console.log(greeting('Kolkata', 'Delhi'));

const val = greeting.call(obj, 'Kolkata', 'Delhi');

console.log(val);
