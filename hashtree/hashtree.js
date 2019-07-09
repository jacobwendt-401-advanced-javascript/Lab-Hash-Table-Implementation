const HashTable = require('./Hashtable')


const hashtree = (treeA, treeB) => {
  let values1 = treeA.preorder();
  let values2 = treeB.preorder();
  let result = new HashTable();

  values1.forEach(value => {
    if (values2.includes(value)) {
      result.add(value, value);
    }
  });
  return(result);
};

module.exports = hashtree;

