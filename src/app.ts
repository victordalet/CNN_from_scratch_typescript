import {Neural} from "./Neural";


class Main {

    matrix : [number[],number][];
    test_result : number[];
    nb_rep : number;

    constructor(nb_rep : number) {
        this.nb_rep = nb_rep;
        this.matrix = [
            [[0,1],0],
            [[1,1],0],
            [[1,0],1],
            [[0,0],1]
        ];
        const my_neural = new Neural(this.matrix.length);
        this.test_result = [0,1];
        this.train(my_neural)
        this.test(my_neural)
    }

    train(my_neural : Neural) {
        for (let i:number = 0 ; i < this.nb_rep ; i++) {
            for (let j: number = 0; j < this.matrix.length; j++) {
                my_neural.train(this.matrix[j][0], this.matrix[j][1])
            }
        }
    }

    test(my_neural : Neural) {
        const prediction : number = my_neural.predict(this.test_result);
        const msg : string = "Prediction : "
        console.log(msg,(prediction < .5) ? 0 : 1)
    }
}

new Main(20);
