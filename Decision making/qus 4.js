// Q4. Find Relation
// PrepBuddy wants you to get familiar with various Relational operators.
// He provides you with two integer values  X  and  Y  and asks you to find the relation between them.
// The relationships between integers  X  and  Y  are as follows:

// If  X < Y , it means that  X  is smaller than  Y .
// If  X > Y , it means that  X  is greater than  Y .
// If  X = Y , it means that  X  is equal to  Y . 
// Note: You have to complete findRelationship function. No need to take any input.

// Input Format
// The first and the only line of the input contains two space-separated integers  X  and  Y , denoting the integers which PrepBuddy gives you.

// Output Format
// Return the relationship between the integers that PrepBuddy gave you.

// Constraints 1 ≤ X , Y ≤ 500

// Time Limit
// 1 second

// Example
// Sample Input
// 3 11

// Sample Output
// 3 is smaller than 11

// Ans:
// const findRelation = (X,Y) => {
//     if(X < Y){
//       return (X +" is smaller than "+ Y);
//     }  
//     else if(X == Y){
//       return (X +" is equal to "+ Y);
//     }
//     else{
//       return (X +" is greater than "+ Y);
//     }
//   }