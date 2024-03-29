class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    set(key, value){
      var hash = this._hash(key);
      this.data[hash] = value;
    }
    get(key){
      return this.data[this._hash(key)];
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000);
  console.log(myHashTable.get('grapes'));
  myHashTable.set('apples', 9);
  myHashTable.get('apples');