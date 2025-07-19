const fizzbuzz = require("./index.js");

describe("testing fizzbuzz return value", () => {
  test("should return 1 when give 1 ", () => {
    const actual = fizzbuzz(1);
    const expected = 1;
    expect(actual).toBe(expected);
  });

  test("should return 2 when give 2 ", () => {
    const actual = fizzbuzz(2);
    const expected = 2;
    expect(actual).toBe(expected);
  });
  test("should return Fizz when give 3 ", () => {
    const actual = fizzbuzz(3);
    const expected = "Fizz";
    expect(actual).toBe(expected);
  });
  test("should return Buzz when give 5 ", () => {
    const actual = fizzbuzz(5);
    const expected = "Buzz";
    expect(actual).toBe(expected);
  });
  test("should return Fizz when give 6 ", () => {
    const actual = fizzbuzz(6);
    const expected = "Fizz";
    expect(actual).toBe(expected);
  });
  test("should return Buzz when give 10 ", () => {
    const actual = fizzbuzz(10);
    const expected = "Buzz";
    expect(actual).toBe(expected);
  });
  test("should return FizzBuzz when give 15 ", () => {
    const actual = fizzbuzz(15);
    const expected = "FizzBuzz";
    expect(actual).toBe(expected);
  });
});
