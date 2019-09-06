/* eslint-disable no-magic-numbers */
import lessThan from "./index";

test("works", () => {
  expect(lessThan(0)(1)).toEqual(true);
});

test("works", () => {
  expect(lessThan(1)(0)).toEqual(false);
});
