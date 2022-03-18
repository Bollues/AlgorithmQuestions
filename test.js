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

// let a = 0, b = 1, c = 2;
// [a, b, c] = [b, c, a];
// console.log(a, b, c);

// let arr = [{ id: 1 }, { id: 2 }, { id: 2 }]
// let newArr = arr.filter((item, index) => {
//   return arr.findIndex(_item => _item.id === item.id) === index
// })
// console.log(newArr);

// function test(arg1, arg2, arg3) {
//   return
// }
// console.log(test.length);

// const arr = [0,1,2,3,4,[5,6,[7,8]]]
// const newArr = arr.slice(0)
// newArr[5][0] = 0
// console.log(arr);

// Object.hasOwnProperty

/**
 * null
 * "" or " "
 * {}
 * []
 */
// function test(input_JSON) {
//   let obj = JSON.parse(input_JSON)
//   helper(obj)
//   return JSON.stringify(obj)

//   function helper(obj) {
//     for (let key in obj) {
//       if (obj[key] instanceof Object && obj[key] !== {}) {   // 递归查看子元素是否满足条件
//         helper(obj[key])
//       }
//       if (!obj[key] || (obj[key] instanceof Object && Object.keys(obj[key]).length === 0) || (Array.isArray(obj[key]) && obj[key].length === 0) || obj[key] === " " || obj[key] === "") {
//         delete obj[key]
//       }
//     }

//     for (let key in obj) {    // 某个子元素内所有元素都满足条件
//       if (obj[key] === {}) {
//         delete obj[key]
//       }
//     }
//   }
// }
// let test1 = {
//   key1: "",
//   key2: [],
//   key3: {
//     innerKey: " "
//   } 
// }
// let test2 = {
//   key1: "",
//   key2: [],
//   key3: {
//     innerKey: {
//       _innerKey: " "
//     }
//   },
//   key4: "111",
//   key5: undefined
// }
// console.log(test(JSON.stringify(test2)))

// var a = 3;
// (function (){
//     console.log(a);
//     var a = 4;
// })()

// var a = 3;
// (function (){
//     console.log(a);
//     let a = 4;
// })()

// console.log(undefined - 2)

// new Promise(resolve => {
//   console.log(1);
//   resolve();
// }).then(() => {
//    console.log(4);
// })
// setTimeout(() => console.log(2), 0);
// console.log(3);

// console.log((0.1+0.2).toFixed(20))

// const F = function () {}
// Object.prototype.a = function () {}
// Function.prototype.b = function () {}
// console.log(Function.prototype)
// const f = new F()
// console.log(f.a)
// console.log(f.b)
// console.log(F.a)
// console.log(F.b)

// const a = Number('-23+45')
// const b = parseInt('-23+45', 10)
// console.log(a, b)

// var obj = {
//   value : 'obj',
//   fn : function(){ 
//     console.log(this)
//   },
//   self: this
// }
// var fn = obj.fn;
// obj.fn();
// console.log(obj.self)

// var fn = () => {console.log('func')}
// var obj = new fn();

// var a = 0;
// function Parent(){
//   this.a = 1;
//   return this;
// }
// Parent.a = 2;         // Parent本质上也是一个对象，这个操作相当于给Parent对象上加了一个a属性，但是这与Parent方法没有关联
// Parent.prototype={
//   a : 3,
//   setA: function(value){
//     this.a = value;
//     return this;
//   }
// }
// console.log(Parent() === globalThis)
// console.log(new Parent().a);            // 2   1   this指向由构造函数Parent生成的对象
// console.log(Parent().a);                // 3   1   this指向globalThis
// console.log(new Parent().setA(4).a);    // 4
// console.log(a);                         // 0
// console.log(Parent().setA(5).a);        // 5   TypeError: Parent(...).setA is not a function

// window.name = 'ByteDance'; 
// function A() {
//   this.name = 123;
// }
// A.prototype.getA = function () {
//   console.log(this);        // 非严格模式下，funciton的this默认指向window
//   return this.name + 1;
// }
// let c = new A();
// let funcA = c.getA;
// funcA();            // ByteDance1

// function Constructor() {
//   this.a = '1'
//   this.getA = function () {
//     return this.a
//   }
// }
// const obj = new Constructor();
// obj.a = '2'
// console.log(obj)
// console.log(obj.getA())

