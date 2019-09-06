/* eslint-disable no-magic-numbers */
import lessThan from "./index.ts";

test(() => {
  expect(lessThan(0)(1)).toEqual(true);
});

test(() => {
  expect(lessThan(1)(0)).toEqual(false);
});
