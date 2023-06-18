function binarySearch(arr, item, low, high) {
  const middle = Math.floor((low + high) / 2)
  const guess = arr[middle]

  if (guess === item) return middle
  
  if (guess < item) {
    return binarySearch(arr, item, middle + 1, high)
  }

  return binarySearch(arr, item, low, middle - 1)
}

const my_list = [1,3,5,7,9, 10]
console.log(binarySearch(my_list, 1, 0, my_list.length - 1))