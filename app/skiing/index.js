/**
 * Finding longest and steepest path of mountains ( for Skiing for sure , cause we love skiing )
 *
 * @param map actually array of array [][] representation of hills points (height)
 *
 * @return Object that contains fields: longest, steepest (each field is array of values from input map)
 */
const {PathDownTree} = require('./PathDownTree');
const {MapPoint} = require('./MapPoint');
let preparedMap = [];
let apexList = [];

function prepareData(map) {
    for (let ns = 0; ns < map.length; ns++) {
        preparedMap.push([]);
        for (let we = 0; we < map.length; we++) {
            preparedMap[ns][we] = new MapPoint(map, {ns, we});
            if (preparedMap[ns][we].isApex) {
                apexList.push(new PathDownTree(preparedMap[ns][we]));
            }
        }
    }

}

function addChildToMapPoint(pointAround, pathPoint) {
    if (pointAround) {
        let mapPointAround = preparedMap[pointAround.ns][pointAround.we];
        let childPathPoint = pathPoint.addChild(mapPointAround);
        if (childPathPoint) {
            mapPointAround.heightsAround.forEach((childPointAround) => {
                addChildToMapPoint(childPointAround, childPathPoint);
            });
        }
    }
}

exports.findMyWay = async (map) => {
    prepareData(map);
    apexList.forEach((pathPoint) => {
        pathPoint.mapPoint.heightsAround.forEach((pointAround) => {
            addChildToMapPoint(pointAround, pathPoint);
        });
    });

    // find longest from possible longest paths down
    let longestPath = null;
    apexList.forEach((apexPoint) => {
        let longestPathByCurrentApex = apexPoint.getPath();
        if (!longestPath) {
            longestPath = longestPathByCurrentApex;
        } else {
            if (longestPath.steps < longestPathByCurrentApex.steps) {
                longestPath = longestPathByCurrentApex;
            } else if (longestPath.steps === longestPathByCurrentApex.steps) {
                if (longestPath.heightDifference < longestPathByCurrentApex.heightDifference) {
                    longestPath = longestPathByCurrentApex;
                }
            }
        }

    });

    return longestPath;
};
