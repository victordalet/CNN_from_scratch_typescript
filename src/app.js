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
var Main = /** @class */ (function () {
    function Main(nb_rep) {
        this.nb_rep = nb_rep;
        this.matrix = [
            [[0, 1], 0],
            [[1, 1], 0],
            [[1, 0], 1],
            [[0, 0], 1]
        ];
        var my_neural = new Neural(this.matrix.length);
        this.test_result = [0, 0];
        this.train(my_neural);
        this.test(my_neural);
    }
    Main.prototype.train = function (my_neural) {
        for (var i = 0; i < this.nb_rep; i++) {
            for (var j = 0; j < this.matrix.length; j++) {
                my_neural.train(this.matrix[j][0], this.matrix[j][1]);
            }
        }
    };
    Main.prototype.test = function (my_neural) {
        var prediction = my_neural.predict(this.test_result);
        var msg = "Prediction : ";
        console.log(msg, (prediction < .5) ? 0 : 1);
    };
    return Main;
}());
new Main(20);
