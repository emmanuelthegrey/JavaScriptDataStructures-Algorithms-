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
