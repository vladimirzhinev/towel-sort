


module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix == undefined) return [];

    matrix.map((it, ind) => { return ind % 2 == 0 ? it.sort((a, b) => a - b) : it.sort((a, b) => b - a) })
        .forEach(it => it.forEach(item => result.push(item)))


    return result;
}
