export default function lessThan(left) {
  return function lessThanRight(right) {
    return left < right;
  };
}
