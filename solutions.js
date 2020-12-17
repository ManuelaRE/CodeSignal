// THE JOURNEY BEGINS
// 1. Write a function that returns the sum of two numbers.

function add(param1, param2) {
    return param1 + param2;
}


// 2. Given a year, return the century it is in. The first century spans from the year 1 
// up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
    let numberToCheck = (year) / 100;
    let roundedNumber = Math.floor(numberToCheck)
    if(numberToCheck > roundedNumber) {
        return roundedNumber + 1;
    } else return roundedNumber;
}

// 3. Given the string, check if it is a palindrome.

function checkPalindrome(inputString) {
    // split in array of words then joined in a string with no spaces "neveroddoreven"
    let str = inputString.split(" ").join(""); 
    
    // split in an array of letters, reversed and joined in a string with no spaces "neveroddoreven"
    let strReversed = str.split("").reverse().join(""); 
            
    return  (str === strReversed) ? true : false;
}


//EDGE OF THE OCEAN
// 4. Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function adjacentElementsProduct(inputArray) {    
    let arrayofNum = [];
    
    for(let i = 0; i < inputArray.length - 1; i++) {
        arrayofNum.push(inputArray[i] * inputArray[i + 1]);
    }
    return Math.max(...arrayofNum)
}

// 5. Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
// area of a sqaure added to the area of the previous square
function shapeArea(n) {
    if(n == 1) return 1;
    return n**2 + (n-1)**2
}



