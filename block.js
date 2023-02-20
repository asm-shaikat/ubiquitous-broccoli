const { Genesis } = require("./Config");
class Block{
    constructor({timestamp, previousHash, Hash ,data}){
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.Hash = Hash;
        this.data = data;
    }
    static genesis(){
        return new this(Genesis);
    }

}

const f1 = new Block({
    timestamp: '2/21/2023',
    previousHash:'0xaabb',
    Hash:'0xabz3',
    data:'Hello World'
});
const f2 = new Block({
    timestamp: '2/21/2023',
    previousHash: '0xabz3',
    Hash : '0xabd3',
    data : 'I am World'
});
console.log(Block.genesis());
console.log(f1);
console.log(f2);
