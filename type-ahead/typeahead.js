const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

// Since Safari does not implement fetch() yet
function ajax(url, callback, data, x) {
  try {
    x = new(this.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
    x.open(data ? 'POST' : 'GET', url, 1);
    x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    x.setRequestHeader('Origin', 'https://localhost/');
    x.onreadystatechange = function () {
      x.readyState > 3 && callback && callback(x.responseText, x);
    };
    x.send(data);
  } catch (e) {
    window.console && console.log(e);
  }
}

function setupSearch() {
  // fetch(endpoint)
  //   .then(blob => blob.json())
  //   .then(data => cities.push(...data));

  function populateCities(data) {
    cities.push(...JSON.parse(data));
  }
  ajax(endpoint, populateCities);
  console.log(cities);
  
  searchbox = document.querySelector('.search');
  searchbox.addEventListener('change', displayMatches);
  searchbox.addEventListener('keyup', displayMatches);
}

function findMatches(word) {
  return cities.filter(place => {
    regexp = new RegExp(word, 'i');
    return place.city.match(regexp) || place.state.match(regexp);
  });
}

function displayMatches() {
  results = findMatches(this.value, cities);
  resultshtml = results.map(place => {
    let name = `${place.city}, ${place.state}`;
    regexp = new RegExp(this.value, 'gi');
    name = name.replace(regexp, `<span class="hl">${this.value}</span>`);
    return `<li> <span class="name">${name}</span> <span class="population">${place.population}</span>`;
  }).join('');

  suggestions = document.querySelector('.suggestions');
  suggestions.innerHTML = resultshtml;
}
