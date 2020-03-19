//HashFunction
function hash(string, max) {
    var hash = 17;
    for (let i = 0; i < string.length; i++){
        hash += string.charCodeAt(i);
    }
    return hash % max;
}

class HashTable {
    constructor() {
        let storage = []; //Store All the data being kept in the arr
        const storageLimit = 14 // Amount of Bucket in the arr;
        this.print = function () {
            console.log(storage);
        };
        this.add = function (key, value) {
            var index = hash(key, storageLimit);
            if (storage[index] === undefined) {
                storage[index] = [
                    [key, value]
                ];
            }
            else {
                var inserted = false;
                for (var i = 0; i < storage[index].length; i++) {
                    if (storage[index][i][0] === key) {
                        storage[index][i][1] = value;
                        inserted = true;
                    }
                }
                if (inserted === false) {
                    storage[index].push([key, value]);
                }
            }
        };

        this.remove = function(key) {
            var index = hash(key, storageLimit);
            if (storage[index].length === 1 && storage[index][0][0] === key) {
              delete storage[index];
            } else {
              for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                  delete storage[index][i];
                }
              }
            }
          };
        
          this.lookup = function(key) {
            var index = hash(key, storageLimit);
            if (storage[index] === undefined) {
              return undefined;
            } else {
              for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                  return storage[index][i][1];
                }
              }
            }
          };
    }
}

let ht = new HashTable();
ht.add('beau', 'person');
console.log(ht)

console.log(hash("adedeji", 10));
console.log(hash("ade", 10));

