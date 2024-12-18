function factorial(n) {
    if (n < 0) {
        return "Факторіал визначений лише для невід'ємних чисел.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

module.exports = factorial;