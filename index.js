const Blockchain = require('./src/blockchain');
const Block = require('./src/block');

async function run() {
    const blockchain = await new Blockchain();
    
    let block1 = new Block({ data: 'Block # 1' });
    let block2 = new Block({ data: 'Block # 2' });
    let block3 = new Block({ data: 'Block # 3' });
    
    await blockchain.addBlock(block1);
    await blockchain.addBlock(block2);
    await blockchain.addBlock(block3);
    
    blockchain.print();

}

run();