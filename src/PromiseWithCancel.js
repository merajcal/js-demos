
const wait = (
    time,
    cancel = Promise.reject()
  ) => new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, time);
  
    cancel.then(() => {
      clearTimeout(timer);
      reject(new Error('Cancelled'));
    }).catch((e) => console.log('error1',e));
  });
  
  const shouldCancel = Promise.resolve(); // Yes, cancel
  // const shouldCancel = Promise.reject(); // No cancel 
  
  wait(2000, shouldCancel).then(
    () => console.log('Hello!')
  ).catch((e) => console.log('error2',e)) // [Error: Cancelled]