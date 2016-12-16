import { Range, List } from "immutable";

export namespace FizzBuzz {
    export function createFizzbuzzList(max: number, fizz: number, buzz: number): List<string> {
        const fizzbuzz = fizz * buzz;

        return Range(1, max + 1).map((n) =>
            n % fizzbuzz === 0 ? "fizzbuzz" :
            n % fizz === 0 ? "fizz" :
            n % buzz === 0 ? "buzz" :
            n.toString()
        ).toList();
    }

    export function validateMax(max: number): number {
        return Math.abs(max) > 1000 ? 1000 : Math.abs(max);
    }
}