function uniqueValue(arr) {
    let kata = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[arr.length - i] && arr[i] !== arr[i + 1]) {
            // console.log(arr[i])
            kata.push(arr[i])
        }
    }
    return kata
}
console.log(uniqueValue(['Sepatu', 'Sepatu', 'Meja', 'Meja'])) // [ 'Sepatu', 'Meja']
console.log(uniqueValue(['Baju', 'Penghapus', 'Penghapus', 'Sepatu', 'Penghapus'])) 
// ['Baju', 'Penghapus', 'Sepatu']
