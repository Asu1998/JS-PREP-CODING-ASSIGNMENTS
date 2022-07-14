// Q1.Find the number of digits
// Take a number from the user and print the count of digits in that number.

// Note: You have to complete Find_Digits. No need to take any input.

// Input Format 
// The input contains a single number  N .

// Output Format
// Return the count of digits in the given number.

// Constraints 
// 1 ≤ N ≤ 10000

// Time Limit
// 1 second

// Example
// Sample Input
// 1234

// Sample Output
// 4 

// Ans:

// const Find_Digits = (N) => 
// {
//   var i=0;
	
//   if(N >= 1)
//   i++;
  
//   while(N/10>=1){
//     N= N/10;
//     ++i;
//   }
// return i;
// }