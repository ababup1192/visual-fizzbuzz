import * as Bacon from "baconjs";
import { Map } from "immutable";

export default class Dispatcher {
    private handlers: Map<string, Bacon.Bus<any, any>>;

    constructor() {
        this.handlers = Map<string, Bacon.Bus<any, any>>();
    }
    public stream(name: string): Bacon.Bus<any, any> {
        return this.bus(name);
    }
    public push(name: string, value: any): void {
        this.bus(name).push(value);
    }
    public plug(name: string, value: any): void {
        this.bus(name).plug(value);
    }
    private bus(name: string): Bacon.Bus<any, any> {
        if (this.handlers.has(name)) {
            return this.handlers.get(name);
        } else {
            const newBus = new Bacon.Bus();
            this.handlers = this.handlers.set(name, newBus);
            return newBus;
        }
    }
}