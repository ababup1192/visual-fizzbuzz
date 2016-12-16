import * as React from "react";
import * as ReactDOM from "react-dom";
import { List } from "immutable";
import FizzBuzzElement from "./FizzBuzzElement";

interface IFizzBuzzContainerProps {
    fizzbuzzList: List<string>;
}

export default class FizzBuzzContainer extends React.Component<IFizzBuzzContainerProps, {}> {
    constructor(props) {
        super(props);
    }
    render() {
        return <ul className="fizzBuzzList">
            {this.props.fizzbuzzList.map((c, i) =>
                <FizzBuzzElement key={i} content={c} />
            )}
        </ul>;
    }
}