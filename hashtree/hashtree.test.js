const Tree = require('../tree/tree');
const hashTree = require('./hashtree');

describe('Hashtree', () => {
  it('return duplicates', () => {
    let treeA = new Tree();
    let treeB = new Tree();

    treeA.insert(5);
    treeA.insert(26);
    treeA.insert(8);
    treeA.insert(24);
    treeA.insert(86);
    treeA.insert(47);
    treeA.insert(89);
    treeA.insert(70);

    treeB.insert(5);
    treeB.insert(2);
    treeB.insert(899);
    treeB.insert(24);
    treeB.insert(18);
    treeB.insert(47);
    treeB.insert(8);
    treeB.insert(7);

    let dupes = hashTree(treeA, treeB);

    expect(dupes).toBeDefined()
  });
});