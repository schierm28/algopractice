//Stack Example with Array
// First in last out (FILO)
// push and pop
// [1, 2, 3, 4]
var stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.pop();
//console.log(stack);

//shift and unshift
var stack2 = [];
stack2.unshift(1);
stack2.unshift(2);
stack2.unshift(3);
stack2.unshift(4);
// [4, 3, 2, 1]
stack2.shift();

//console.log(stack2);

// Building stack using a singly linked list
// O(1) shift unshift
// O(n) search
//Access O(n)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // [ temp newNode]
  //  temp
  //  newNode
  //           temp
  //[ h g f e d c b a]
  unshift(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first; //old first
      this.first = newNode; // new first
      this.first.next = temp; // push old first to right
    }
    return ++this.size;
  }
  shift() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var stack = new Stack();

stack.unshift('a');
stack.unshift('b');
stack.unshift('c');
stack.unshift('d');
stack.unshift('e');
stack.unshift('g');
stack.unshift('h');

console.log(stack.shift());
//console.log(stack);
