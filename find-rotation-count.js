function findRotationCount(arr) {
  let idx = 0;
  while(arr[idx] < arr[idx + 1]){
    idx++
  }
  if(idx == arr.length - 1) return 0
  return idx + 1;
}
console.log(findRotationCount([7, 9, 11, 12, 15]))
module.exports = findRotationCount