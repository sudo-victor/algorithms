function count(arr) {
  if (arr.length <= 1) return 1
  arr.pop()
  return 1 + count(arr)
}

console.log(count([2,4,6, 10,3]))