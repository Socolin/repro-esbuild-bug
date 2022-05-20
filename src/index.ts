import "reflect-metadata";
import { container, singleton } from "tsyringe";

@singleton()
export class Test {
    constructor() {
    }

    test() {
        console.log('It works');
    }
}

container.resolve(Test)

window["test"] = container.resolve(Test);
window["test"].test();
