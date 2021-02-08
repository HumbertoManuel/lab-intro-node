class SortedList {
  constructor() {
    this.item=[];
    this.length=0;
  }
 
  add = function(item) {
    this.items.push(item);
    this.items.sort(function(a,b) {
      return a-b;
    });
    this.length++;
  }

  get = function(pos) {
    if (pos<1 || pos > this.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos-1];
  }

  max = function() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max.apply(Math, this.items);
  }

  .min = function() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min.apply(Math, this.items);
  }

  sum = function() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items.reduce(function(sum, ele){
      return sum + ele;
    }, 0);
  }

  average = function() {
    return (this.sum() / this.length);
  }
  
}

module.exports = SortedList;
