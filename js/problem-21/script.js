let missingElementArray1 =
function missingElement(array1, array2){
  //For loop
  for(let i=0; i<array1.length; i++){
    //Current element
    let curr = array1[i];
    //Check if the element is missing
    if(!array2.includes(curr)){
      return curr
    }  
  }
}

let missingElementArray2 =
function missingElement2(array1, array2){
  var add = function(a,b){return a+b}

  return array1.reduce(add) - array2.reduce(add)
}

console.log(missingElementArray1([1,2,3,4], [1,4,2,3])) //1
console.log(missingElementArray1([5,28,3,0], [3,28,5]))//0

console.log(missingElementArray2([1,2,3,4], [1,4,2,3])) //1
console.log(missingElementArray2([5,28,3,0], [3,28,5]))//0