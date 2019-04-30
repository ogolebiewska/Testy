export const fib = (number) => {
    if (typeof number != 'number' || Math.floor(number) !== number) throw new Error();
    if (number === 0 || number === 1) return number;
    else return fib(number - 1) + fib(number - 2);
}