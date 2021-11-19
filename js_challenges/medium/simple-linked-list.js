class Element {
  constructor(data, nextElement = null) {
    this.data = data;
    this.nextElement = nextElement;
  }

  datum() {
    return this.data;
  }

  next() {
    return this.nextElement;
  }

  isTail() {
    return (this.nextElement === null);
  }
}

class SimpleLinkedList {
  constructor() {
    this.list = [];
  }

  static fromArray(array) {
    let newList = new SimpleLinkedList();
    if (array === null || array.length === 0) return newList;

    for (let index = array.length - 1; index >= 0; index -= 1) {
      newList.push(array[index]);
    }

    return newList;
  }
  
  push(data) {
    let next = this.head() || null;
    let element = new Element(data, next);
    this.list.push(element);
  }

  pop() {
    return this.isEmpty() ? null : this.list.pop().datum();
  }

  size() {
    return this.list.length;
  }

  peek() {
    return this.isEmpty() ? null : this.head().datum();
  }

  isEmpty() {
    return (this.list.length === 0);
  }

  head() {
    return this.list[this.size() - 1];
  }

  toArray() {
    let newArray = [];

    for (let index = this.size() - 1; index >= 0; index -= 1) {
      newArray.push(this.list[index].datum());
    }

    return newArray;
  }

  reverse() {
    let reversedArray = this.toArray().reverse()

    return SimpleLinkedList.fromArray(reversedArray);
  }
}

module.exports = { SimpleLinkedList, Element }