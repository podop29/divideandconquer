function sortedFrequency(arr, num) {
    let count = 0;
    for(elm of arr){
        if (elm == num) count++;
    }
   return count > 0 ? count : -1

}



module.exports = sortedFrequency