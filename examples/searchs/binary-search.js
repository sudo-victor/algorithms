const { gerarListaOrdenada } = require("../utils/generate-list")

function binarySearch(anArr, target) {
  let low = 0
  let high = anArr.length - 1

  while (low <= high) {
    let middleIdx = Math.floor((low + high) / 2)
    let guess = anArr[middleIdx]

    if (guess === target) return middleIdx
    if (guess < target) {
      low = middleIdx + 1
    } else {
      high = middleIdx - 1
    }
  }

  return -1
}

// BIG O(log n)

const TWENTY_MILLIONS = 20000000
const MIDDLE_INDEX = Math.floor(TWENTY_MILLIONS / 2)
const sortedList = gerarListaOrdenada(TWENTY_MILLIONS)

const firstItem = sortedList[0]
const middleItem = sortedList[MIDDLE_INDEX]
const lastItem = sortedList[sortedList.length - 1]

console.time('binarySearch - firstItem')
console.log(binarySearch(sortedList, firstItem));
console.timeEnd('binarySearch - firstItem')

console.time('binarySearch - middleItem')
console.log(binarySearch(sortedList, middleItem));
console.timeEnd('binarySearch - middleItem')

console.time('binarySearch - lastItem')
console.log(binarySearch(sortedList, lastItem));
console.timeEnd('binarySearch - lastItem')
