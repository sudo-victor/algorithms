function qsort(aArr) {
  if(aArr.length < 2) return aArr;
  const pivot = aArr.shift();

  const lessThanPivot = aArr.filter((a) => a <= pivot)
  const greaterThanPivot = aArr.filter((a) => a > pivot)

  return [...qsort(lessThanPivot), pivot, ...qsort(greaterThanPivot)]
}

console.log(qsort([4,2,5,2,1,6,10]))
