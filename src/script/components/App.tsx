import * as React from "react";
import * as ReactDOM from "react-dom";
import { List, Range } from "immutable";
import FizzBuzzContainer from "./FizzBuzzContainer";
import MaxInput from "./MaxInput";
import FizzBuzzInput from "./FizzBuzzInput";
import MaxAction from "../actionCreators/maxAction";
import { FizzbuzzAction } from "../actionCreators/fizzbuzzAction";

interface IAppProps {
    max: number;
    fizz: number;
    buzz: number;
    fizzbuzzList: List<number>;
    maxAction: MaxAction;
    fizzbuzzAction: FizzbuzzAction;
}

export default class App extends React.Component<IAppProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const {max, fizz, buzz, fizzbuzzList, maxAction, fizzbuzzAction} = this.props;

        return <div>
            <div className="fizzbuzzInputs">
                <MaxInput
                    max={max}
                    maxAction={maxAction} />
                <FizzBuzzInput
                    fizz={fizz}
                    buzz={buzz}
                    fizzbuzzAction={fizzbuzzAction} />
            </div>
            <FizzBuzzContainer fizzbuzzList={fizzbuzzList} />
        </div>;
    }
}