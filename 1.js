function leftRotation(array, count) {
    output = []
    let temp = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < count) {
            temp.push(array[i])
        }
        if (array[i] >= count) {
            output.push(array[i])
        }

    }
    for (let i = 0; i < temp.length; i++) {
        output.push(temp[i])
    }
    return output
}

console.log(leftRotation([0, 1, 2, 3, 4, 5], 1)) // [ 1, 2, 3, 4, 5, 0]
console.log(leftRotation([0, 1, 2, 3, 4, 5], 2)) // [ 2, 3, 4, 5, 0, 1 ]
console.log(leftRotation([0, 1, 2, 3, 4, 5], 3)) // [ 3, 4, 5, 0, 1, 2 ] 
