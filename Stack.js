class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

    class Stack{
        constructor(){
            this.top = null;
            this.bottom = null;
            this.length = 0;
        }
        peek(){

        }
        push(value){
            let newNode = new Node(value);
            if(this.length === 0){
                this.top = newNode;
                this.bottom = newNode;
                this.bottom.next = this.top;
            }else{
                this.top.next = newNode;
                this.top = newNode;
            }
            this.length++;
            return this;
        }
        pop(){

        }
        isEmpty(){

        }
    }

    const myStack = new Stack();
    myStack.push("Udemy");
    myStack.push("Youtube");
    myStack.push("Google");
    
