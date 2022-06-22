function findFloor(arr,num) {
    if(num < arr[0])return -1

    for(let i =0; i < arr.length; i++){
        if(arr[i] > num){
            return arr[i-1]
        }

    }
    return arr[arr.length-1]
  
}

console.log(findFloor([1,2,8,10,10,12,19], 9))

module.exports = findFloor