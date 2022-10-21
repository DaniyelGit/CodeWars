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

// -------------------------------***Разбить верблюжий регистр***------------------------------------------

const str = 'camelCaseItem'
const str1 = 'camelcase'

const breakCamelCase = string => {
	let result = ''
	for (let char of string) {
		if (char === char.toUpperCase()) {
			result += ' ' + char
		} else {
			result += char
		}
	}
	return result
}

console.log(breakCamelCase(str1))

// -----------------------------------------***Возвести каждое число в квадрат***-----------------------------------------

const value = 32321

const squareDigits = num => {
	const result = String(num)
		.split('')
		.map(n => (+n) ** 2)
		.join('')

	return +result
}

console.log(squareDigits(value))

// ----------------------------------------***Найти число гласных букв подряд***----------------------

const solve = s => {
	let prev = 0
	let max = 0

	for (let i = 0; i < s.length; i++) {
		if ('aeiou'.includes(s[i])) {
			prev++
			if (prev > max) {
				max = prev
			}
		} else {
			prev = 0
		}
	}

	return max
}

console.log(solve('ultrarevolutionariees'))

// ----------------------------------------***Найти и удалить гласные в строке***----------------------

const removeVowels = str => {
	let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

	let arr = str.split('')

	let result = arr.filter(v => !vowel.includes(v)).join('')

	return result
}

console.log(removeVowels('This website is for losers LOL!'))

const removeVowelsReg = str => {
	return str.replace(/[aeiou]/gi, '')
}

console.log(removeVowelsReg('This website is for losers LOL!'))

// ----------------------------------------***Вернуть наибольшее и наименьшее число***----------------------

const highAndLow = numbers => {
	let arr = numbers.split(' ').map(Number)

	let min = arr[0]
	let max = arr[0]

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		}
		if (arr[i] < min) {
			min = arr[i]
		}
	}

	return `${min} ${max}`
}

console.log(highAndLow('1 2 -3 4 5'))

// const highAndLow = numbers => {
// 	let arr = numbers.split(' ').map(Number)

// 	return Math.min(...arr) + ' ' + Math.max(...arr)
// 	// return Math.min.apply(0, arr) + ' ' + Math.max.apply(0, arr)
// }

// console.log(highAndLow('1 2 -3 4 5'))


// ----------------------------------------*** Принять число и вернуть его в перевернутом виде ***----------------------

const descendingOrder = n => {

	if (Math.sign(n) !== -1) {
		const value = String(n).split('').sort().reverse().join('');
		return +value;
	}
	else {
		return;
	}

}

// console.log(descendingOrder(1201));


// ----------------------------------------*** Mumbling ***----------------------

function accum(s) {
	return [...s].map((item, index) => (item.toUpperCase() + item.toLowerCase().repeat(index))).join('-');
}

// console.log(accum('acbdf'));


// ------------------------------------*** Get the Middle Character (найти середину строки) ***

const getMiddle = (string) => {
		const lengthStr = string.length;
		const middleStr = Math.floor(lengthStr/2);

		if (lengthStr % 2 === 0) {
			return string[middleStr - 1] + string[middleStr]
		}
		else {
			return string[middleStr];
		}
}

console.log(getMiddle('test'));
console.log(getMiddle('preloader'));


// 


// ------------------------------------*** Задача №44 функция принимает целое число и возводит в квадрат каждую цифру числа ***-------------

/* function squareDigits(num) {
  num = String(num).split('');
  
  return +num.map(item => item ** 2).join('');
} */


/* function squareDigits(num) {
  num = String(num).split('');
  
  return +num.reduce((accum, item) => {
    accum += Math.pow(item, 2); // или item ** 2
    return accum;
  }, '');
} */


// console.log(squareDigits(9119));


// ---------*** Задача №45 написать функцию, которая возвращает новую отсортированную (по порядку) строку, которая содержит буквы двух строк, повторяющихся только один раз. ***-------------

/* function longest(str1, str2) {
  	let concatStr = [...str1, ...str2];
  	let result = [];
  	concatStr.forEach(item => !result.includes(item) && result.push(item));
  	return result.sort().join('');
} */


/* function longest(str1, str2) {
  	let concatStr = [...str1, ...str2];
  	return concatStr.reduce((accum, item) => {
    	if (!accum.includes(item)) {
      	accum.push(item)
    	}
    	return accum;
  }, []).sort().join('');
} */

// console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));


// ---------*** Задача №42 Дан массив слов, необходимо определить, составлены ли все слова из одних и тех же символов. Функци/ реализовать как принимающую переменное число аргументов. ***-------------


// let array = ["кот", "ток", "кто"];
// array = ["кот", "тк", "кТо"];
// array = ["кит", "кИт", "кит"]

/* const checkWords = arr => {
	let sortArr = arr.map(item => item.split('').sort().join(''));
	let testWord = sortArr[0];
	return sortArr.map(item => item === testWord).every(item => item);

} */

// console.log(checkWords(array));




// ************** Задача №45 написать функцию, которая возвращает новую отсортированную (по порядку) строку, которая содержит буквы двух строк, повторяющихся только один раз. *******************

/* function longest(str1, str2) {
  let concatStr = [...str1, ...str2];
  let result = [];
  concatStr.forEach(item => !result.includes(item) && result.push(item));
  return result.sort().join('');
} */


/* function longest(str1, str2) {
  let concatStr = [...str1, ...str2];
  return concatStr.reduce((accum, item) => {
    if (!accum.includes(item)) {
      accum.push(item)
    }
    return accum;
  }, []).sort().join('');
} */

// console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));


// ************** Задача №46 Вернуть число оставшихся пассажиров в автобусе после последней остановки [[3 - вошли, 0 - вышли], [9, 1]]***

// let array = [[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]];

/* function busStops(arr) {
  let result = arr.reduce((accum, item) => {
    accum[0] += item[0];
    accum[1] += item[1];
    return accum;
  }, [0, 0]);

  return result[0] - result[1];
} */

// console.log(busStops(array));


// ***************** Задача №47 анаграмм ***************

/* function anagrams(str, arr) {
  return arr.filter(item => item.split('').sort().join('') === str.split('').sort().join(''))
}


console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
 */


// **************** Задача №48 система лайков facebook. Вернуть строку с именами, которым  нравится элемент **************

/* function likes(arr) {
  if (arr.length === 0) {
    return `no one likes this`;
  }
  else if (arr.length === 1) {
    return `${arr.join('')} likes this`;
  }
  else if (arr.length === 2) {
    return `${arr.join(' and ')} like this`;
  }
  else if (arr.length === 3) {
    return `${arr.slice(0, 2).join(', ')} and ${arr.at(-1)} like this`;
  }
  else {
    return `${arr.slice(0, 2).join(', ')} and ${arr.slice(2).length} others like this`;
  }
} */


// console.log(likes([]));
// console.log(likes(['Max']));
// console.log(likes(['Max', 'John']));
// console.log(likes(['Max', 'John', 'Mark']));
// console.log(likes(['Max', 'John', 'Mark', 'Daniyel']));
// console.log(likes(['Max', 'John', 'Mark', 'Daniyel', 'Pasha']));




