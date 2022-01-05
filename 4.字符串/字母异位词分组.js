/**
 * 由于互为字母异位词的两个字符串包含的字母相同，因此两个字符串中的相同字母出现的次数一定是相同的，故可以将每个字母出现的次数使用字符串表示，作为哈希表的键。
 * 由于字符串只包含小写字母，因此对于每个字符串，可以使用长度为 26 的数组记录每个字母出现的次数。
 * 使用数组作为哈希表的键
 * Object.values 返回对象的每个属性值
 */

var groupAnagrams = function (strs) {
  const map = {}
  for (let string of strs) {
    const count = new Array(26).fill(0)
    for (let letter of string) {
      count[letter.charCodeAt() - 'a'.charCodeAt()] += 1      // 字母出现的次数 + 1
    }
    map[count] ? map[count].push(string) : map[count] = [string];
  }
  // console.log(map)
  return Object.values(map);
}