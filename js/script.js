'use strict';


// ----------------- ***Given an array of integers your solution should find the smallest integer.*** ----------

const arr = [-5, 78, 56, 1, 232, 12, 8, -10];

const fingMinValueInArr = (args) => {
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
		return prev > item ? item : prev;
	});
	return value;
};

console.log(fingMinValueInArr(arr));


//  ----------------------------------- ***Remove String Spaces*** --------------------------------

const string = '8 j 8   mBliB8g  imjB8B8   jl  B';

const removeStringSpaces = (str) => {
	// return str.split(' ').join('');
	return str.replace(/\s/g, '');
};

console.log(removeStringSpaces(string));


// ----------------------------- ***Count sheep in array*** -----------------------------

const arrayOfSheep = [true, true, true, false,
	true, true, true, true,
	true, false, true, false,
	true, false, false, true,
	true, true, true, true,
	false, false, true, true, true, true];

const countSheepInArr = (arr) => {
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

	return arr.filter(s => s).length;
};

console.log(countSheepInArr(arrayOfSheep));