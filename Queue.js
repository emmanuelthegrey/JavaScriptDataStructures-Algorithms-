class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek(){
return this.first;
    }
    enqueue(value){
        let newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }
    dequeue(){
        if(this.length < 1) return;
        var nodeToReturn = this.first;
        this.first = this.first.next;
this.length--;
        return nodeToReturn;
    }
    isEmpty(){

    }
}

var myQueue = new Queue();
myQueue.enqueue("Emmanuel");
myQueue.enqueue("David");
myQueue.enqueue("Jesus");
console.log();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log();
