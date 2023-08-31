export class Neural {

    size : number;
    weights : number[];
    learning_rate : number;

    constructor(size : number) {
        this.weights = [];
        this.size = size;
        this.learning_rate = 0.1;
        this.fill_weight();
    }

    fill_weight() {
        for (let i:number = 0 ; i < this.size ; i++) {
            this.weights.push(Math.random())
        }
    }

    sigmoid(x : number) : number {
        return 1 / (1 + Math.exp(-x));
    }

    predict(inputs : number[]) : number{
        let output : number = 0;
        for (let i : number = 0 ; i < inputs.length ; i++) {
            output += this.weights[i] * inputs[i];
        }

        return this.sigmoid(output);
    }

    train(input : number[], target : number) {
        const output : number = this.predict(input);
        const error : number = target - output;
        for (let i :number = 0 ; i < input.length ; i++) {
            this.weights[i] += error * input[i] * this.learning_rate;
        }
    }

}
