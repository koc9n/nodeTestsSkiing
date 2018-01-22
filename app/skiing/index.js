/**
 * Finding longest and steepest path of mountains ( for Skiing for sure , cause we love skiing )
 *
 * @param map actually array of array [][] representation of hills points (height)
 *
 * @return Object that contains fields: longest, steepest (each field is array of values from input map)
 */

module.exports.findMyWay = async (map) => {

    let preparedMap = [];
    for (let ns = 0; ns < map.length; ns++) {
        preparedMap.push([]);
        for (let we = 0; we < map.length; we++) {
            getWays(map, preparedMap, ns, we);
        }
    }

    // return final result
    return preparedMap;
};

function isApex(currentPoint) {
    return currentPoint.heightsAround.northHeight <= currentPoint.height
        && currentPoint.heightsAround.southHeight <= currentPoint.height
        && currentPoint.heightsAround.westHeight <= currentPoint.height
        && currentPoint.heightsAround.eastHeight <= currentPoint.height;
}

function isBottom(currentPoint) {
    return currentPoint.heightsAround.northHeight >= currentPoint.height
        && currentPoint.heightsAround.southHeight >= currentPoint.height
        && currentPoint.heightsAround.westHeight >= currentPoint.height
        && currentPoint.heightsAround.eastHeight >= currentPoint.height;
}

function getWays(map, prepMap, ns, we) {
    let currentPoint = prepMap[ns][we] || {};
    currentPoint.height = map[ns][we];
    currentPoint.heightsAround = {};
    currentPoint.heightsAround.northHeight = map[ns - 1][we];
    currentPoint.heightsAround.southHeight = map[ns + 1][we];
    currentPoint.heightsAround.westHeight = map[ns][we - 1];
    currentPoint.heightsAround.eastHeight = map[ns][we + 1];
    currentPoint.isApex = isApex(currentPoint);
    currentPoint.isBottom = isBottom(currentPoint);

    currentPoint.ways = [];
    if (currentPoint.heightsAround.northHeight < currentPoint.height) currentPoint.ways.push(northHeight);
    if (currentPoint.heightsAround.southHeight < currentPoint.height) currentPoint.ways.push(southHeight);
    if (currentPoint.heightsAround.westHeight < currentPoint.height) currentPoint.ways.push(westHeight);
    if (currentPoint.heightsAround.northHeight < currentPoint.height) currentPoint.ways.push(northHeight);


}
