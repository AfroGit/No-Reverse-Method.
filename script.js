"use strict";

// Given a string of characters as input, write a function that returns it withh the characters reversed. No Reverse Method.

function reverseStr(str){
  let reverseStr = ""
  for(let char of str){
    reverseStr = char + reverseStr
  }
  return reverseStr
}
console.log(reverseStr("haras"))