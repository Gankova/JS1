console.log("Javascript")

// comment
/*
comment
comment
comment
*/
/*
высокоуровневый
инетерпритируемый
не строго типизированыый
*/

// создание переменных или константы
var a = 121212; //переменная
console.log(a);
var a ="hello";
console.log(a);

let b = true;
b = 12;
// если var - то ее область видимости весь script на странице(глобальная область видимости)
// let область видимости ближайшие {}
{
    let c = 12;
    var d = 12;
    {
        console.log(c);
    }

}
console.log(d);
//console.log(c); ошибка c не видна

const pi =3.14; // область видимости как и у let

// массивы
let arr = [5,true,4,"hello",5,3];
console.log(arr);
console.log(arr[1]);
console.log(arr.length);
for (let i = 0; i < 5; i++){
    console.log(i);
}
let g = 3;
while (g != 0) {
    console.log(g);
    g--;
};

do {
    g++;
    console.log("js")
}while(g<4);

// for-of  в e записываются значение элементов массива
for (let e of arr){
    console.log(e)
}
// continue
// break
// console.clear, -очищает консоль

// условные операторы
if(true){

}else{

}

switch (a){
    case 2:
        console.log("hi");
        break;
    default:
        console.log("defalt");

}

//null
let obj = null;
let obj2 = undefined;
let obj3 = 0;
let obj4 = "";

if (!obj){
    console.log("no")
}
if (!obj2){
    console.log("no")
}
if (!obj3){
    console.log("no")
}
if (!obj4){
    console.log("no")
}

console.log(2 == "2");//не сравнивает типы true
console.log(2 === "2");//сравнивает типы false
//!= не сравнивает типы
//!== сравнивает тип


//тернарный оператор
let test = a > 0 ? 78: "test";

// функция
function sum(a,b) {// область видимости sum как и у var
    return a+b;        
}
console.log(sum(12,45))

function min(a,b,c) {
    if (a == undefined){
        return undefined;
    }
    if (b == undefined){
        return a;
    }
    if (c == undefined){
        return a < b ? a : b;
    }
    if (a<b && a <c){
        return a;
    }
    return b < c ? b : c;    
}
console.log(min())//undefined
console.log(min(10))//10
console.log(min(15,4))//4
console.log(min(18,1,30))//18

function calcTotalBill(bill, tips = 0.2) {
    return bill*(1+tips);    
}
console.log(calcTotalBill(200));
console.log(calcTotalBill(200, 0.25));

let fn = sum;
let fn2 = function(x) {
    console.log(x);

}
console.log(fn(1,6));
fn2("test");
function DimacalcTotalBill(bill, tips = 0.2) {
    return bill/(1-tips)* tips;    
}

function test2( fn, bill, tips = 0.2) {
    console.log(fn(bill,tips));
}
test2(calcTotalBill,100);
test2(DimacalcTotalBill,100);

let fact = (n) => {};
fact = (n) => console.log(n)
fact = n => console.log(n)
fact = n => n == 1 ? 1 : n*fact(n-1);
console.log(fact(5));

// работа со строками
let s = "stryng";
let s2 = 'stryng';

let name ="Vasya"
let s3 = `My name is ${name}`;
console.log(s3);