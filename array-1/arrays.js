// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const renaissance = inventors.filter(i => i.year >= 1500 && i.year < 1600);
console.log(renaissance);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const names = inventors.map(i => [ i.first, i.last ]);
console.log(names);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
var sorted = inventors.slice(0);
sorted.sort((a, b) => (a.year > b.year) ? 1 : -1);
console.log(sorted);

// Print just desired prop
function pprint(arr, prop) {
  if (prop) {
    return arr.map(i => [`${i.first} ${i.last}`, i[prop] ]);
  } else {
    return arr.map(i => `${i.first} ${i.last}`);
  }    
}

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
inventors.map(i => i.age = i.passed - i.year);
console.log(inventors);
console.dir(pprint(inventors, 'age'));
console.log('Total years: ' + inventors.reduce((t, i) => t + i.age, 0));

// 5. Sort the inventors by years lived
sorted = inventors.slice(0);
sorted.sort((a, b) => (a.age > b.age) ? 1 : -1);
console.dir(pprint(sorted, 'age'));
// console.log(sorted);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// var request = require('request');
// var cheerio = require('cheerio');

// request('https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris', function(err, resp, html) {
//   if (!err && resp.statusCode == 200) {
//     var $ = cheerio.load(html);
//     var boulevards = $('mw-category a').map((i, link) => $(link).attr('title'));
//     console.dir(boulevards);
    
//     // console.log(.filter(i => $(i).attr('href')));
//   }
// });

// 7. sort Exercise
// Sort the people alphabetically by last name
sorted = inventors.slice(0);
sorted.sort((a, b) => (a.last > b.last) ? 1 : -1);
console.dir(pprint(sorted));

sorted = people.slice(0);
sorted.sort((a, b) => a.split(', ')[0] > b.split(', ')[0] ? -1 : 1);
console.log(sorted);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
console.dir(data.reduce(function (counts, i) {
  if(!counts[i]) {
    counts[i] = 0;
  }
  counts[i]++;

  return counts;
}, {}));
