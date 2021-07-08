exports.min = function min(array) {
    if (Array.isArray(array) && array.length) {
        return Math.min(...array);
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (Array.isArray(array) && array.length) {
        return Math.max(...array);
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length) {
        let average = 0;
        for (let i = 0; i < array.length; i++) {
            average += array[i];
        }
        return average / array.length;
    } else {
        return 0;
    }
};
