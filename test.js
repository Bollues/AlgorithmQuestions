// function *Gen() {
//     console.log(1);
//     yield 2
//     console.log(3);
//     var output = yield 4
//     return output
// }
// var gen = Gen()
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next(100))
// console.log(gen.return());
// var gen_obj=gen();
// var gen_obj=counter(1);
// console.log(gen_obj.next())
// console.log(gen_obj.next(1))
// console.log(gen_obj.next())
// console.log(gen_obj.next(2))
// console.log(gen_obj.next())
// console.log(gen_obj.next(222))
// console.log(gen_obj.next())


// for (let i = 0; i < 10; i++) {
//     console.log('before----', i)
//     i ++
//     console.log('after----', i)
// }


// let a = [1,2,3,4]
// a.splice(0, 1)
// console.log(a)

// a = ['as',2,3]
// console.log(a.join('.'))

// a = '1234567890'
// console.log(a.substr(9, 2))
// console.log(a.charAt(2))

// a = 1
// console.log(typeof(1 * 10 + (12 - '0')))

// for (let i = 2; i--;)
//   console.log(i)

// a = [1,2,3,4]
// console.log(Math.min(...a))

// a = [1,2,3,4]
// for (let i = 0; i < a.length; i++) {
//   a.push(0)
//   console.log(a)
// }

// num = 5
// num = num ++ * 2
// console.log(num)

// console.log(Math.floor(21/10))
// console.log(0 | 21 / 10)

// console.log(Math.pow(10, 2))
// console.log(9 % 10)

// a = [1,2,3,4]
// let b = a.slice(0, 2)
// console.log(b)

// a = {
//   'name': 'rollingball',
//   'age': 12
// }
// for (let k in a) {
//   console.log(k)
// }

// a = { 'count': 0 }
// Object.assign(a, {'count': a.count + 1}, {'count': a.count + 1}, {'count': a.count + 1})
// console.log(a.count)

// console.log(null === undefined)

// console.log(1234 / 10 | 0)

// a = {
//   name: 'rollingball'
// }
// console.log('age' in a)

// a= 'roll ing ba ll'
// a.charAt(2) = '999'
// console.log(a)

// let a = 1234
// let sum = 0
// a.toString().split('').forEach(item => sum += item*1)
// console.log(sum)

// const test = {
//   name: 'rollingball'
// }
// console.log(test.__proto__.constructor.prototype)

// console.log(3 & 1)      // 判断奇偶
// let a = false
// a |= false
// console.log(a)

// let a = 'rollingball'
// let tmp = a[0]
// a[0] = a[a.length - 1]
// a[a.length - 1] = tmp
// console.log(a)

// function test(a, b = a) {
//   console.log(a, b)
// }
// test(1)

// let a = '1230'
// console.log(a.split('').reverse().join(''))

// let a = 123
// console.log(~~(a / 10))

// let a = '1'
// let b = 'r'
// console.log(a in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
// console.log(b in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])

// console.log(Math.abs(1-2))

// const helper = (arr, startIdx, endIdx) => {
//   let tmp = arr.slice(startIdx, endIdx + 1)
//   tmp.reverse()
//   arr.splice(startIdx, endIdx - startIdx + 1, ...tmp)
//   return arr
// }
// function test(arr, operations) {
//   for (op of operations) {
//     arr = helper(arr, op[0], op[1])
//   }
//   return arr
// }
// let arr = [3,1,2,3,3,2]
// console.log(test(arr, [[0, 2], [1, 2], [0, 2]]))

// let str = 'babb'
// // let re = /[ab]|([ab])[ab]*\\1/
// let re = /(a[ab]*(\1=a))|(b[ab]*(\1=b))/
// console.log(re.test(str))

// function test1(arr) {
//   arr.sort((a, b) => a - b)
//   arr[0] = 1
//   for (let i = 1; i < arr.length; i++) {
//     while ((arr[i] - arr[i - 1]) > 1) arr[i]--
//   }
//   return arr
// }
/**
 * 得到数组的长度len
 * 遍历数组，找到比len小的数的数量greater
 * 遍历的同时找到比len小的最大的数greatest
 * return (greatest + len - greater)
 */
// function test2(arr) {
//   const len = arr.length
//   let greatest = -Infinity
//   let greater = 0
//   for (num of arr) {
//     if (num < len) {
//       greater ++
//       greatest = Math.max(greatest, num)
//     }
//   }
//   return greatest + len - greater
// }
// let arr = [9, 9, 1, 1, 1, 234,345,67,56,7,6,8,789,789,890,0,9,089,2,4,5,5,2,34,2,4,2,34,3,4,3,43,45,34,2,78,98,8880,899,7,9000009,6,7,8,67,86,78,67,8,6,78,678,67,8]
// console.log(test1(arr))
// console.log(test2(arr))

// console.log(5 >> 1)

// let a = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]
// console.log(a.toString().split(','))

// console.log('a'.charCodeAt())

// let a = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]
// console.log(Object.values(a))

// let a = [0, 1, 2]
// console.log(a.splice(1, 1))

// const arr = new Array(5 + 1).fill(0)
// console.log(arr)

