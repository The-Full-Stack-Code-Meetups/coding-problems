/* Problem 25

This problem was asked by Amazon.

Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string AAAABBBCCDAA would be encoded as 4A3B2C1D2A.

Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid. */

/* RLE - Run-length encoding is a form of lossless data compression in which runs of data (if we have sequences of the same data value occuring in many consecutive data elements) are stored as a single value and count, rather than the original run */

function runLengthEnc(string) {
	let res = '';
  let count = 1;
  // aaabbb
  // We will need to add the run segments and count how many characters are in a run
  for(let i = 0; i < string.length; i++){
  	let j = i + 1;
    // aaabbbbbbbbbbbbbbbb
    // a === a
    // a === b 
    // b === b
    while(string[i] === string[j]) {
    	count++;
   		j++;
    }
    	res = res.concat(`${count}${string[i]}`);
      count = 1;
      i = j - 1;
  }
	return res;
}

console.log(runLengthEnc('aaabbbbbbbbbbbbbbbb'))

function decodingRun(string){
	return string.replace(/(\d+)(\w)/g,
  	function(m, n, c) {
    	return new Array(parseInt(n, 10) + 1).join(c)
    }
  )
}

console.log(decodingRun('3a16b'))
