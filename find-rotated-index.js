function findRotatedIndex(arr, num) {
    let pvtIdx = arr.length/2;
    let idx=0;
    while(arr[idx] != num){
        if(num < arr[pvtIdx]){
            idx = pvtIdx
        }
        if(arr[idx] == undefined)return -1
        idx++
    }
    
    return idx
}

console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12))
module.exports = findRotatedIndex