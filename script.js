



// let number = [9, 4, 7, 3, 9, 2, 6]; 

// let isFound = false; 

//  for (let i = 0; i <= number.length - 1; i++) {

//     if (number[i] == 6) {
//         console.log("Number found"); 
//         isFound = true; 
//     }

//  }

//  console.log("Number is not found" + isFound); 


// // let separator = number.join(' = =  '); 

// // console.log(separator); 


    // function myfun() {
        
    //     let number_1 = document.getElementById("num1").value; 

    //     let number_2 = document.getElementById("num2").value; 

    //     let result = Number(number_1) + Number(number_2); 
        
    //     document.getElementById("demo").innerHTML = result; 

    //     if (result == 17) {
    //         document.getElementById("sen").innerHTML = "Seventeen"; 
    //     }
    // }




// let num = [9, 6, 3, 6, 34]; 
// let num2 = [9, 3, 78, 34, 87]; 
// let num3 = [20, 80, 34, 76, 87]; 



// function add (numb) {
//     debugger
//     let sum = 0; 
//     debugger
//     for (let i = 0; i < numb.length; i++) {
//         debugger
//         sum = sum + numb[i]; 
//         debugger
//     }

//     console.log(sum); 
//     debugger
// }


// add(num3); 
 



// function add() {
//     sum = 0; 
    
//     for (let i = 0; i < arguments.length; i++) {
//         sum = sum + arguments[i]; 
//     }

//     console.log(sum); 
// }

// add(10, 20);  
// add(900, 100, -500); 



// function channel_24 (greating, name) {

//     function allEmployee () {
//         if (name) {
//             return name.split(' ')[0] + ' ' + name.split(' ')[1]; 
//         } else {
//             return ''; 
//         }
//     }

//     let message = 'Greating' + ' ' + allEmployee(); 
    
//     console.log(message)
// }

// channel_24('Hello', 'Tanveer Rahman Evan'); 



// function add (a, b) {
//     return a * b; 
// }

// let arr = [20, 30, add(2, 5)]; 

// console.log(arr); 




// function add (a, b) {
//     return a * b; 
// }

// function manipulate (x, y, another_function) {
    
//     let t = x + y; // 7
//     let u = x - y; // 3


//    function division () {
//     let m = another_function; // 5, 2
//     return t * u * m; // 7 * 3 * 10
//    }

//    return division

// }

// let h = manipulate(5, 2, add(5, 2)); 
// console.log(h()); 



// function sum (num1 , num2) {
//     let add = num1 + num2; 
//     let subtract = num1 - num2; 
//     let multiply = num1 * num2; 
//     let division = num1 / num2; 
//     return "Addition:" + add + " | Subtraction:" + subtract + " | Multiplication:" + multiply + " | Division:" + division; 
// }


// function sample() {
    
//     let result = sum(10, 5); 
//     return result
// }

// console.log(sample()); 

// function add(a, b) {
//     let result = a + b; 
//     console.log(`Summation of ${a} & ${b} is: ` + result); 
// }
// function getData (dataId, getNextData) {

//     setTimeout(() => {
//         console.log("data", dataId); 
//         getNextData(); 
//     }, 2000)

// }
// getData(1, () => {
//     add(10, 6)
     
// }); 



// function getData (data_1) {
//     return new Promise ((resolve, reject) => {
//         setTimeout (() => {
//             console.log("Data : ", data_1); 
//             resolve("success"); 
//         }, 2000)
//     }); 
// }


//async-await init 

// async function get_all_data () {
//     console.log("Fethcing data 1"); 
//     await getData(1); 
//     console.log("Fethcing data 2"); 
//     await getData(2); 
// }

// (() => {
//     get_all_data(); 
// })();





// getData(2)
//     .then((res) => {
//         return getData(3); 
//     })
//     .then((res) => {
//         return getData(4); 
//     })



// const getPromise = () => {
//     return new Promise ((resolve, reject) => {
//         console.log("I am a promise"); 
//         // resolve("success"); 
//         reject("occured"); 
//     }); 
// }; 



// let promise = getPromise(); 

// promise.then((res) => {
//     console.log("Promise fulfilled", res); 
// }); 

// promise.catch((err)=> {
//     console.log("Err", err); 
// })





// function asyncFunc1 () {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 1"); 
//             resolve("Success"); 
//         }, 4000)
//     }); 
// }


// function asyncFunc2 () {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 2"); 
//             resolve("Success"); 
//         }, 4000)
//     }); 
// }

// console.log("Fetching Data . . . 1"); 

