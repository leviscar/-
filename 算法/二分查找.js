// function binarySearch(arr,key) {
//     let left = 0;
//     let right = arr.length - 1;

//     while(left<=right){
//         let mid = (left+right)/2;

//         if(arr[mid] == key){
//             return mid;
//         }else if(arr[mid] < key){
//             left = mid + 1;
//         }else{
//             right = mid -1;
//         }
//     }

//     return -1;
// }


function binSearch(arr, data) {
    var upperBound = arr.length-1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        print(" 当前的中点： " + mid);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        } else if (arr[mid] > data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    } 
    return -1;
}