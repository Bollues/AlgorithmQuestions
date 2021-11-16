function *Gen() {
    console.log('inside:',input1)
    var input1 = yield 'output1'
    
    return input1
}

var gen = Gen()

// gen.next();
console.log(gen.next('input1'))
console.log(gen.next('input2'))
console.log(gen.next('input3'))

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