export default function lessThan (left: number): Function {
  return function lessThanRight (right: number): boolean {
    return left < right
  }
}
