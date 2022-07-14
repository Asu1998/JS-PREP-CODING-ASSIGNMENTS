// Q6. Get Value
// You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the table corresponding to an input character and return it.

// | P or p 	- PrepBytes      	|
// | Z or z 	- Zenith         	|
// | E or e 	- Expert Coder   	|
// | D or d 	- Data Structure 	|

// Note: You have to complete getValue function. No need to take any input.

// Input Format
// The first and the only line of the input contains a character  C , representing the character that you will get in input.

// Output Format
// Return the value corresponding to the input character.

// Constraints
// C  will be one of the following characters:  [ P , p , Z , z , E , e , D , d ] .

// Time Limit
// 1 second

// Example
// Sample Input
// E

// Sample Output
// Expert Coder

// Ans:

// const getValue = (C) => {
//     switch(true){
//       case (C === "P" || C === "p"):
//        return 'PrepBytes';
//       case (C === "Z" || C === "z"):
//        return 'Zenith';
//       case (C === "E" || C === "e"):
//        return 'Expert Coder';
//       case (C === "D" || C === "d"):
//        return 'Data Structure';
//       default:
//        return 'Check again'; 
//     }
//   }