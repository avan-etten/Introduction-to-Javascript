console.log("Introduction to Javascript");

//FIZZBUZZ
for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 || i % 5 === 0) {
        if (i % 3 === 0) {
            console.log("Fizz");
        }
        if (i % 5 === 0) {
            console.log("Buzz");
        }
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
    } else {
        console.log(i);
    }
}

function countBs(string){
    let count = 0;
    for (let i = 0; i < string.length; i++) {

        if (string[i] === 'B'){
            count++;
        }
    }
    return count;
}
