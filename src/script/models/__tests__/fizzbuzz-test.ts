import { List, is } from "immutable";
import { FizzBuzz } from "../fizzbuzz";

describe("fizzbuzz", () => {
    it("should return fizzbuzz list", () => {
        const expected = List.of("1", "2", "fizz", "4", "buzz",
            "fizz", "7", "8", "fizz", "buzz", "11", "fizz", "13", "14", "fizzbuzz");
        const actual = FizzBuzz.createFizzbuzzList(15, 3, 5);

        expect(is(expected, actual)).toBeTruthy();
    });

    it("should return normal number", () => {
        const expected = 50;
        const actual = FizzBuzz.validateMax(50);

        expect(expected).toBe(actual);
    });

    it("should return abs of negative number", () => {
        const expected = 50;
        const actual = FizzBuzz.validateMax(-50);

        expect(expected).toBe(actual);
    });

    it("should return limited number", () => {
        const expected = 1000;
        const actual = FizzBuzz.validateMax(99999);

        expect(expected).toBe(actual);
    });
});