// asyncFunc1().then((res) => {
//     console.log("Fetching Data . . . 2"); 
//     asyncFunc2().then((res) => {})
// })



// function api () {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather data"); 
//             resolve(200); 
//         }, 2000)
//     })
// }



// let txt = async function getWeatherData () {
//     await api(); 
// } 




// const URL = "https://cat-fact.herokuapp.com/facts"; 


// const getFacts = async () => {
//     console.log("Getting data"); 
//     let promise = await fetch(URL); 
//     let extract = promise.json(); 
//     console.log(extract); 
// }


// (() => {
//     getFacts();     
// })(); 


// let sum = 0; 
// arr.forEach(function(value, index, arr) {
//     sum = sum + value; 
//     // console.log(value, index, arr); 
    
// })

// console.log(sum); 



// let arr = [10, 39, 74]; 

// function forEach_array (arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr); 
//     }
// }

// var sum = 0 ; 
// forEach_array(arr, function(value, index, arr) {
//     console.log(value, index, arr); 
//     sum = sum + value; 
// }); 

// console.log(sum); 

// const array_1 = [1, 4, 9, 16]; 

// const map_1 = array_1.map((x) => x * 2); 

// const map_1 = array_1.map((x) => x * 2)

// console.log(map_1); 


// Examples of map function implementation 

// const numbers = [5, 10, 12]; 

// const roots = numbers.map((num) => (Math.sqrt(num))); 
// let sum = 0; 
// const roots = numbers.map((num) => {
//     if (num < 20) {
//         console.log(sum = sum + num); 
//     }
// })

// console.log(roots); 



// const numbers = [25, 81, 4, 64, 810]; 
// const squaredNumbers = numbers.map(function (currentValue) {
    
//     let value = Math.sqrt(currentValue);

//     return  parseInt(value); 
    
// }); 
// console.log(squaredNumbers); 


// const numbers = [4, 9, 16, 25]; 

// const sqrArray = numbers.map(function (value) {
    
//     let convert = parseInt(Math.random() * 50); 

//     return convert; 
// })

// console.log(numbers); 
// console.log(sqrArray);



// let arr = [9, 4, 7, 8, 2]; 

// function myMap (arr, call_back) {

//     let newArray = []; 

//     for (let i = 0; i < arr.length; i++) {
//         let temp = call_back(arr[i], i,  arr); 
//         newArray.push(temp)
//     }
    
//     return newArray; 
// }


// let multiply = myMap(arr, function (value) {
//     return value * value; 
// })

// let qb = myMap(arr, function (value) {
//     return value * value * value; 
// })


// console.log("Actual Array: ", arr); 
// console.log("After multiply to itself", multiply); 
// console.log("After cube: ", qb); 


// let arr = [25, 36, 81, 100, 16]; 

// function mappingFunction (arr, callback) {

//     let new_arr = []; 

//     for (let i = 0; i < arr.length; i++) {
        
//         let temp = callback(arr[i], i, arr)
//         new_arr.push(temp); 
//     }

//     return new_arr

// }

// let x = mappingFunction(arr, function (value) {
//     return value * value; 
// }); 

// let qb = mappingFunction(arr, function(value) {
//     return value * value * value; 
// })

// let squareRoot = mappingFunction(arr, function(value) {
//     return Math.sqrt(value); 
// })

// console.log('Original Value: ' + arr); 
// console.log('After square: ' + x); 
// console.log('Cube: ' + qb); 
// console.log('Square Root Value: ' + squareRoot); 



// let arr = [1, 2, 3, 4, 5, 8, 3, 8, 4, 20, 10, 99]; 

// function myFilter (arr, callback) {

//     let new_arr = []; 

//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//             new_arr.push(arr[i]); 
//         }
//     }
//     return new_arr

// }

// let positiveValue = myFilter(arr, function (value) {
//     return value % 2 == 0; 
// })

// let negativeValue = myFilter(arr, function (value) {
//     return value % 2 == 1; 
// })


// console.log(positiveValue); 
// console.log(negativeValue); 
// console.log(arr); 

// -------------------------------------------------------------------------------------

// const numbers = [175, 50, 25]; 

// let result = numbers.reduce(function (acumulator, currentValue) {
//     return acumulator + currentValue; 
// }, 100)

// console.log(result); 



// let arr = [59, 40, 78, 98, 4, 20, 66]; 

// function myReduce (arr, callback, accumulator) {
//     for (let i = 0; i < arr.length; i++) {
//         accumulator = callback(accumulator, arr[i])
//     }
//     return accumulator
// }

