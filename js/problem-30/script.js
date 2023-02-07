function permArr(arr, perm){
  let results = []

  for(let i=0; i<arr.length; i++){
    let place = perm[i]
    results.push(arr[place])
  }
  return results
}

console.log(permArr(['a', 'b', 'c'], [2,1,0])) //["c", "b", "a"]
console.log(permArr(['a', 'b', 'c', 'd', 'y'], [4,2,3,1,0])) //["y", "c", "d", "b", "a"]
