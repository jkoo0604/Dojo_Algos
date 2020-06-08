// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT

// think of a stack of paper

// OPPOSITE of array (push adds to index 0 ; pop removes index 0 ; peek looks at this.head)

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class arrStack {
    constructor(items){
        if(!items) items = [];
        this.items = items;
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        if (this.items.length === 0){
            return true;
        }
        return false;
    }

    size() {
        return this.items.length;
    }

    print() {
        for(var item in this.items){
            console.log(item);
        }
    }
}

class slStack {
    constructor() {
        this.head = null;
    }

    push(node){
        var runner = this.head;
        if (this.head == null) {
            this.head = node;
        } else {
            while (runner != null) {
                runner = runner.next;
            }
            runner.next = node;
        }
    }

    pop(){
        var runner = this.head;
        var removed = this.head;
        if (this.head == null) {
            return null;
        } else {
            while (runner.next != null) {
                runner = runner.next;
            }
            removed = runner.next;
            runner.next = null;
            return removed;
        }
    } // return a node
    // break the reference .next === null

    peek(){
        var runner = this.head;
        if (this.head == null) {
            return null;
        } else {
            while (runner != null) {
                runner = runner.next;
            }
            return runner.data;
        }
    }

    isEmpty(){
        if (this.head == null) {
            return true;
        }
        return false;
    }
}

class slStack {
    constructor() {
        this.head = null;
    }

    // add to top (add new head)
    push(newNode) {
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // remove from top, (remove head)
    pop() {
        if (this.head === null) {
            return null;
        }

        const removed = this.head;
        this.head = this.head.next;
        removed.next = null;

        return removed;
    }

    // aka top
    peek() {
        return this.head ? this.head.data : null;
    }

    // check if empty
    isEmpty() {
        let isEmpty = this.head === null;
        return isEmpty;
    }
}