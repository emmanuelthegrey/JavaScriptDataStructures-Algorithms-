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
        const newNode = new Node(value);
        if (this.root === null) this.root = newNode;
        else {
            let currentNode = this.root;

            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left
                }
                else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right
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
        if(!this.root) return null;
        let currentNode = this.root;
        let parentNode = null;

        while(currentNode){
            if(value < currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.left;
            }else if(value > currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.right;
            }else if (currentNode.value === value){

                if(currentNode.right === null){
                   if(parentNode === null){
                       this.root = currentNode.left
                   }else{
                       if(currentNode.value < parentNode.value){
                           parentNode.left = currentNode.left;
                       }else if(currentNode.value > parentNode.value){
                           parentNode.right = currentNode.left;
                       }
                   }
                }else if(currentNode.right.left === null){
                    if(parentNode === null)
                    parentNode.right = currentNode.right;
                }
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);

tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log("Lookup return = " + JSON.stringify(traverse(tree.lookup(20))));
console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
