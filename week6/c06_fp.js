// const greet = (name, formatter) => formatter(name);

// const split_join = t => t.split("").join(",").toUpperCase();

// console.log(greet("Navy", split_join));


// function a() {
//     return sum
// }
// function b() {
//     return sum(1, 5)
// }
// function c(x) {
//     return x
// }
// function sum(n1, n2) {
//     return n1 + n2
// }

// console.log(typeof a())
// console.log(typeof b())
// console.log(typeof c(sum))


// let a = 1 //global scope
// let echo;
// function doSomething(x) {
//     let a = 10 //local scope
//     let greet = "Hello"
//     echo = () => {
//         let a = 555
//         let b = "Bob"
//         console.log(a, b)
//     }
//     return `${greet}, ${x}, a=${a}`
// }
// console.log(doSomething("guest"));
// a = 100;
// console.log(`a= ${a}`);
// echo();



// function doSomething(x) {
//     function echo() {
//         return `hello, ${x}`
//     }
//     return echo;
// }

// console.log(doSomething("guest")())

function idGenerator() {
    let n = 1;
    return () => n++;
}

const idGen = idGenerator();
console.log(idGen());
console.log(idGen());
console.log(idGen());


function outerFunction(x) {
    return (y) => x + y;
}

const AddFive = outerFunction(5);
console.log(AddFive(3));
const AddTen = outerFunction(10);
console.log(AddTen(2));