// Задание 1
let x1 = -5;
let y1 = 8;
let x2 = 10;
let y2 = 5;

console.log("Площадь прямоугольника = ",Math.abs(x1-x2) * Math.abs(y1-y2))

// Задание 2
let a = 13.890123;
let b = 2.891564;
let n = 3;

console.log("Результат для числа a = ",Math.trunc((a-Math.floor(a))*10**n))
console.log("Результат для b = ",Math.trunc((b-Math.floor(b))*10**n))

console.log("a > b",a > b)
console.log("a < b",a < b)
console.log("a != b",a != b)
console.log("a >= b",a >= b)
console.log("a <= b",a <= b)
console.log("a === b",a === b)


// Задание 3 
let n3 = 0;
let m = 100;

max = Math.max(n3,m)
min = Math.min(n3,m) 
range = max-min
result = Math.round(Math.random()*range + min)
remains = 1 - (result % 2)

result = result - remains
console.log(result)