// let sum = myReduce(arr, function(previousValue, currentValue) {
//     return previousValue + currentValue; 
// }, 0); 

// let maxNumber = myReduce(arr, function(previousValue, currentValue) {
//     return Math.max(previousValue, currentValue); 
// }, 0); 

// let minNumber = myReduce(arr, function(previousValue, currentValue) {
//     return Math.min(previousValue, currentValue);
// }, arr[0]); 

// console.log(sum); 
// console.log(maxNumber); 
// console.log(minNumber); 


// var arr = [8, 6, 9, 4]

// let result = arr.find(function (value) {
//     return value == 9; 
// })

// console.log(result); 


// var arr = [8, 6, 9, 4]

// let result = arr.findIndex(function (value) {
//     return value == 9; 
// })

// console.log(result); 




// let arr = [7, 4, 8, 34, 87, 23, 9, 4, 5, 2, 87, 56]

// function find_func (arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             return i; 
//         }
//     }
// }

// let result = find_func(arr, function (value) {
//     return value == 9; 
// })

// console.log(result); 






// let arr = [9, 3, 2, 0]; 

// arr.sort(function(a, b) {
    
//     if (a > b) {
        
//         return 1
        
//     } else if (a < b) {
        
//         return -1
        
//     } else {
        
//         return 0
        
//     }
    
// })

// console.log(arr); 










// let arr = [2, 3, 4, 5, 6, 8]; 

// let result =  arr.every(function (value) {
//     return value % 2 == 0; 
// })

// let result2 =  arr.every(function (value) {
//     return value > 0; 
// })

// console.log(result); 
// console.log(result2);







// function base (b) {
//     function num (n) {
//         let result = 1; 
//         for (let i = 0; i < b; i++) {
//             result = result * n; 
//         }
//         return result
//     }
//     return num
// }

// let base2 = base(3)

// console.log(base2(5)); 




// function outerFunction() {
//     let outerVariable = 10;

//     function innerFunction() {
//         console.log(outerVariable);
//     }

//     return innerFunction;
// }

// let returnedFunction = outerFunction();
// returnedFunction(); // Outputs 10




// function sayHi (n) {
//     if (n == 0) {
//         return 
//     }

//     console.log('Hi, I am calling'); 
//     sayHi(n - 2);
// }

// sayHi(10); 



// function curring (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c; 
//         }
//     }
// }

// let result = curring(5)(10)(20)

// console.log(result); 






// function print (input) {
//     console.log(input); 
// }

// function multiplyByFive (n) {
//     return n * 5 ; 
// }

// function add (a, b) {
//     return a + b; 
// }

// print(multiplyByFive(add(5, 5))); 










// function a() {
//     b(); 
//     console.log('I am function A'); 
// }

// function b() {
//     d(); 
//     console.log('I am function B'); 
// }

// function c() {
//     console.log('I am function C'); 
// }

// function d() {
//     c()
//     console.log('I am function d'); 
// }
// var x = 100; 
// a(); 
// console.log('I am global'); 



// function test () {
//     let msg = 'I am learning Lexical Scope and Closure'; 

//     return function () {
//         console.log(msg)
//     }
// }

// let sayMsg = test()

// sayMsg(); 


// let rect = {
//     width: 100, 
//     height: 80, 

//     draw: function () {
        // console.log('My Width is: ' + this.width)
        // console.log('My height is: ' + this.height)

//        let x = document.getElementById('width').innerHTML = this.width; 
//         let y = document.getElementById('height').innerHTML = this.height; 

//         let multiply = x * y; 

        
//         return document.getElementById('demo').innerHTML = multiply; 
//     },

    
// }


// let show = rect.draw()


// document.getElementById('demo').innerHTML = rect.draw()





// let createRect = function (width, height) {
//     return {
//         width: width, 
//         height: height, 
        
//         area: function () {
//             return this.width * this.height; 
//         },

//         draw: function () {
//             this.printProperties(); 
//         },

//         printProperties: function () {
//             console.log('My Width is: ' + this.width); 
//             console.log('My Height is: ' + this.height); 
//             console.log('The area is: ' + this.area()); 
//         }
//     }
// }


// let rectangle_1 = createRect(10, 8); 
// rectangle_1.draw(); 
// console.log("..........................."); 
// let rectangle_2 = createRect(3, 4); 
// rectangle_2.draw(); 





// let Rectangle = function (width, height) {
//     this.width = width; 
//     this.height = height; 
    

//     this.printProperties = function () {
//         console.log('My width is: ' + this.width); 
//         console.log('My height is: ' + this.height); 
//         let result = this.width * this.height; 
//         console.log('The Area is: ' + result); 
//     }
// }

