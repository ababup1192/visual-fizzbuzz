import * as React from "react";
import * as ReactDOM from "react-dom";

import MaxAction from "../actionCreators/maxAction";

interface IMaxInputProps {
    max: number;
    maxAction: MaxAction;
}

export default class MaxInput extends React.Component<IMaxInputProps, {}> {
    constructor(props) {
        super(props);

        const max = this.props.max;
    }

    render() {
        const {max, maxAction} = this.props;

        return <div>
            <label>1 -</label>
            <input
                type="number"
                value={max}
                onChange={(e) => {
                    const max = Number(e.target.value);
                    maxAction.changeMax(max);
                } } />
        </div>;
    }
}