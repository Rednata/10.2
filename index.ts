import { product } from "./src/modules/product";
import { calcTotalPrice } from "./src/modules/calc";
import { carResult } from "./homework1";

const title = 'Квадорокоптер';
const price = 150_000;
const count = 10;
const arrived = false;

const result: string = calcTotalPrice(product);

const city: string[] = ['Варшава', 'Вильнюс', 'Рига'];
const counter: number[] = [25, 14, 74, 12];
city.push('Таллин')

const route = city.filter(item => item !== 'Варшава')
  .map(item => item.toUpperCase())
  .reduce((acc, item )=> acc + '->' + item);

const arr: [string, number, boolean] = ['react', 15, true];

arr[0] = 'sdfsfsdf';
console.log('arr: ', arr);

const arrObj: {
  name: string;
  age: number;
}[] = [
  {name: 'Max', age: 35}, {name: 'Anton', age: 25}];

console.log(arrObj);
console.log();

console.log('carResult: ', carResult);



