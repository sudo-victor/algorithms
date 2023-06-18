const { gerarArrayDesordenado } = require("../utils/generate-list")

function selectionSortFor(anArr, direction) {
  const result = []
  const query = direction === 'ASC' ? findLowerInto : findHigherInto
  const len = anArr.length

  for (let i = 0; i < len; i++) {
    const current_idx = query(anArr)
    result.push(anArr.splice(current_idx, 1)[0])
  }

  return result

  function findLowerInto(anArr) {
    let lower = anArr[0];
    let lower_idx = 0

    for(let i = 0; i < anArr.length; i++) {
      if(anArr[i] < lower) {
        lower_idx = i;
        lower = anArr[i];
      }
    }

    return lower_idx;
  }

  function findHigherInto(anArr) {
    let higher = anArr[0];
    let higher_idx = 0

    for(let i = 0; i < anArr.length; i++) {
      if(anArr[i] > higher) {
        higher_idx = i;
        higher = anArr[i]
      }
    }

    return higher_idx;
  }
}



console.time('selectionSortFor')
console.log(selectionSortFor(gerarArrayDesordenado(200000), 'ASC'))
console.timeEnd('selectionSortFor')