// let a = {
//   'name': 'rollingball',
//   'age': 1
// }
// console.log(Object.keys(a))

// console.log('rollingball'.substring(1,3))

// console.log(7 & 4)

// function add (a, b) {
//   console.log(123123)
//   return a + b
// }
// const res = new add(1,2)
// console.log(res)

// class Add {
//   constructor() {
//     this.a = 1
//     console.log(213123)
//   }
//   static abc() {
//     console.log(213123213213123)
//   }
// }
// const res = new Add()
// console.log(res.abc)
// Add.abc()

// let obj = {name: '啥也不是'}
// let obj2 = {age: '老不死的'}
// let map = new WeakMap([[obj, 'rollingball'], [obj2, Infinity]])
// console.log(map.get(obj))
// obj = null
// console.log(map.get(obj))
// console.log(map.get(obj2))

// let p = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve()
// })
// p.then(_ => {
//   return new Promise((resolve, reject) => {
//     console.log(2)
//     resolve()
//   })
// }).then(_ => {
//   return new Promise((resolve, reject) => {
//     console.log(3)
//     // reject('err')
//     throw new Error('err')
//   })
// }).then(_ => {
//   return new Promise((resolve, reject) => {
//     console.log(4)
//     resolve()
//   })
// }).catch(e => {
//   console.log(11111)
//   console.log(e)
// })

// let obj = {'name': '老东西'}
// let map = new Map(Object.entries(obj))
// let arr = Object.entries(obj)
// let newObj = Object.fromEntries(arr)
// console.log(newObj)

// let someThing = [0].push(1)
// console.log(someThing)

// console.log(undefined - 2)

// const arr = []
// arr.push(0)
// arr[3] = 3
// arr = arr
// console.log(arr)

// const map = new Map([
//   ["foo",1],
//   ["bar",2],
// ])
// console.log(map.entries().next())
// console.log(map.entries().next())
// console.log(typeof map.entries())

// let obj = {'name': '老东西'}
// console.log(new Map(Object.entries(obj)))
// console.log(Object.fromEntries(new Map(Object.entries(obj))))

// const arr = [0, 1, 2, 3]
// try {
//   arr.forEach(item => {
//     console.log(item)
//     if (item === 2) {
//       throw new Error()
//     }
//   })
// } catch (error) {}

// function test() {
//   console.log(arguments)
//   for (const item of arguments) console.log(item)
// }
// test(1, 2, 3, 4)

// let arr = [new Date()]
// console.log(arr.toLocaleString());
// console.log(arr.toString());

// let arr = [0, 1]
// console.log(arr.splice(0, 1, 2));
// console.log(arr);

// let arr = [25, 100]
// console.log(arr.reverse());

// const arr = new Array(2)
// console.log(arr.fill(2));

// console.log(Object.prototype.__proto__ === null);

// const obj = {}
// obj.__proto__.age = 3
// console.log(obj.age);
// console.log(obj.hasOwnProperty('ages'));

// console.log([].constructor === Array);

// console.log('10' & '01')
// console.log(1 | 2)
// console.log(parseInt('1110', 2));
// console.log(parseInt('1110', 2));

// console.log('1213'.indexOf(1));

// function test(A) {
//   let start = 0
//   let res = 0
//   while(start < A.length) { 
//     let end = start
//     while(A[end] === A[start]) end += 1
//     const delTimes = end - start
//     const insertTimes = Math.abs(A[start] - (end - start))
//     res += Math.min(delTimes, insertTimes)
//     start = end
//   }
//   return res
// }
// console.log(test([1,1,1,1,3,3,4,4,4,4,4]));

// const arr = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (const key in arr) {
//   console.log(key);
// }

// console.log(Math.pow(2, 53));
// console.log(Math.pow(2, 53) + 1);
// console.log(Math.pow(2, 53) + 2);
// console.log(parseInt('100000000000000000000000000000000000000000000000000000', 2));

// setTimeout(() => console.log('a'), 3000)
// const time1 = new Date().getTime()
// while (new Date().getTime() - time1 < 1500) { }
// setTimeout(() => console.log('b'), 1000)

/**
 * input: a=[1,[2,[3,[4,null]]]]
 * output: b=[4,[3,[2,[1,null]]]] 
 */
// function test(arr) {
//     const nums = []
//     backTrack(arr)
//     dfs(arr, nums.length - 1)
//     return arr

//     function backTrack(subArr) {
//         if (!subArr[1]) {
//             nums.push(subArr[0])
//             return
//         }
//         nums.push(subArr[0])
//         backTrack(subArr[1])
//     }

//     function dfs(subArr, index) {
//         if (index < 0) return
//         subArr[0] = nums[index]
//         dfs(subArr[1], index - 1)
//     }
// }
// console.log(test([1,[2,[3,[4,null]]]]));

// for(var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   })
// }
// for(var i = 0; i < 5; i++) {
//   (function(i) {
//     setTimeout(() => {
//       console.log(i);
//     })
//   })(i)
// }

let a = 0, b = 1, c = 2;
[a, b, c] = [b, c, a];
console.log(a, b, c);