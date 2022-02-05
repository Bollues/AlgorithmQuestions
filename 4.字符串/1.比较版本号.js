/**
 * 转换成数组，然后转数字进行比较
 */

var compareVersion = function (version1, version2) {
  const v1 = version1.split('.')
  const v2 = version2.split('.')

  for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
    const n1 = v1[i] ? Number(v1[i]) : 0
    const n2 = v2[i] ? Number(v2[i]) : 0
    if (n1 > n2) return 1
    if (n1 < n2) return -1
  }
  return 0
};

/**
 * 优化空间
 * 用双指针代替数组
 */
var compareVersion = function (version1, version2) {
  let p1_start = 0, p1_end
  let p2_start = 0, p2_end

  while (p1_start < version1.length || p2_start < version2.length) {
    p1_end = p1_start
    p2_end = p2_start
    while (version1[p1_end] !== '.' && p1_end < version1.length) p1_end += 1
    while (version2[p2_end] !== '.' && p2_end < version2.length) p2_end += 1

    const n1 = Number(version1.slice(p1_start, p1_end))
    const n2 = Number(version2.slice(p2_start, p2_end))
    if (n1 > n2) return 1
    if (n1 < n2) return -1

    p1_start = p1_end + 1
    p2_start = p2_end + 1
  }
  return 0
};