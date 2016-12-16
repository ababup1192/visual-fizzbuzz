import * as Bacon from "baconjs";
import Dispatcher from "./dispatcher";
import { FizzBuzz } from "../models/fizzbuzz";

const CHANGE_MAX = "CHANGE_MAX";

export default class MaxAction {
    private d: Dispatcher;
    private initialValue: number;

    constructor(dispatcher: Dispatcher, initialValue: number) {
        this.d = dispatcher;
        this.initialValue = initialValue;
    }

    public changeMax(max: number) {
        this.d.push(CHANGE_MAX, max);
    }

    public createProperty(): Bacon.Property<number, number> {
        return Bacon.update<number, number, number>(this.initialValue,
            [this.d.stream(CHANGE_MAX)], this._changeMax.bind(this)
        );
    }

    private _changeMax(_, newMax: number): number {
        return FizzBuzz.validateMax(newMax);
    }
}