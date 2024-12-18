const assert = require("assert");
const factorial = require("../index");

describe("Factorial Function", () => {
    it("should return 1 for factorial(0)", () => {
        assert.strictEqual(factorial(0), 1);
    });

    it("should return 1 for factorial(1)", () => {
        assert.strictEqual(factorial(1), 1);
    });

    it("should return 2 for factorial(2)", () => {
        assert.strictEqual(factorial(2), 2);
    });

    it("should return 6 for factorial(3)", () => {
        assert.strictEqual(factorial(3), 6);
    });

    it("should return 24 for factorial(4)", () => {
        assert.strictEqual(factorial(4), 24);
    });

    it("should return 120 for factorial(5)", () => {
        assert.strictEqual(factorial(5), 120);
    });

    it("should return 'Факторіал визначений лише для невід'ємних чисел.' for negative input", () => {
        assert.strictEqual(factorial(-1), "Факторіал визначений лише для невід'ємних чисел.");
    });

    it("should handle large numbers correctly", () => {
        assert.strictEqual(factorial(10), 3628800);
    });
});
