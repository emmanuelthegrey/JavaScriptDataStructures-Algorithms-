class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        if(this.data[index])
            return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
    }

    pop(){
        if(this.length > 0){
            this.data[this.length - 1] = null;
            this.length--;
        }
       
    }
    

}

const newArray = new MyArray();
newArray.push(1);
console.log(newArray);
newArray.pop()
console.log(newArray);