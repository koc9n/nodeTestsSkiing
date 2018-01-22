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

function getWays(map, prepMap, ns, we) {
    let currentHeight = prepMap[ns][we] || {};
    currentHeight.ways = [];
    let northHeight = prepMap[ns - 1] ? prepMap[ns - 1][we] : undefined;
    let southHeight = prepMap[ns + 1] ? prepMap[ns + 1][we] : undefined;
    let westHeight = prepMap[ns][we - 1];
    let eastHeight = prepMap[ns][we + 1];

    if (northHeight <= currentHeight
        && southHeight <= currentHeight
        && westHeight <= currentHeight
        && eastHeight <= currentHeight) {
        currentHeight.isApex = true;
    }
    if (northHeight >= currentHeight
        && southHeight >= currentHeight
        && westHeight >= currentHeight
        && eastHeight >= currentHeight) {
        currentHeight.isBottom = true;
    }

    if (northHeight < currentHeight) currentHeight.ways.push(northHeight);
    if (southHeight < currentHeight) currentHeight.ways.push(southHeight);
    if (westHeight < currentHeight) currentHeight.ways.push(westHeight);
    if (northHeight < currentHeight) currentHeight.ways.push(northHeight);


}
