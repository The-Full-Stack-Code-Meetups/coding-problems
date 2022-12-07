/* Problem 15 
This question was asked by Apple.

Given a binary tree, find a minimum path sum from root to a leaf.

For example, the minimum path in this tree is [10, 5, 1, -1], which has sum 15.

  10
 /  \
5    5
 \     \
   2    1
       /
     -1
*/



class TreeNode {

	constructor(val) {
  	this.val = val;
    this.left = null;
    this.right = null;
  }
}

/* Finding the minimum path from the root to the leaf 
 * @param {TreeNode} root
 * @return {number[]}
*/

function minTreePath(root) {
	const result = Number.MAX_VALUE;
  return recurseTree(root, result);
}

/* Recursive calls to find the results 
 * @param {TreeNode} root
 * @param {number} result
 * @return {number}
*/

function recurseTree(root, result) {
	if(root === null) return 0;
  if(root.left == null && root.right == null) return root.val;
  
  
  // Recurse left
  const left = recurseTree(root.left, result);
  
  // Recurse right
  const right = recurseTree(root.right, result);
  
  if(root.left !== null && root.right !== null) {
  	// Update the result if needed
    result = Math.min(result, left + right + root.val);
    
    // Returning the minimum possible value for root being on one side
    return Math.min(left + root.val, right + root.val);
  }

	if(root.left === null){
  	return right + root.val;
  } else if(root.right === null) {
  	return left + root.val;
  }
  return result;
}

const a = new TreeNode(10);
const b = new TreeNode(5);
const c = new TreeNode(2);
const d = new TreeNode(5);
const e = new TreeNode(1);
const f = new TreeNode(-1);

a.left = b;
a.right = d;
b.right = c;
d.right = e;
e.left = f;

console.log(minTreePath(a)); // 15


