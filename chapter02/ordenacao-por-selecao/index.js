function findLowerValueInto(aArr) {
  let lower = aArr[0]
  let lower_idx = 0

  for(let i = 1; i < aArr.length; i++) {
    if(aArr[i] < lower) {
      lower = aArr[i]
      lower_idx = i
    }
  }

  return lower_idx
}

function selectionSortFor(aArr) {
  const result = []
  const len = aArr.length

  for(let i = 0; i < len; i++) {
    const lower_idx = findLowerValueInto(aArr)
    result.push(aArr.splice(lower_idx, 1)[0])
  }

  return result
}

console.log(selectionSortFor([5,3,6,2,10]))

// O(n x n)