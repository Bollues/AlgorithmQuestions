// var compareVersion = function(version1, version2) {
//     let v1 = version1.split('.')
//     let v2 = version2.split('.')
//     for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
//         const n1 = v1[i] ? parseInt(v1[i]) : '0'
//         const n2 = v2[i] ? parseInt(v2[i]) : '0'
//         if (n1 > n2) return 1
//         else if (n1 < n2) return -1
//     }
//     return 0
// };

var compareVersion = function(version1, version2) {
    const n = version1.length
    const m = version2.length
    let i = j = 0
    while (i < n || j < m) {
        let n1 = n2 = 0
        // 一边遍历version1一边生成数字
        while (i < n && version1.charAt(i) != '.') {
            n1 = n1*10 + parseInt(version1.charAt(i))
            i ++
        }
        i ++    // 跳过 .
        // 一边遍历version2一边生成数字
        while (j < m && version2.charAt(j) != '.') {
            n2 = n2*10 + parseInt(version2.charAt(j))
            j ++
        }
        j ++    // 跳过 .
        // 当双方都遇到 . 时 进行一个数字的比较
        if (n1 > n2) return 1
        else if (n1 < n2) return -1
    }
    return 0
};

console.log(compareVersion('1.2', '1.10'))