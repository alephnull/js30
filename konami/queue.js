function Queue(sz) {
  var queue = [];
  var size = sz;

  this.queue = (item) => {
    if (queue.length > size) {
      queue.shift();
    }
    queue.push(item);
  }

  this.contents = () => queue.join('');

  this.clear = () => queue=[];
}
