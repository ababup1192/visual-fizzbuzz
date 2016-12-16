// import Style Sheet
import "../style/main.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Bacon from "baconjs";
import { Range } from "immutable";

import App from "./components/App";
import Dispatcher from "./actionCreators/dispatcher";
import MaxAction from "./actionCreators/maxAction";
import { FizzbuzzAction, IFizzbuzz } from "./actionCreators/fizzbuzzAction";
import { FizzBuzz } from "./models/fizzbuzz";

const initialMax = 100;
const initialFizz = 3;
const initialBuzz = 5;

const dispatcher = new Dispatcher();
const maxAction = new MaxAction(dispatcher, initialMax);
const maxProperty = maxAction.createProperty();
const fizzbuzzAction = new FizzbuzzAction(dispatcher, initialFizz, initialBuzz);
const fizzbuzzProperty = fizzbuzzAction.createProperty();

Bacon.onValues(maxProperty, fizzbuzzProperty, (max: number, fizzBuzz: IFizzbuzz) => {
    const { fizz, buzz } = fizzBuzz;
    const fizzbuzzList = FizzBuzz.createFizzbuzzList(max, fizz, buzz);
    const props = { fizz, buzz, max, fizzbuzzList, maxAction, fizzbuzzAction };

    ReactDOM.render(<App {...props} />, document.getElementById("content"));
});