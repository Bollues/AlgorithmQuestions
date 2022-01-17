/**
 * 
 */
var reverseLeftWords = function (s, k) {
  return s.substring(k, s.length) + s.substring(0, k)
};