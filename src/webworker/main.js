(function () {
    let worker = new Worker('calculate.js');

    let logResult = function (result) {
        console.log('Sum: ' + result.data);
    }

    worker.addEventListener('message', logResult, false);

    worker.postMessage({
        v1: 10,
        v2: 30
    })
})()