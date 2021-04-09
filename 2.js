function reverseMe(str) {
    str += '';
    output = [];
    for (i = 0; i < str.length; i++) {
        output.push(Number(str[str.length - i - 1 ]))

    }
    return output;
}


console.log(reverseMe(348597)) // [ 7, 9, 5, 8, 4, 3]
