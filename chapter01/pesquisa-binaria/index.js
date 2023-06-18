// Suponha que voce tenha uma lista com 128 nomes e esteja fazendo uma pesquisa binaria.
// Qual seria o numero maximo de etapas que voce levaria para encontrar o nome desejado?
// Answer: 7 e se duplicasse seria 8

function binarySearch(list, item) {
  let low = 0
  let high = list.length - 1

  while(low <= high) {
    const middle = Math.round((low + high) / 2)
    const guess = list[middle]

    if (guess === item) {
      return middle
    }
    if (guess < high) {
      low = middle + 1
    } else {
      high = middle - 1
    }
  }

  return null
}
const my_list = [1,3,5,7,9]

console.time('binarySearch')
console.log(binarySearch(my_list, 7))
console.log(binarySearch(my_list, -1))
console.timeEnd('binarySearch')

console.time('simpleSearch')
console.log(my_list.find((item) => item === 9))
console.log(my_list.find((item) => item === -1))
console.timeEnd('simpleSearch')
