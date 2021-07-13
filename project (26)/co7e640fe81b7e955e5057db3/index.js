import { Animal } from './animal.js';

let cat = new Animal('Cat', 4);

cat.legs = 3;
cat.makeNoise('Meow');
console.log(cat.legs)