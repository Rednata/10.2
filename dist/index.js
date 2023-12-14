"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./src/modules/product");
const calc_1 = require("./src/modules/calc");
const homework1_1 = require("./homework1");
const title = 'Квадорокоптер';
const price = 150_000;
const count = 10;
const arrived = false;
const result = (0, calc_1.calcTotalPrice)(product_1.product);
const city = ['Варшава', 'Вильнюс', 'Рига'];
const counter = [25, 14, 74, 12];
city.push('Таллин');
const route = city.filter(item => item !== 'Варшава')
    .map(item => item.toUpperCase())
    .reduce((acc, item) => acc + '->' + item);
const arr = ['react', 15, true];
arr[0] = 'sdfsfsdf';
console.log('arr: ', arr);
const arrObj = [
    { name: 'Max', age: 35 }, { name: 'Anton', age: 25 }
];
console.log(arrObj);
console.log();
console.log('carResult: ', homework1_1.carResult);
