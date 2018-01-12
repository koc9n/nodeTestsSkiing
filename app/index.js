console.log("Hello world!");

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
let preparedMap = [];
for (let ns = 0; ns < map.length; ns++) {
    preparedMap.push([]);
    for (let we = 0; we < map.length; we++) {
        preparedMap[ns][we] = {pathDown: {}};
        // check if can go down NORTH way
        if (ns != 0 && map[ns - 1][we] < map[ns][we]) {
            preparedMap[ns][we].pathDown.n = map[ns - 1][we];
        }
        // check if can go down SOUTH way
        if (ns != map.length-1 && map[ns + 1][we] < map[ns][we]) {
            preparedMap[ns][we].pathDown.s = map[ns + 1][we];
        }
        // check if can go down WEST way
        if (we != 0 && map[ns][we - 1] < map[ns][we]) {
            preparedMap[ns][we].pathDown.w = map[ns][we - 1];
        }
        // check if can go down EAST way
        if (we != map[ns].length && map[ns][we + 1] < map[ns][we]) {
            preparedMap[ns][we].pathDown.e = map[ns][we + 1];
        }
    }
}


console.log(JSON.stringify(preparedMap)
);
