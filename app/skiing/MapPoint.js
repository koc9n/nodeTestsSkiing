class MapPoint {
    constructor(map, position) {
        this.position = position;
        this.height = map[position.ns][position.we];
        this.heightsAround = [];

        this._initStats(map);
    }

    _initStats(map) {
        this._getPointAroundFromMap(map, this.position.ns - 1, this.position.we);
        this._getPointAroundFromMap(map, this.position.ns + 1, this.position.we);
        this._getPointAroundFromMap(map, this.position.ns, this.position.we - 1);
        this._getPointAroundFromMap(map, this.position.ns, this.position.we + 1);

        this.isApex = true;
        this.isBottom = true;
        this.heightsAround.forEach((point) => {
            if (point) {
                this.isBottom = (point.height >= this.height) && this.isBottom;
                this.isApex = (point.height <= this.height) && this.isApex;
            }
        });
        this.isApex = !this.isBottom && this.isApex;
    }

    _getPointAroundFromMap(map, ns, we) {
        if (!(we < 0 || ns < 0 || !map[ns] || !map[ns][we])) {
            this.heightsAround.push({height: map[ns][we], ns, we});
        }
    }
}


exports.MapPoint = MapPoint;