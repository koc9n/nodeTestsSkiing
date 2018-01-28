const skiingLib = require('./skiing');
// -- my test data
// const map = [
//     [20, 30, 40, 50, 69, 70, 30, 32],
//     [13, 30, 45, 90, 63, 70, 43, 90],
//     [20, 30, 56, 55, 60, 70, 23, 90],
//     [5, 30, 40, 44, 33, 70, 80, 90],
//     [20, 14, 40, 50, 60, 76, 80, 90],
//     [10, 30, 45, 56, 60, 71, 67, 90],
//     [15, 30, 33, 50, 70, 70, 80, 35],
//     [20, 30, 40, 50, 95, 85, 99, 45],
// ];

// data from task
const map = [
    [51,39,64,4,42,15,23,35],
    [20,84,66,91,72,38,19,55],
    [94,7,28,99,36,69,8,99],
    [79,98,91,73,11,60,76,61],
    [98,40,65,40,54,88,74,73],
    [71,40,63,43,77,82,97,71],
    [89,24,71,24,93,79,23,71],
    [76,14,43,86,73,19,47,71],
];
skiingLib.findMyWay(map)
    .then(ways => {
        let coloredMap = [];
        map.forEach((itemNS, ns) => {
            coloredMap.push([]);
            let row = '\n';
            itemNS.forEach((itemWE, we) => {
                let hasPath = false;
                ways.points.forEach((point) => {
                    if (point.position.ns === ns && point.position.we === we) {
                        hasPath = true;
                    }
                });
                if (hasPath) {
                    if (ways.points[0].position.ns === ns && ways.points[0].position.we === we) {
                        // starting position with green color
                        row += ` \t\x1b[30m\x1b[42m${itemWE}\x1b[0m `;
                    } else if (ways.points[ways.points.length - 1].position.ns === ns && ways.points[ways.points.length - 1].position.we === we) {
                        // finish with red color
                        row += ` \t\x1b[30m\x1b[41m${itemWE}\x1b[0m `;
                    } else {
                        // highlight path
                        row += ` \t\x1b[30m\x1b[47m${itemWE}\x1b[0m `;
                    }

                } else {
                    row += ` \t${itemWE} `;
                }
            });
            row += '\n';
            console.log(row);
        });
    })
    .catch(e => console.log(e));


