class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack { // FILO
    constructor() {
        this.head = null;
    }

    push(newNode) {
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    pop() {
        if (this.head === null) {
            return null;
        }

        const removed = this.head;
        this.head = this.head.next;
        removed.next = null;

        return removed;
    }

    peek() {
        return this.head ? this.head.data : null;
    }

    isEmpty() {
        let isEmpty = this.head === null;
        return isEmpty;
    }
}

class Queue { // FIFO
    constructor() {
        this.front = null;
        this.rear = null;
    }

    // return true or false if a given queue is equal to this queue
    // restore the queues back to their original state
    compareQueues(queue){
        var queue1 = new Queue();
        var queue2 = new Queue();
        let compare = true;
        

        while(!this.isEmpty()){
            var tempNode1 = this.dequeue();
            queue1.enqueue(tempNode1);

            var tempNode2 = queue.dequeue();
            queue2.enqueue(tempNode2);

            if (tempData1.data != tempdata2.data) {
                compare = false;
            }
        }

        if (!queue.isEmpty()) {
            compare = false;
            while(!queue.isEmpty()) {
                queue2.enqueue(queue.dequeue());
            }
        }
    
        while(!queue1.isEmpty()){
            this.enqueue(queue1.dequeue());
            queue.enqueue(queue2.dequeue());
        }

        if (!queue2.isEmpty()) {
            while(!queue2.isEmpty()) {
                queue.enqueue(queue2.dequeue());
            }
        }
    
        return compare;
    }



    // return true or false  if this queue is a palindrome.
    // palindromes are strings that are equal when the order is reversed

    // racecar = racecar, true
    // tacocat = tacocat, true
    // brendan = nadnerb, false

    // you may only use 1 stack for additional storage, no arrays or objects
    queueIsPalindrome(){

        var tempQueue = new Queue();
        var tempStack = new Stack();
        let compare = true; 

        while (!this.isEmpty()) {
            var tempNode = this.dequeue();
            tempQueue.enqueue(tempNode);
            tempStack.push(tempNode);
        }

        while (!tempQueue.isEmpty()) {
            if (tempQueue.checkFront() != tempStack.peek()) {
                compare = false;
            }
            this.enqueue(tempQueue.dequeue());
            tempStack.pop();
        }

        return compare;

        // queue: remove head, add to tail
        // stack: remove head, add to front
        // queue.checkFront: return data of head
        // stack.peek: return data of head
    }

    enqueue(node){
        if(this.rear === null){
            this.rear = node;
            this.front = node;
        }else{
            this.rear.next = node;
            this.rear = node;
        }
    }
    dequeue(){
        if(this.front === null){
            return null;
        };
        if(this.front === this.rear){
            this.rear = null;
        };
        let node = this.front;
        this.front = node.next;
        node.next = null;
        return node;
    }
    checkFront(){
        return this.front ? this.front.data : null;
    }
    isEmpty(){
        return this.front === null;
    }
}

// BONUS: implement a minStack.

// min stacks keep track of the minimum value in a numerical stack
// this is done by not only keeping track of the head, but also an array
// of pointers.

// in order to successfully implement a minStack, you will need to modify push and pop
class minStack{
    constructor(){
        this.head = null;
        this.mins = [];
    }

    push(newNode) {
        if (this.head === null) {
            this.head = newNode;
            this.mins[0] = newNode.data;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            if (newNode.data < this.min()) {
                this.mins.push(newNode.data);
            }
        }
    }

    pop() {
        if (this.head === null) {
            return null;
        }

        const removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        // if there are multiple nodes with same (minimum) values???
        return removed;
    }
    peek() {
        return this.head ? this.head.data : null;
    }

    isEmpty() {
        let isEmpty = this.head === null;
        return isEmpty;
    }

    min() { // should not iterate
        if (this.mins.length === 0) {
            return null;
        }
        return this.mins[this.mins.length-1];
    }
}