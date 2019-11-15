class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if(newNode.value >= currentNode.value){
                    //GO TO THE RIGHT
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }else{
                        currentNode = currentNode.right;
                    }
                }else if(newNode.value < currentNode.value){
                    //Go Left the
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }else{
                        currentNode = currentNode.left;
                    }
                }
            }

        }
    }

    lookup(value) {
        let currentNode = this.root

        while(true){

            if(currentNode.value === value){
                return currentNode;
            }else if(value >= currentNode.value){
                if(currentNode.right){
                    currentNode = currentNode.right;
                }else{
                    return null;
                }
            }else if(value < currentNode.value){
                if(currentNode.left){
                    currentNode = currentNode.left;
                }else{
                    return null;
                }
            }else{
                return null;
            }
        }
    }
    remove(value) {

    }
}

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }

let bt = new BinarySearchTree();
bt.insert(12);
bt.insert(6);
bt.insert(23);
bt.insert(9);
bt.insert(10);
bt.insert(17);

console.log(bt.lookup(17));
