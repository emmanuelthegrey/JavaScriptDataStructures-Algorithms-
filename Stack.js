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
            this.length--;
            
        }else
        {
            return null;
        }
        
        if(this.length === 0){
            this.bottom = null;
        }
        return nodeToReturn;
    }
    isEmpty() {
        if (this.length == 0) return true;
        return false;
    }
}

const myStack = new Stack();
// console.log(myStack.isEmpty());
myStack.push("Udemy");
myStack.pop();
console.log();
// myStack.push("Youtube");
// myStack.push("Google");
// console.log(myStack.isEmpty());
// console.log(myStack.peek().value);
// console.log(myStack.pop().value);
// console.log(myStack.peek().value);
// console.log(myStack.pop().value);
// console.log(myStack.pop().value);
// console.log(myStack.pop().value);
// console.log();    
