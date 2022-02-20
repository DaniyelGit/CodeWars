'use strict'

// ----------------- ***Given an array of integers your solution should find the smallest integer.*** ----------

const arr = [-5, 78, 56, 1, 232, 12, 8, -10]

const fingMinValueInArr = args => {
	// const value = args.reduce((prev, item) => {
	// 	if (prev > item) {
	// 		return item;
	// 	}
	// 	else {
	// 		return prev;
	// 	}
	// });
	// return value;
	const value = args.reduce((prev, item) => {
		return prev > item ? item : prev
	})
	return value
}

console.log(fingMinValueInArr(arr))

//  ----------------------------------- ***Remove String Spaces*** --------------------------------

const string = '8 j 8   mBliB8g  imjB8B8   jl  B'

const removeStringSpaces = str => {
	// return str.split(' ').join('');
	return str.replace(/\s/g, '')
}

console.log(removeStringSpaces(string))

// ----------------------------- ***Count sheep in array*** -----------------------------

const arrayOfSheep = [
	true,
	true,
	true,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	true,
	false,
	true,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	false,
	true,
	true,
	true,
	true,
]

const countSheepInArr = arr => {
	// let result = 0;
	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i]) {
	// 		result = result + 1;
	// 	}
	// }
	// return result;

	// let result = arr.reduce((prev, item) => {
	// 	return item === true ? prev + 1 : prev;
	// }, 0);

	// return result;

	return arr.filter(s => s).length
}

console.log(countSheepInArr(arrayOfSheep))

// ---------------- ***We need a function that can transform a number into a string.*** -------------------

const number = 67

function numberToString(num) {
	return String(num)
	// return num + '';
	// return num.toString();
}

console.log(numberToString(number))

// ------------------- ***Return the number (count) of vowels in the given string.***------------------------------

const strForVowels = 'abracadabra'

const findCountVowels = str => {
	const vowels = ['a', 'e', 'i', 'o', 'u']
	// let count = 0

	// for (let char of str.toLowerCase()) {
	// 	if (vowels.includes(char)) {
	// 		count += 1
	// 	}
	// }
	// return count

	const result = str
		.toLowerCase()
		.split('')
		.reduce((prev, item) => {
			if (vowels.includes(item)) {
				return (prev += 1)
			} else {
				return prev
			}
		}, 0)

	return result

	// let vowels = str.match(/[aeiou]/gi)
	// return vowels ? vowels.length : 0
}

console.log(findCountVowels(strForVowels))
