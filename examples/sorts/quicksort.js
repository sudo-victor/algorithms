const { gerarArrayDesordenado } = require("../utils/generate-list")

function quicksort(anArr) {
  if (anArr.length < 2) return anArr

  const randomIndex = Math.round((anArr.length - 1) / 2)
  const pivot = anArr.splice(randomIndex, 1)

  const lessThanPivot = findLessOrEqualThan(pivot, anArr)
  const greaterThanPivot = findGreaterThan(pivot, anArr)

  return [...quicksort(lessThanPivot), ...pivot, ...quicksort(greaterThanPivot)]

  function findLessOrEqualThan(value, anArr) {
    let result = []

    for(let i = 0; i < anArr.length; i++) {
      if(anArr[i] <= value) {
        result.push(anArr[i])
      }
    }

    return result;
  }

  function findGreaterThan(value, anArr) {
    let result = []

    for(let i = 0; i < anArr.length; i++) {
      if(anArr[i] > value) {
        result.push(anArr[i])
      }
    }

    return result;
  }
}

console.time('quicksort')
console.log(quicksort(gerarArrayDesordenado(200000)))
console.timeEnd('quicksort')

