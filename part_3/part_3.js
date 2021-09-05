/*

PART 4 [Problem Solving]:
Solve the question below:

Write a isABalancedString function that takes a string as an input, 
return 'YES' if the parentheses in the input string are balanced,
return 'NO' if the parentheses in the input string are not balanced,. 

*/
const balance = {
  '(': ')',
  '{': '}',
  '[': ']',
  ')': '(',
  '}': '{',
  ']': '['
}


console.log('PART 4');

const isABalancedString = (string) => {

  let length = string.length;
  console.log('length :', length);


  let b =
    string.split('').splice(0, length / 2).map((item) => {
      return balance[item]

    });
  console.log(string.split('').splice(length / 2, length).reverse().join(''));
  console.log(b.join(''));




  if (string.split('').splice(length / 2, length).reverse().join('') === b.join(''))
    return true;

  else return false;

};

/*

Examples:

isABalancedString( '[]' )
=> YES

isABalancedString( '[{()}]' )
=> YES

isABalancedString( '[()]{}{()()}' )
=> YES

isABalancedString( '[{()}])' )
=> NO

isABalancedString( '({()}])' )
=> NO

isABalancedString( '[{)]({()(})' )
=> NO

isABalancedString( '[(){([])[}]()]' )
=> NO

isABalancedString( '[(){([])}({){}}]' )
=> NO

isABalancedString( '[(){([])})' )
=> NO

*/
