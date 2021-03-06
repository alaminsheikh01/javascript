class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // check is empty or not
  isEmpty() {
    return this.length === 0;
  }

  // push method
  push(value) {
    let newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // pop from last node method
  pop() {
    if (!this.head) {
      return null;
    }
    if (this.length === 1) {
      let removeNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removeNode;
    }

    let currentNode = this.head;
    let lastNode = this.tail;
    let newLastNode;

    while (currentNode) {
      if (currentNode.next === this.tail) {
        newLastNode = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }
    newLastNode.next = null;
    this.tail = newLastNode;
    this.length--;
    return lastNode;
  }

  // pop from first node method
  shift() {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    this.head = currentNode.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentNode;
  }

  // added value from the frst node
  unShift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // show value as a list
  showList() {
    let arr = [];
    let currentNode = this.head;

    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }
}

let list = new SinglyLinkedList();
// console.log(list);
// console.log(list.isEmpty());

list.push(5);
list.push("Hello");
list.unShift(8);
list.push(10);
list.push(15);

console.log(list.showList());
// list.shift();

// list.pop();
// console.log(list.isEmpty());
console.log(list);
