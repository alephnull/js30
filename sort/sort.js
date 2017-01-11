const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function cmpNoArticle(a, b) {
  let [x, y] = [a, b].map(i => i.replace(/^(an?|the) +/i, ''));

  if (x > y) return 1;
  if (x === y) return 0;
  if (x < y) return -1;
}

console.log(bands);
console.log(bands.sort(cmpNoArticle));
