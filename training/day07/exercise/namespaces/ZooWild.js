///<reference path="ZooAnimals.ts" />
var Zoo;
(function (Zoo) {
    var Reptile = /** @class */ (function () {
        function Reptile() {
            this.skinType = "scales";
        }
        Reptile.prototype.isMammal = function () {
            return false;
        };
        return Reptile;
    }());
    Zoo.Reptile = Reptile;
})(Zoo || (Zoo = {}));
//# sourceMappingURL=ZooWild.js.map