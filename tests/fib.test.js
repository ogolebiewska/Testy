import { fib } from "../src";

describe('Fibonaci function', () => {
    it('should throw error when given non-integer number', () => {
        expect(() => {
            fib('a')
        }).toThrow();
    })

    it('should throw error when given negative integer number', () => {
        expect(() => {
            fib(-1)
        }).toThrow();
    })

    it('should return when number < 3', () => {
        expect(
            fib(0)
        ).toBe(0);
        expect(
            fib(1)
        ).toBe(1);
    })

    it('should return fib(n-1)+fib(n-1) when number >= 3', () => {
        const fib1 = fib(3);
        const fib2 = fib(4);
        expect(fib(5)).toEqual(fib1 + fib2);
    })
})