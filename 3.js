/*
At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age]. 

https://www.codewars.com/kata/5720a1cb65a504fdff0003e2
*/


function differenceInAges(ages){
    let output = []
    let biggest = 0
    let smallest = 100
    let selisih = 0
    for (let i = 0; i < ages.length; i++ ){
        if (ages[i] > biggest) {
            biggest = ages[i]
        }
        if (smallest > ages[i]) {
            smallest = ages[i]
        }
    }
    selisih = biggest - smallest
    output.push(smallest)
    output.push(biggest)
    output.push(selisih)
return output;
}

console.log(differenceInAges([82, 15, 6, 38, 35])) // [6, 82, 76]
console.log(differenceInAges([57, 99, 14, 32])) // [14, 99, 85]
