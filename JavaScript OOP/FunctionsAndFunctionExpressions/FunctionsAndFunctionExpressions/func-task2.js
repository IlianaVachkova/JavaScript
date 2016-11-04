function Solve() {
    return function findPrimes(from, to) {
        var divisor, maxDivisor, n, isPrime, primes = [];

        if (typeof (from) === 'undefined' || typeof (to) === 'undefined') {
            throw new Error();
        }

        from = +from;
        to = +to;

        for (n = from; n <= to; n += 1) {
            maxDivisor = Math.sqrt(n);
            isPrime = true;

            for (divisor = 2; divisor <= maxDivisor; divisor += 1) {
                if (!(n % divisor)) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime && n > 1) {
                primes.push(n);
            }
        }

        return primes;
    }

    module.exports = findPrimes;
}