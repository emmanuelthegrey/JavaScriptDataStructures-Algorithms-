class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
            this.top.next = this.bottom;
        } else {
            newNode.next = this.top;
            this.top = newNode;

        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length > 0) {
            var nodeToReturn = new Node(this.top.value);
            this.top = this.top.next;
        }
    }
    isEmpty() {

    }
}

const myStack = new Stack();
myStack.push("Udemy");
myStack.push("Youtube");
myStack.push("Google");
console.log(myStack.peek().value);
myStack.pop();
console.log(myStack.peek().value);
console.log();    
