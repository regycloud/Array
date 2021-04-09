function multiplyEverything(arr) { 
    let total = [];
    for (i = 0; i < arr.length; i++) {
        total.push(arr[i]*2)
    }

    return total;
}
console.log(multiplyEverything([1, 2, 3, 4])) // [2, 4, 6, 8]
