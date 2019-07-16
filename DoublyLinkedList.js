class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList{
    constructor(value){
        this.head = {
            value: value, 
            next: null,
            previous: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
    }

    insert(index, value) {
        var currentNode = new Node(value);
        if (value === 0)
           return this.prepend(value);
        if (index >= this.length) {
           return this.append()
        }
    const previous = this.traverseToIndex(index - 1)
    const currentLastNode = previous.next;

    previous.next = currentNode;
    currentNode.previous = previous;
    currentNode.next = currentLastNode;
    currentLastNode.previous = currentNode;
    
    this.length++;
    return this;

    }
    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }

    traverseToIndex(index){
        //validate
        //Example 1 --> 10 --> 5 ==> 16 --> 99
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        var previousNode
        
        if(index < 0 || index > this.length) 
        {
            return null;
          }

     
    if(this.length === 1){

        this.head = null;
        this.length--;
        return this.printList();
    }else if(index == 0){
        const currentNode = this.traverseToIndex(index);
        this.head = currentNode.next;
        this.head.previous = null;
        this.length--;
        return this.printList();
    } else if(index == this.length - 1){
         previousNode = this.traverseToIndex(index - 1);
        this.tail = previousNode;
        
    }else{
        previousNode = this.traverseToIndex(index - 1);

    }
    
    const targetNode = previousNode.next;
    previousNode.next = targetNode.next;
    targetNode.next.previous = previousNode;

     this.length--;
     return this.printList();
        
    }
}

MyLinkedList = new DoublyLinkedList(1);

MyLinkedList.append(2);

MyLinkedList.append(3);
MyLinkedList.prepend(111);
MyLinkedList.insert(1,222);

MyLinkedList.remove(2);
MyLinkedList.printList();
