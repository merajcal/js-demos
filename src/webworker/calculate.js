let calculateSum = function (param) {
    let sum = param.data.v1 + param.data.v2;
    postMessage(sum);
}

onmessage = calculateSum