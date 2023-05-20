/* Problem 5
This problem was asked by Facebook.
Given an array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock once. You must buy before you can sell it.

For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock at 5 dollars and sell it at 10 dollars.
*/

/* Function find the maximum profit which we can make, from a list of stock prices
 * @param {string[]} stocksp
 * @return {number}
 */

function findMaximumP(stocksp){

let minPrice = Math.min(...stocksp);
let restOfPrices = stocksp.slice(minPrice - 1);
let maxPrice = Math.max(...restOfPrices);

return maxPrice - minPrice;

}

console.log(findMaximumP([9, 11, 8, 5, 7, 10]))


