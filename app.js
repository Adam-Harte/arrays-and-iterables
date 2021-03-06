//creating arrays
const numbers = [1, 2, 3];
const moreNumber = new Array();
const evenMoreNumbers = new Array(5);
const yetMoreNumbers = Array.of(1, 2, 3);
const convertedArray = Array.from('hi!');

console.log(numbers);
console.log(moreNumber);
console.log(evenMoreNumbers);
console.log(yetMoreNumbers);
console.log(convertedArray);

//adding and removing elements
const hobbies = ['sport', 'cooking'];
hobbies.push('reading'); //returns length of the array
hobbies.unshift('coding'); //returns the length of the array
hobbies.pop(); //returns the popped value
hobbies.shift(); //returns the shifted value

console.log(hobbies);

hobbies[1] = 'Coding';
hobbies[4] = 'Reading';

console.log(hobbies);

hobbies.splice(2, 1);
hobbies.splice(3, 0, 'Gaming');

console.log(hobbies);

//selecting ranges and copying
const results = [1, 2, 4, 3.5, 7.2, 2];
const results2 = results.slice();
results.push(9);
const results3 = results.slice(0, 4);

console.log(results);
console.log(results2);
console.log(results3);

//adding arrays to arrays
const newResult = results.concat(results2, results3);

console.log(newResult);

//finding indexes and element values
console.log(results.indexOf(2));
console.log(results.lastIndexOf(2));
const persons = [{ name: 'Adam' }, { name: 'Neil' }, { name: 'Owen' }];
console.log(persons.find(person => person.name === 'Neil'));
console.log(persons.findIndex(person => person.name === 'Owen'));

//includes
console.log(results.includes(7.2));

//forEach
const prices = [10.99, 2.99, 5.99];
const tax = 0.19;
const taxAdjustedPrices = [];

prices.forEach(price => {
  taxAdjustedPrices.push(price * (1 + tax));
});

console.log(taxAdjustedPrices);

//transforming data
const taxAdjustedPricesMap = prices.map((price, index) => {
  const priceObj = { idx: index, price: price * (1 + tax) };
  return priceObj;
});

console.log(taxAdjustedPricesMap);

//sorting and reversing
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log(sortedPrices.reverse());

//filtering
const filteredPrices = prices.filter(price => price > 6);

console.log(filteredPrices);

//reduce
const summedPrices = prices.reduce((prev, cur) => prev + cur, 0);
console.log(summedPrices);

//split and join
const data = 'London;15/03/2020';
const transformedData = data.split(';');
console.log(transformedData);

const names = ['Adam', 'Neil', 'Owen'];
const joinedNames = names.join(', ');
console.log(joinedNames);

//array spreading
const copiedNames = [...names];
names.push('Albert');
console.log(names);
console.log(copiedNames);
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

//array destructuring
const [first, second, third] = names;
console.log(first);
console.log(second);
console.log(third);

const [nameOne, nameTwo, ...otherNames] = names;
console.log(otherNames);

//sets
const ids = new Set([1, 2, 3]);
console.log(ids.has(2));
ids.add(4);
ids.delete(2);

for (const entry of ids.entries()) {
  console.log(entry);
  console.log(entry[0]);
}

ids.clear();

//maps
const person1 = { name: 'Adam' };
const person2 = { name: 'Neil' };

const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);
personData.set(person2, [{ date: 'last week', price: 30 }]);

console.log(personData);
console.log(personData.get(person1));
console.log(personData.has(person2));

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value);
}

personData.delete(person1);
console.log(personData);

personData.clear();
console.log(personData);
