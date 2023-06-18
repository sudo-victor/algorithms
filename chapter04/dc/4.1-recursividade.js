function sum(arr) {
  if (arr.length <= 1) return arr.pop()

  return arr.pop() + sum(arr)
}

console.log(sum([2,4,6]))