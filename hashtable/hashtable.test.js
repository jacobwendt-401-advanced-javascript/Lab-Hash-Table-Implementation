const HashTable = require('./hashtable');

describe('Hashtable', () => {
  it('can make a hash table', () => {
    let chess = new HashTable();

    chess.add('Jacob', 'King');
    chess.add('Floyd', 'Bishop');
    chess.add('Michele', 'Pawn');
    chess.add('Skylar', 'Rook');
    chess.add('Rory', 'Rook');
    chess.add('Austin', 'Knight');
    chess.add('Ian', 'Pawn');
    chess.add('Craig', 'Pawn');
    chess.add('Keith', 'Knight');

    expect(chess).toBeDefined();
  });
  it('add a node', () => {
    let chess = new HashTable();

    chess.add('Jacob', 'King');
    chess.add('Floyd', 'Bishop');
    chess.add('Michele', 'Pawn');
    chess.add('Skylar', 'Rook');
    chess.add('Rory', 'Rook');
    chess.add('Austin', 'Knight');
    chess.add('Ian', 'Pawn');
    chess.add('Craig', 'Pawn');
    chess.add('Keith', 'Knight');

    chess.add('Eugene', 'Pawn');

    expect(chess.lookup('Eugene')).toBeDefined();
    expect(chess.lookup('Eugene')).toBe('Pawn');
    expect(chess.lookup('Craig')).not.toBe('King'||'Rook'||'Bishop'||'Queen'||'Knight');
  });
});