class SLL {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    //flip the list
    flip() {
        if (this.head == null | this.head.next == null) return;
        
        var runner = this.head;
        var runner1 = runner.next;
        var runner2 = runner1.next;
        this.head.next = null;

        while (runner1 != null) {
            this.head = runner1;
            runner1.next = runner;
            if (!runner2) {
                console.log('end');
                return;
            }
            runner=runner1;
            runner1=runner2;
            runner2=runner2.next;                    
        } 

    }

    // nth to last
    nthlast(n) {
        if (this.head==null) return null;
        
        var current = this.head;
        var runner = current;

        if (n >= 1) {
            for (var i = 1;i<=n;i++) {
                runner = runner.next;
            }
        }
        while (runner.next != null) {
            current=current.next;
            runner=runner.next;
        }
        return current.data;
    }


    //iterate the linked list and print the value of every node
    display(){
        var runner = this.head;
        while (runner !== null) {
            console.log(runner.data);
            runner = runner.next;
        }
    }

    //if data is contained within the current list, remove it.
    //consider edge cases of head node, last node, and middle nodes
    delete(data) {
        var runner = this.head;
        var prev = null;

        if (runner !== null && runner.data == data) {
            this.head = runner.next;
            return;
        }

        while (runner && runner.data !== data) {
            prev = runner;
            runner = runner.next;
        }

        if (runner === null) {
            return;
        }
        //runner is now our node to be deleted
        prev.next = runner.next;
    }

    addToFront(node){
        if(this.isEmpty()){
            this.head = node;
            this.length++;
            return;
        };

        node.next = this.head;
        this.head = node;
        this.length++;
        return;
    }

    isEmpty(){
        if(this.head){
            return false;
        }
        return true;
    }

    addToBack(node){
        // create a runner at the head
        let runner = this.head;

        // check if the runner is null, meaning our list is headless
        if(runner === null){
            this.head = node;
            this.length++;
            return
        }

        // "10" == 10 yes
        // "10" === 10 no

        // start while looping
        while(runner){
            // check if the next node is null
            if(runner.next === null){
                // if so, add here and return
                runner.next = node;
                this.length++;
                return
            }
            // if not, advance runner
            runner = runner.next;
        }
    }

    contains(value){
        // start at the head
        var runner = this.head;

        // while we have a runner
        while(runner){

            // return true if data === value
            if(runner.data === value){
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }

        return false;
    }

    recursiveContains(current, value){
        // if you didn't pass current, current should be the head
        if(current === undefined) current = this.head;

        // if current is null, return false up the call stack
        if(current === null) return false;

        // if runner.data === value, return true up the call stack
        if(runner.data === value) return true;

        // otherwise return the result of contains for current.next
        return this.recursiveContains(current.next, value);
    }

    // remove and return the first node from the list or null
    removeHead(){
        if(this.isEmpty()) return null;

        var removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        this.length--;
        return removed;
    }

    // remove head and return the value of that node or null
    removeHeadValue(){
        if(this.isEmpty()) return null;

        var removed = this.head;
        this.head = this.head.next;
        this.length--;
        return removed.value;
    }

    // remove and return the last node from the list or null
    removeBack(){
        if(this.isEmpty()) return null;
        if(this.head.next === null){
            return this.removeHead();
        }
        var current = this.head.next;
        var prev = this.head;
        while(current){
            if(current.next === null){
                prev.next = null;
                this.length--;
                return current;
            }
            prev = current;
            current = current.next;
        }
    }

    // bonus challenge:
    // return the average of all values in an integer SLL
    average(){
        if(this.isEmpty())
            return null;
        let runner = this.head;
        let length = 0;
        let sum = 0;
        let avg = 0;
        while (runner !== null){
            sum += runner.data;//if sum triggers first you don't need to manually add it
            runner = runner.next;
            length++;
        }
        avg = sum / length;
        return avg;
    }
    // get the value of the middle node if there is one
    getMiddleData(){
        if(this.isEmpty())
            return null;
        if(this.head.next==null)
            return null;
        let doublerunner =this.head;
        let midreturnrunner =this.head;
        while(doublerunner){
            doublerunner=doublerunner.next.next;
            midreturnrunner=midreturnrunner.next;
            if(doublerunner==null)
                return null;
            if(doublerunner.next==null)
                return midreturnrunner;
        }
        return null;
    }

    count(){}
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var mySLL = new SLL();


mySLL.addToFront(new Node(7));


var myNewNode = new Node(6);
mySLL.addToFront(myNewNode);
mySLL.addToFront(new Node(5));
mySLL.addToFront(new Node(4));
mySLL.addToFront(new Node(3));
mySLL.addToFront(new Node(2));
mySLL.addToFront(new Node(1));


// var bool = mySLL.isEmpty();

// console.log(bool);

console.log(mySLL.nthlast(2));
mySLL.flip();
mySLL.display();