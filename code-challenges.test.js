// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest
describe('greeter', () => {
    it("return hi, fox", () => {
        expect(greeter()).toEqual('hi, fox!')
    })
})

const greeter = () => {
    return 'hi, fox!'
}

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('arrShuffle', () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

    it("removes the first item from the array and shuffles the remaining content.", () => {

        expect(arrShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(arrShuffle(colors2)).toEqual(expect.arrayContaining(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]))

    })
})

// ReferenceError: arrShuffle is not defined

// b) Create the function that makes the test pass.

// So I need to make a function that takes in an array and removes the first item and shuffles the rest
// To access the first item I would use a method color1.shift()
// Then take the color1 array and shuffle the items in the array, with .sort() and Math.random()
// Then return the new array

const arrShuffle = (arr) => {
    arr.shift()
    arr.sort(() => Math.random() - 0.5)
    return arr
}

// arrShuffle
// ✓ removes the first item from the array and shuffles the remaining content.



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

describe('voteCount', () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
    it("takes in an object that contains up votes and down votes and returns the net total of votes.", () => {
        expect(voteCount(votes1)).toEqual(11)
        expect(voteCount(votes2)).toEqual(-31)

    })
})

// ● voteCount › takes in an object that contains up votes and down votes and returns the net total of votes.

// ReferenceError: voteCount is not defined

// b) Create the function that makes the test pass.

// Im going to write a function that takes in a obj
// Then access the keys and values in the obj
// Then take the upVotes and subtract from downVotes
// Then return the final value

const voteCount = (obj) => {
    let votes = obj.upVotes - obj.downVotes
    return votes
}

// voteCount
// ✓ takes in an object that contains up votes and down votes and returns the net total of votes.

// Test Suites: 1 passed, 1 total


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe('arrAddNoDupl', () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
        expect(arrAddNoDupl(dataArray1,dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    })
})

// ● arrAddNoDupl › takes in two arrays as arguments and returns one array with no duplicate values.

// ReferenceError: arrAddNoDupl is not defined

// b) Create the function that makes the test pass.

// I need to write a func that take in to arg and return one array with no duplicates values
// First I will need an empty arr to push in all the items in the array.
// Then I can combine the arrays together
// Then I will loop through the array and push each new item into the new arr
// I will use a conditional to check it its in the arr and it not it will push into the new array
// Then return the new array.

const arrAddNoDupl = (arr1,arr2) => {
    newArr = []
    let arrConcat = arr1.concat(arr2)
    for(let i = 0; i <arrConcat.length ;i++ ){
        if(!newArr.includes(arrConcat[i])){
            newArr.push(arrConcat[i])
        }
    }
    return newArr
}

// Great this worked as expected, glad to know I still got it.