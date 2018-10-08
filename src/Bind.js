var obj = {name: 'meraj'};

const greeting  = function (a,b,c) { return "welcome "+this.name+" to "+a+" "+b+" in "+c};

const bound = greeting.bind(obj);


console.log(bound("Newtown","KOLKATA","WB")); 