// let rect = new Rectangle(8, 8); 
// rect.printProperties(); 





// const obj = {
//     x: 42
// }; 


// function getX () {
//     return this.x; 
// }

// const boundGetX = getX.bind(obj); 

// console.log(boundGetX()); 





// function myFunc () {
//     return this.a + this.b; 
// }

//  let x = myFunc.call({a: 20, b: 20})

//  document.getElementById('demo').innerHTML = x; 

//  let a = document.querySelector('#demo'); 
//  a.style.color = 'blue'; 

//  document.getElementById('height').innerHTML = "Hello"

//  const element = document.querySelector('#height'); 

//  element.style.color = 'red'; 



// // Select the first element with class "example"
// const element = document.querySelector('.example');

// // Now you can work with the selected element
// element.style.color = 'red';















// let red = document.querySelector('#demo'); 


// let green = document.querySelector('#demo2'); 

// function myRed () {
//     if (1+1 == 2) {
//         red.style.color = 'red'; 
//     }
// }

// function myGreen () {
//     green.style.color = 'green'; 
// }




// document.getElementById('js').innerHTML = "Aapna College"





// function auth () {
    // let first_name = document.getElementById('firstname').value; 
    // let last_name = document.getElementById('lastname').value; 

    // let first_name = document.querySelector('#firstname').value; 
    // let last_name = document.querySelector('#lastname').value; 


//     if (first_name == '' && last_name == '') {
//       alert("please fill the form"); 
//     } else {
//         document.getElementById('show').innerHTML = first_name + ' ' + last_name; 
//     }
// }




// function myFunc(c, d) {
//     console.log(this.a + this.b + c + d); 
// }

// myFunc.call({a: 7, b: 3}, 7, 3); 



// function myFunc (c, d) {
//     console.log(this.a + this.b + c + d)
// }

// myFunc.apply({a: 20, b: 20}, [5, 5]); 





// function myFunc (c, d) {
//     console.log(this.a + this.b + c + d); 
// }


// let save =  myFunc.bind({a: 40, b: 40}, 30, 30)

// save()


// let n = 10; 

// function change (n) {
//     n = n + 100; 
//     console.log(n); 
// }

// change(n); 

// console.log(n); 



// let n = 10; 


// obj = {
//     a: 30, 
//     b: 20
// }

// function changeValue (n) {
//     obj.a = obj.a + 20,  
//     obj.b = obj.b + 30, 
//     console.log(obj); 
// }

// changeValue(); 
// console.log(obj); 






// function change (c, d) {
//     document.getElementById('show').innerHTML = this.a + this.b + c + d; 
// }

// change.call({a: 20, b: 2}, 8, 20); 

// change.apply({a: 20, b: 20}, [20, 20])

// let changeValue =  change.bind({a: 30, b: 30}, 20, 20); 

// changeValue()






// var Rectangle = function (width, height) {

//     this.width = width; 
//     this.height = height; 

//     var position = {
//         x: 56, 
//         y: -100
//     }


//     var printProperties = function () {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }.bind(this)

//     this.draw = function () {
//         console.log('I am a rectangle')
//         printProperties(); 
//         console.log('position: x =' + position.x + ' Y= ' + position.y)   
//     }
// }

// var rect = new Rectangle(50, 60)
// rect.draw()




// to make the negative value positive 
// let num = -9.876; 
// let makePositive = Math.abs(num); 
// console.log(makePositive); 
// let makeInteger = Math.floor(makePositive); 
// console.log(makeInteger)








// function findStringIndex (a, b) {
//     for (let i = 0; i <= a.length-1; i++) {
//         // console.log(a[i])
//         if (a[i] == b) {
//             console.log(str[i] + ' ' + i); 
//         }
//     }
// }

// let a = document.getElementById('inp').value; 
// let b = document.getElementById('alphabet').value; 






function show () {
 
    let b = document.getElementById('inp').value; 
    // document.getElementById('show').innerHTML = b; 
    let c = document.getElementById('inp2').value; 
    // document.getElementById('show2').innerHTML = c; 

   function findStringIndex (a, b) {
            for (let i = 0; i <= a.length-1; i++) {
                // console.log(a[i])
                if (a[i] == b) {
                    // console.log(a[i] + ' ' + i); 
                    document.getElementById('show').innerHTML = "The Alphabet: " + a[i] + ' <br> Index: ' + i; 
                    
                }
            }
        }

   return findStringIndex(b, c);
}


















































































