/*
1 *** Greeting ***
  Define a function greeting that accepts an optional string argument called name. greeting should return a personalized string if the name is present.
  Example:
  --------
  greeting('Tala'); // => Hello Tala!
  greeting(); // => Hello!
*/
//=================={Answer}=======================
/* function greeting(name) {
  return name ? "Hello " + name + "!" : "Hello!";
}

console.log(greeting("Tala"));
console.log(greeting()); */
//================================================

/*
2 *** Max of Three ***
  Write a function maxOfThree that accepts three number arguments.
  maxOfThree should return largest number of the three.
  Example:
  --------
  maxOfThree(5, 4, 10); // => 10
  maxOfThree(7, 7, 4); // => 7
*/
//=================={Answer}=======================
/* function maxOfThree(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

console.log(maxOfThree(5, 4, 10));
console.log(maxOfThree(7, 7, 4));
console.log(maxOfThree(8, 4, 7));
console.log(maxOfThree(-1, 0, 6)); */
//================================================

/*
3 *** Last Character ***
  Define a function lastCharacter that accepts two strings as arguments.
  lastCharacter should return true if both strings end with the same character. Otherwise, lastCharacter should return false.
  Example:
  --------
  lastCharacter('apples', 'pumpkins'); // => true
  lastCharacter('marker', 'pen'); // => false
*/
//=================={Answer}=======================
/* function lastCharacter(string1 = "", string2 = "") {
  if (string1[string1.length - 1] === string2[string2.length - 1]) {
    return true;
  } else {
    return false;
  }
}

console.log(lastCharacter("apples", "pumpkins"));
console.log(lastCharacter("marker", "pen")); */
//================================================

/*
4 *** Tax Calculator ***
  Define a function taxCalculator that accepts the price of an item
  and a country code.
  taxCalculator should return the after-tax cost of the item,
  assuming JOR's tax is 4% and UAE's sales tax is 6.625%.

  Example:
  --------
  taxCalculator(100, 'JOR'); // => 104
  taxCalculator(100, 'UAE'); // => 106.625
*/
//=================={Answer}=======================
/* function taxCalculator(price, countryCode) {
  if (countryCode === "JOR") {
    return price + price * 0.04;
  } else if (countryCode === "UAE") {
    return price + price * 0.06625;
  }
}

console.log(taxCalculator(100, "JOR"));
console.log(taxCalculator(100, "UAE")); */
//================================================

/*
5 *** Only Odds ***
  Define a function, onlyOdds, that accepts a number as an argument.
  onlyOdds should return the sum of all the odd numbers between the given number and 1.
  If onlyOdds receives an argument less than 1, it should return 0.
  Example:
  --------
  onlyOdds(6); // => 9 (5 + 3 + 1)
*/
//=================={Answer}=======================
/* function onlyOdds(number) {
  let sum = 0;
  while (number >= 1) {
    if (number % 2 !== 0) {
      sum += number;
    }
    number--;
  }
  return sum;
}

console.log(onlyOdds(6));
console.log(onlyOdds(11));
console.log(onlyOdds(-13)); */
//================================================

/*
6 *** Even Couple ***
  Define a function, evenCouple, that accepts an array of
  numbers as an argument.
  evenCouple should return a new array with the first two
  even numbers from the original array:
  evenCouple([1, 2, 3, 4, 5, 6]); // => [2, 4]

  If fewer than two even numbers exist in the original array,
  return an empty array or an array with the only even number:
  Example:
  --------
  evenCouple([13, 15, 20]); // => [20]
  evenCouple(1, 3, 5, 7); // => []
*/
//=================={Answer}=======================
/* function evenCouple(arr = []) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
    if (newArr.length === 2) {
      break;
    }
  }
  return newArr;
}

console.log(evenCouple([1, 2, 3, 4, 5, 6]));
console.log(evenCouple([13, 15, 20]));
console.log(evenCouple([1, 3, 5, 7])); */
//================================================

/*
7 *** My Slice ***
  Write a function mySlice that accepts up to three arguments:
  originalString (string)
  startIdx (number, optional)
  endIdx (number, optional)

  mySlice should return a string. The returned string should be a copy of the original string. If the user defines a startIdx, the returned string should start at that index:
  Example:
  --------
  mySlice('slice and dice', 2) // => ice and dice
  If the user defined an endIdx, the returned string should end at
  the last index before the endIdx:
  mySlice('slice and dice', 2, 5) // => ice
  If the user doesn't define either the startIdx or the endIdx,
  return the entire originalString:
  mySlice('slice and dice') // => slice and dice
  You can assume the startIdx will always be less than or equal
  to the endIdx.
  Do not use the built-in .slice string method in your answer.
  Feel free to use it in all future workshop problems though!
 */
//=================={Answer}======================
/* function mySlice(string, startIndex, endIndex) {
  if (startIndex === undefined && endIndex === undefined) {
    return string;
  }

  let newString = "";
  if (endIndex === undefined) {
    endIndex = string.length;
  }
  for (let i = startIndex; i < endIndex; i++) {
    newString += string[i];
  }
  return newString;
}

console.log(mySlice("slice and dice"));
console.log(mySlice("slice and dice", 2));
console.log(mySlice("slice and dice", 2, 5)); */
//================================================

/*
8 *** My Index Of ***
  Define a function, myIndexOf, that accepts two arguments:
  - source (string)
  - searchValue (string)

  If the source contains the searchValue, return the index at which the searchValue starts.
  If the searchValue appears more than once in the source, return the index from the first occurrence of the searchValue.
  If the searchValue doesn't exist in the source, return -1.
  Do not use the built-in .indexOf string method in your answer.
  Feel free to use it in all future workshop problems though!
  Example:
  --------
  myIndexOf('hello', 'h'); // => 0
  myIndexOf('hello', 'e'); // => 1
  myIndexOf('hello', 'l'); // => 2
  myIndexOf('hello', 'l'); // => 2
  myIndexOf('hello', 'o'); // => 4
  myIndexOf('twice twice', 'ice'); => 2
  myIndexOf('happy string', 'sad'); => -1
*/
//=================={Answer}======================
/* function myIndexOf(source, searchValue) {
  for (let i = 0; i < source.length; i++) {
    if (source[i] === searchValue[0]) {
      if (searchValue.length > 1) {
        let sliced = source.slice(i, i + searchValue.length);
        if (sliced === searchValue) {
          return i;
        }
      } else {
        return i;
      }
    }
  }
  return -1;
}

console.log(myIndexOf("hello", "h"));
console.log(myIndexOf("hello", "e"));
console.log(myIndexOf("hello", "l"));
console.log(myIndexOf("hello", "l"));
console.log(myIndexOf("hello", "o"));
console.log(myIndexOf("twice twice", "ice"));
console.log(myIndexOf("happy string", "sad")); */
//================================================
