import * as Bacon from "baconjs";
import Dispatcher from "./dispatcher";

const CHANGE_FIZZ = "CHANGE_FIZZ";
const CHANGE_BUZZ = "CHANGE_BUZZ";

export interface IFizzbuzz {
    fizz: number;
    buzz: number;
}

export class FizzbuzzAction {
    private d: Dispatcher;
    private initialFizz: number;
    private initialBuzz: number;

    constructor(dispatcher: Dispatcher, initialFizz: number, initialBuzz: number) {
        this.d = dispatcher;
        this.initialFizz = initialFizz;
        this.initialBuzz = initialBuzz;
    }

    public changeFizz(fizz: number) {
        this.d.push(CHANGE_FIZZ, fizz);
    }

    public changeBuzz(buzz: number) {
        this.d.push(CHANGE_BUZZ, buzz);
    }

    public createProperty(): Bacon.Property<IFizzbuzz, IFizzbuzz> {
        const initialValue = { fizz: this.initialFizz, buzz: this.initialBuzz };

        return Bacon.update<IFizzbuzz, number, number, IFizzbuzz>(initialValue,
            [this.d.stream(CHANGE_FIZZ)], this._changeFizz.bind(this),
            [this.d.stream(CHANGE_BUZZ)], this._changeBuzz.bind(this)
        );
    }

    private _changeFizz(oldFizzbuzz: IFizzbuzz, newFizz: number): IFizzbuzz {
        return { ...oldFizzbuzz, ...{ fizz: newFizz } };
    }
    private _changeBuzz(oldFizzbuzz: IFizzbuzz, newBuzz: number): IFizzbuzz {
        return { ...oldFizzbuzz, ...{ buzz: newBuzz } };
    }
}