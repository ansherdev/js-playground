/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const getSortedString = (str) =>
  str
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");

var isAnagram = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }

  return getSortedString(a) === getSortedString(b);
};

var groupAnagrams = function (strs) {
  const groups = new Map();

  for (const str of strs) {
    const sortedStr = getSortedString(str);

    if (groups.has(sortedStr)) {
      groups.set(sortedStr, [...groups.get(sortedStr), str]);
    } else {
      groups.set(sortedStr, [str]);
    }
  }

  return Array.from(groups.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
