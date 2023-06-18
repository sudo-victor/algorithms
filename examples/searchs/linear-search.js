const { gerarListaOrdenada } = require("../utils/generate-list")

function linearSearch(anArr, target) {
  let result = null

  if (!target) return result

  for(let i = 0; i < anArr.length; i++) {
    if(anArr[i] === target) {
      result = i
      break
    }
  }

  return result
}

// BIG O(n)

const TWENTY_MILLIONS = 20000000
const MIDDLE_INDEX = Math.floor(TWENTY_MILLIONS / 2)
const sortedList = gerarListaOrdenada(TWENTY_MILLIONS)

const firstItem = sortedList[0]
const middleItem = sortedList[MIDDLE_INDEX]
const lastItem = sortedList[sortedList.length - 1]

console.time('linearSearch - firstItem')
console.log(linearSearch(sortedList, firstItem));
console.timeEnd('linearSearch - firstItem')

console.time('linearSearch - middleItem')
console.log(linearSearch(sortedList, middleItem));
console.timeEnd('linearSearch - middleItem')

console.time('linearSearch - lastItem')
console.log(linearSearch(sortedList, lastItem));
console.timeEnd('linearSearch - lastItem')

