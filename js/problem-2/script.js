// This problem was asked by Quora.
// Given an absolute pathname that may have . or .. as part of it, return the shortest standardized path.
// For example, given /usr/bin/../bin/./scripts/../, return /usr/bin/.

/* Finding the shortest standardized path
 * @param {string} fullpath
 * @return {string}
 *
 */

function findShortestPath(fullpath) {
  let standardizedPath = [];
  fullpath = fullpath.split("/");
  for (let i = 0; i < fullpath.length; i++) {
    if (fullpath[i] === "." || fullpath[i] === "") continue;
    if (fullpath[i] === "..") standardizedPath.pop();
    else standardizedPath.push(fullpath[i]);
  }
  return `${"/" + standardizedPath.join("/")}`;
}

console.log(findShortestPath("/usr/bin/../bin/./scripts/../"));
