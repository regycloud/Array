/**
 * ======
 * Genap and Reverse
 * ======
 *
 * Buatlah sebuah function yang akan menerima satu parameter sebuah array berisi angka.
 *
 * Output dari function ini adalah angka angka yang genap dengan urutan yang dibalik dari urutan yang dibuat sebelumnya
 */

function evenAndReverse(array) {
    let output = [];
    for (i = 0; i < array.length; i++) {
        if (array[array.length - i - 1] % 2 == 0) {
            output.push(array[array.length - i -1]);
        }
    }
    return output;
}

console.log(evenAndReverse([1, 2, 3, 4, 5])) // [4, 2]
console.log(evenAndReverse([10, 9, 8, 7, 6, 5, 4])) // [4, 6, 8, 10]
