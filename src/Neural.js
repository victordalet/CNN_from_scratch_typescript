"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Neural = void 0;
var Neural = /** @class */ (function () {
    function Neural(size) {
        this.weights = [];
        this.size = size;
        this.learning_rate = 0.1;
        this.fill_weight();
    }
    Neural.prototype.fill_weight = function () {
        for (var i = 0; i < this.size; i++) {
            this.weights.push(Math.random());
        }
    };
    Neural.prototype.sigmoid = function (x) {
        return 1 / (1 + Math.exp(-x));
    };
    Neural.prototype.predict = function (inputs) {
        var output = 0;
        for (var i = 0; i < inputs.length; i++) {
            output += this.weights[i] * inputs[i];
        }
        return this.sigmoid(output);
    };
    Neural.prototype.train = function (input, target) {
        var output = this.predict(input);
        var error = target - output;
        for (var i = 0; i < input.length; i++) {
            this.weights[i] += error * input[i] * this.learning_rate;
        }
    };
    return Neural;
}());
exports.Neural = Neural;
