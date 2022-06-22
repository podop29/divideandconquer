function countZeroes(arr) {
    let lIdx = 0;
    while(arr[lIdx] == 1){
        lIdx++;
    }
    return arr.length - lIdx
  
}


module.exports = countZeroes