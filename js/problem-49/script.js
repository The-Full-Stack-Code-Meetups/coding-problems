var maxProfit = function(prices) {

 

   let minPrice = Infinity;
   let maxProfit = 0;

   for(let i = 0; i < prices.length; i++){
           if(prices[i] < minPrice){
          minPrice = prices[i]
      } else if(prices[i] - minPrice > maxProfit){
          maxProfit = prices[i] - minPrice;
      }
   }
         return maxProfit;

};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit( [7,6,4,3,1]))
console.log(maxProfit([2, 4, 1]))