// let state = ''
// const p = new Promise((resolve, reject) => {
//   // console.log('start')
//   state = 'pending'
//   resolve(1)
//   // reject(2)
// })
// p.catch(err => {
//   state='rejected'
//   return err
// })
// p.then(() => {
//   state='fullfilled'
// console.log(state)
// })
// console.log(0)
// async function foo() {
//   await new Promise((resolve, reject) => {console.log(state)})
// }
// foo()
// let fn = (p)=>{
//   let state = 'pending'
//   // await p
//   // await p.then(res=>{
//   //   state = this.PromiseStatus
//   // })
//   console.log(.all())
//   // return state
//   // console.log(p.__PromiseStatus__)
// }
// fn(p)

// async function renderPage(id) {
//   try {
//     const data = await request(id);
//     if (data.code === 0) {
//       renderUI(data);
//     } else {
//       uploadError(data);
//       toast('服务器错误');
//     }
//   } catch (err) {
//     uploadError(err);
//     toast('渲染错误');
//   }
// }
// function renderPage(id) {
//   return new promise((resolve, reject) => {
//     try {
//       const data = request(id)
//       if (data.code === 0) {
//         resolve(data)
//       } else {
//         reject(data, '服务器错误')
//       }
//     } catch (error) {
//       reject(error, '渲染错误')
//     }
//   }).then((res) => {
//     renderUI(res);
//   }).catch((err, msg) => {
//     uploadError(err);
//     toast(msg);
//   })
// }

// arr = [1, 1, -1, -1]
// let len = arr.length
// let dp = new Array(len+1).fill(0)
// for (let i = 0; i<len; i++) {
//     dp[i] = new Array(len+1).fill(0)
// }
// for (let i = 0; i<len; i++) {
//     for (let j = 0; j<len; j++) {
//         dp[i][j] = new Array(2).fill(0)
//     }
// }
// for (let i=0; i<len; i++) {
//     for (let j = i; j<len; j++) {
//         if (i === j) {
//             if (arr[i] === 1) {
//                 dp[i][j][1] = 1
//             }
//         } else {
//             if (arr[i] === 1) {
//                 dp[i][j][1] = dp[i][j-1][1] + 1
//             } else {
//                 dp[i][j][0] = dp[i][j-1][0] + 1
//             }
//         }
//     }
// }
// console.log(dp[0][len-1][1])

// 美团笔试第二题
// arr = [[4], [1, 1, -1, -1]]
// let n = arr[1].length
// let sum = 0
// let dp = new Array(n)
// for (let i = 0; i < n; i++) {
//   dp[i] = new Array(n).fill(false)
// }
// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     if (i == j) {
//       if (arr[j] == 1) {
//         dp[i][j] = true
//       }
//     } else {
//       if (arr[j] == 1) {
//         if (dp[i][j - 1] == true) {
//           dp[i][j] = true
//         }
//       } else {
//         if (dp[i][j - 1] == false) {
//           dp[i][j] = true
//         }
//       }
//     }
//   }
// }
// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     if (dp[i][j] == true) {
//       sum += 1
//     }
//   }
// }
// console.log(sum)

// function foo (nums){
//   const row = nums.length
//   const col = nums[0].length
//   let ans = 0
//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       if (nums[i][j] === 0) {
//         helper(i, j)
//       }
//     }
//   }
//   return ans

//   function helper(i, j) {
//     for (let rowStart = i - 1; rowStart >= 0; rowStart--) {
//       if (nums[rowStart][j] === 1) {
//         ans += 1
//         break
//       }
//     }
//     for (let rowStart = i + 1; rowStart < row; rowStart++) {
//       if (nums[rowStart][j] === 1) {
//         ans += 1
//         break
//       }
//     }
//     for (let colStart = j - 1; colStart >= 0; colStart--) {
//       if (nums[i][colStart] === 1) {
//         ans += 1
//         break
//       }
//     }
//     for (let colStart = j + 1; colStart < col; colStart++) {
//       if (nums[i][colStart] === 1) {
//         ans += 1
//         break
//       }
//     }
//   }
// }
// const arr = [
//   [0,1,0,0],
//   [1,0,1,0]
// ]
// console.log(foo(arr))

/**
b b r
g b b
b r g

* * r
g * *
b r g

g r r
b * g
* * *

g r r
b b g
r r r

rbbbg  -> bbg
brgbb  -> gbb
rbgbg  -> bgbg
 */

// const obj = Object.create(null, {
//   name: {
//     value: 'rollingball',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// })
// // console.log(obj.__proto__)
// // console.log(Reflect.ownKeys(obj))
// console.log(Object.getOwnPropertyNames(obj))

// console.log(Object.prototype.toString.call(null))

// const obj = {}
// console.log(Object.values(obj))