// This problem was asked by Google.
// Given an array of strictly the characters 'R', 'G', and 'B', 
// segregate the values of the array so that all the Rs come first, 
// the Gs come second, and the Bs come last. You can only swap elements of the array.
// Do this in linear time and in-place.
// For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should 
// become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

function segregate(arr) {
    //Length
    let n = arr.length;
  
    //Start of the array
    let begin = 0;
  
    //End of the array
    let end = n - 1;
  
    //Current element
    let curr = 0;
  
    while (curr <= end) {
  
      //If the element is "R", Replace the element with the letter "R"
      if (arr[curr] === "R") {
        [arr[begin], arr[curr]] = [arr[curr], arr[begin]];
  
        //Add one position to the curr and begin elements
        begin += 1;
        curr += 1;
  
      //If the element is "B", Replace the element with the letter "B"
      } else if (arr[curr] === "B") {
        [arr[end], arr[curr]] = [arr[curr], arr[end]];
  
        //The end point is reduced by 1
        end -= 1;
      } else {
  
        //If the element is not found, coninue with the next element
        curr += 1;
      }
    }
    return arr
  }
  console.log(segregate(['G', 'B', 'R', 'R', 'B', 'R', 'G']))