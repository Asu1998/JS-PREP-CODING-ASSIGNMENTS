// Q8. Second Smallest
// You are given  3  distinct integers  X , Y ,  and  Z ,  and your task is to find and return the second smallest integer among the three provided integers.

// Note: You have to complete findSndSmallest function. No need to take any input.

// Input Format
// The first and the only line of the input contains three space-separated integers  X ,  Y , and  Z , denoting the integers among which you have to find the second smallest element.

// Output Format
// Return the second smallest integer among the three integers given to you.

// Constraints 1 ≤ X , Y , Z ≤ 500

// X != Y ,  Y != Z ,  X != Z

// Time Limit
// 1 second

// Example
// Sample Input
// 2 9 23

// Sample Output
// 9

// Ans:

// const findSndSmallest = (X,Y,Z) => {
//     if((X > Y && Z > X) || (X < Y && Z < X)){
//       return X;
//     }
//     else if((Y > X && Z > Y) || (Y < X && Z < Y)){
//       return Y;
//     }
//     else{
//       return Z;
//     }
//   }
  
  