///<reference path="ZooAnimals.ts" />
var Zoo;
(function (Zoo) {
    var Bird = /** @class */ (function () {
        function Bird() {
            this.skinType = "feather";
        }
        Bird.prototype.isMammal = function () {
            return true;
        };
        return Bird;
    }());
    Zoo.Bird = Bird;
})(Zoo || (Zoo = {}));
//# sourceMappingURL=ZooBirds.js.map