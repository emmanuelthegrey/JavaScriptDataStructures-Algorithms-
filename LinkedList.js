class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        this.head = {
            value: value, 
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
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

    currentNode.next = previous.next;
    previous.next = currentNode;
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
        this.length--;
        return this.printList();
    } else if(index == this.length - 1){
         previousNode = this.traverseToIndex(index - 1);
        this.tail = previousNode;
        
    }
    
    const targetNode = previousNode.next;
    previousNode.next = targetNode.next;

     this.length--;
     return this.printList();
        
    }
}

MyLinkedList = new LinkedList(1);

MyLinkedList.append(2);

MyLinkedList.append(3);
MyLinkedList.printList();
MyLinkedList.remove(0);
