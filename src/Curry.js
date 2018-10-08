const createBase = (baseNum) => (n) => baseNum + n;

const addSix = createBase(6);

console.log(addSix(10));
console.log(addSix(20));
