// build a function that uses bubble sort to sort an array from
// highest value to lowest value and returns the new sorted array

function bubbleSort(arr) {
// ================= code goes here ===========================
for(i=0; i<arr.length; i++){
    for(j=0; j<arr.length; j++){
        if(arr[j]> arr[j+1]){
            var temp = arr[j]
            arr[j]= arr[j+1];
            arr[j+1]= temp;
        }
    }

}
return arr;







// ============================================================
}

var testArray = [34, 23, 3, 76, 20, 84, 18, 9];
testArray = bubbleSort(testArray);
console.log(testArray);