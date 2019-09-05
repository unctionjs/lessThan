export default function lessThan (left: number) {
  return function lessThanRight (right: number): boolean {
    return left < right;
  };
}
