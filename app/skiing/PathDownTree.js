class PathDownTree {
    constructor(mapPoint, parent) {
        this.mapPoint = mapPoint;
        this.childs = [];
        this.parent = parent;
        if (!this.parent) {
            this.first = this;
            this.pathStep = 0;
            this.longestChild = null;
        } else {
            this.first = parent.first;
            this.pathStep = parent.pathStep + 1;
        }
        // determine final child and calculate longest path for current
        if (this.mapPoint.isBottom) {
            if (!this.first.longestChild) {
                // set first
                this.first.longestChild = this;
            }
            if (this.pathStep > this.first.longestChild.pathStep) {
                // set longest
                this.first.longestChild = this;
            } else if (this.pathStep === this.first.longestChild.pathStep) {
                // set steepest
                if (this.first.mapPoint.height - this.mapPoint.height > this.first.mapPoint.height - this.first.longestChild.mapPoint.height)
                    this.first.longestChild = this;
            }

        }
    }

    addChild(childMapPoint) {
        let child = null;
        if (this.mapPoint.height > childMapPoint.height) {
            child = new PathDownTree(childMapPoint, this);
            this.childs.push();
        }
        return child;
    }

    getPath() {
        let path = {
            steps: this.longestChild.pathStep + 1,
            heightDifference: this.first.mapPoint.height - this.longestChild.mapPoint.height,
            points: [{
                position: this.longestChild.mapPoint.position,
                height: this.longestChild.mapPoint.height
            }]
        };
        let parent = this.longestChild.parent;
        while (parent) {
            path.points.unshift({
                position: parent.mapPoint.position,
                height: parent.mapPoint.height
            });
            parent = parent.parent;
        }
        return path;
    }


}

exports.PathDownTree = PathDownTree;