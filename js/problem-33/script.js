/* Problem 33 

This problem was asked Microsoft.

Using a read7() method that returns 7 characters from a file, implement readN(n) which reads n characters.

For example, given a file with the content “Hello world”, three read7() returns “Hello w”, “orld” and then “”.

*/


let fileContent = "Hello world";
let currentPosition = 0;

function read7() {
  let result = "";
  
  // we extract a substring of 7 characters from the file, starting from the current position, this method is predefined from the start
  result = fileContent.substr(currentPosition, 7);

  // Increment the current position by 7 to simulate the reading of the next 7 characters
  currentPosition += 7;

  return result;
}

function readN(n){
if(n > fileContent.length){
	return 'ERROR'
}

let buffer = '';
let result = '';


while(result.length < n){

if(buffer.length === 0){
buffer = read7();
	if(buffer.length === 0){
  	break;
  }
}
	result += buffer.charAt(0);
  buffer = buffer.substring(1);
}

	return result;
  
}

console.log(readN(7))
