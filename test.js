// function *Gen() {
//     console.log('inside:',input1)
//     var input1 = yield 'output1'

//     return input1
// }
// var gen = Gen()
// gen.next();
// console.log(gen.next('input1'))
// console.log(gen.next('input2'))
// console.log(gen.next('input3'))
// return 'input1'
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
let a = false
a |= false
console.log(a)