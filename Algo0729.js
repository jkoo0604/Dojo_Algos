/**
 * Least Recently Used Cache
 * each cache has a capacity
 * when that capacity is reached, the least recently accessed key/value pair
 * must be flushed to add a new one
 * keep track of when things are accessed to determine when they should be flushed
 * adding, updating, or getting all count as accessing
 */

class LRUCache {
    constructor(capacity) {
      // your code here
        this.capacity = capacity;
        this.pairs = [];
    }

    /**
     * @param {string} key the key to find
     * returns either the value or -1 if not present
     */
    get(key) {
      // your code here
        let found = this.pairs.findIndex(pair => pair.hasOwnProperty(key))
        if (found === -1) {
            console.log(this.pairs)
            return -1
        } else {
            var foundObj = {...this.pairs[found]}
            this.pairs.splice(found, 1)
            this.pairs.push(foundObj);
        }
        console.log(this.pairs)
        return foundObj[key];
    }

    /**
     * @param {string} key the key connected to the value
     * @param {any} val the value to either add or update (if already present)
     */
    put(key, val) {
      // your code here
        var found = this.pairs.findIndex(pair => pair.hasOwnProperty(key))
        if (found === -1) {
            if (this.pairs.length >= this.capacity) {
                this.pairs.splice(0,1);
            }
            let obj = {};
            obj[key] = val;
            this.pairs.push(obj)
        } else {
            this.pairs[found][key] = val;
            var updatedObj = this.pairs[found]
            this.pairs.splice(found, 1) //splice returns the deleted element
            this.pairs.push(updatedObj);
        }
        // console.log('new array', this.pairs);
    }
  }
  
  const cache = new LRUCache(2); // new cache with capacity of 2
  
  cache.put('key1', 'val1');
  cache.put('key2', 'val2');
  cache.put('key3', 'val3');
  
  console.log(cache.get('key4')); // should log -1, not yet added
  console.log(cache.get('key1')); // should log -1, as it's been flushed
  
  console.log(cache.get('key3')); // should log 'val3'
  cache.put('key4', 'val4');
  
  console.log(cache.get('key2')); // should log -1, as it's been flushed
  console.log(cache.get('key4')); // should log 'val4'
  console.log(cache.get('key3')); 