const skiingLib = require('./skiing');
const map = [
    [20, 30, 40, 50, 69, 70, 30, 32],
    [13, 30, 45, 90, 63, 70, 43, 90],
    [20, 30, 56, 55, 60, 70, 23, 90],
    [5, 30, 40, 44, 33, 70, 80, 90],
    [20, 14, 40, 50, 60, 76, 80, 90],
    [10, 30, 45, 56, 60, 71, 67, 90],
    [15, 30, 33, 50, 70, 70, 80, 35],
    [20, 30, 40, 50, 95, 85, 99, 45],
];

skiingLib.findMyWay(map)
    .then(ways => console.log(JSON.stringify(ways)))
    .catch(e => console.log(e));

console.log(map[0][-1]);


