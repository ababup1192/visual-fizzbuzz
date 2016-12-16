import * as React from "react";
import * as ReactDOM from "react-dom";

import { FizzbuzzAction } from "../actionCreators/fizzbuzzAction";

interface IFizzBuzzInputProps {
    fizz: number;
    buzz: number;
    fizzbuzzAction: FizzbuzzAction;
}

export default class MaxInput extends React.Component<IFizzBuzzInputProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const { fizz, buzz, fizzbuzzAction } = this.props;

        return <div className="fizzbuzzInputs">
            <div id="fizzContainer">
                <label>Fizz</label>
                <input
                    type="number"
                    value={fizz}
                    onChange={(e) => {
                        const newFizz = Number(e.target.value);
                        fizzbuzzAction.changeFizz(newFizz);
                    } } />
            </div>
            <div id="buzzContainer">
                <label>Buzz</label>
                <input
                    type="number"
                    value={buzz}
                    onChange={(e) => {
                        const newBuzz = Number(e.target.value);
                        fizzbuzzAction.changeBuzz(newBuzz);
                    } } />
            </div>
        </div>;
    }
}