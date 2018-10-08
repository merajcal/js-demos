const wait = time => new Promise((resolve) => setTimeout(resolve, time));
wait(3000).then(() => console.log('Hello')).then(() => console.log(x.length)).catch((h) => console.log('Error!!!',h));


// wait(3000).then(() => console.log(x.length), (e) => console.log('Error22!!!', e));

