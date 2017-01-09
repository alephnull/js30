function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

let imgList;

function checkSlide(e) {
  imgList.forEach(img => {
    const showAt = (window.scrollY + window.innerHeight - img.height/2);
    const imgBottom = img.offsetTop + img.height;
    if (showAt > img.offsetTop // 50% shown
        && window.scrollY < imgBottom) { // scrolled past
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}

function setup() {
  imgList = document.querySelectorAll('.slide-in');
  window.addEventListener('scroll', debounce(checkSlide));
}
