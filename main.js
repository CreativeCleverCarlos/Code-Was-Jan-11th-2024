/**
 You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
**/

function stray(numbers) {
    //the array must be checked if it has an odd number
    if (numbers.length % 2 !== 0 && numbers.length >= 3){
        let filtered = numbers.filter((word) => {
            if (word !== word){
                return word
            }
        }) 
        return filtered
    } else {
        return "it's even"
    }
  }

  console.log(stray([5,5,1]))

  //the solution

  function strays(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
  }

  console.log(strays([5,4,5]))