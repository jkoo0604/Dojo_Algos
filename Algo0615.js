// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // == Main Methods ==

    // push to head
    addHead(node){
        if(this.head == null){
            this.head = node;
            this.tail = node;
        }else{
            var temp = this.head;
            temp.prev = node;
            this.head =node;
            node.next = temp;

        }
        node.prev = null;
        this.length++;
    }

    // pop from tail
    removeTail(){
        if(this.head == null) return;
        var temp= this.tail;
        this.tail = temp.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length--;

    }

    // add before target if exists
    prepend(target, node){
        var runner = this.head;
        while(runner.data != target){
            runner = runner.next;
            if(runner == null) return;
        }
        current.prev.next = node;
        node.prev = runner.prev;
        runner.prev = node;
        node.next = runner;
        this.length++;
    }

    // boolean, is empty
    isEmpty(){
        if(this.head == null) return true;
        return false;
    }

    // return length
    size(){
        return this.length;
    }



    // == Challenge Question ==

    // implement recursive prepend that starts from this.head or current
    recursivePrepend(target, node, current){
        if(current == null){
            return;
        }
        if(current.data == target){
          console.log("Inside: " + current.data);
          if(current.prev != null){
            current.prev.next = node;
          }
          if(current.prev == null){
            this.head = node;
          }
            node.prev = current.prev;
            current.prev = node;
            node.next = current;
            console.log("Printing nodes");
            this.printNodes();
            this.length++;
            return;
        }
        current = current.next;
        this.recursivePrepend(target, node, current);
    }

    //Print all nodes
    printNodes(){
        var runner = this.head;
        while(runner != null){
            console.log(runner.data);
            runner = runner.next;
        }
    }



    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node){
        if(this.isEmpty){
            this.addHead(node);
        }else{
            this.tail.next= node;
            node.prev = this.tail;
            node.next = null;
            this.tail= node;
            length++;
        }
    }

    // add after target if exists
    append(target, node){
        var runner = this.head;
        while(runner.data != target){
            runner = runner.next;
            if(runner == null) return;
        }
        if(runner.next != null){
            runner.next.prev = node;
        }
        node.next = runner.next;
        runner.next = node;
        node.prev = runner;
        this.length++;
    }

    // pop from head
    removeHead(){
        var temp = this.head;
        this.head.next.prev = null;
        this.head = this.head.next;
        length--;
        return temp;
    }
}

// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

var dll = new DLList();
dll.addHead(new DLLNode(1));
dll.addHead(new DLLNode(2));
dll.addHead(new DLLNode(3));

dll.printNodes();

dll.recursivePrepend(99, new DLLNode(10), dll.head);

dll.printNodes();




// instructor
// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // == Main Methods ==

    // push to head
    addHead(node){
        if(!this.head){
            this.head = node;
            this.tail = node;
            this.length++;
        }else{
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
            this.length++;
        }
    }

    // pop from tail
    removeTail(){}

    // add before target if exists, both nodes

    // needs head node edge case refactor
    prepend(target, node){
        var runner = this.head;
        while(runner){
            if(runner === target){
                node.next = runner;
                node.prev = runner.prev;
                runner.prev.next = node;
                runner.prev = node;
                this.length++;
                if(runner === this.head){
                    this.head = node;
                }
                return true;
            }else{
                runner = runner.next;
            }
        }
        return false;
    }

















    // add before target node with data
    prependData(target, data){
        var node = new DLLNode(data);
        var runner = this.head;
        while(runner){
            if(runner === target){
                node.next = runner;
                node.prev = runner.prev;
                runner.prev.next = node;
                runner.prev = node;
                this.length++;
                if(runner === this.head){
                    this.head = node;
                }
            }else{
                runner = runner.next;
            }
        }
    }

    // add before node with data === val, create a new node with data
    prependDataBeforeVal(val, data){
        var node = new DLLNode(data);
        var runner = this.head;
        while(runner){
            if(runner.data === val){
                node.next = runner;
                node.prev = runner.prev;
                runner.prev.next = node;
                runner.prev = node;
                this.length++;
                if(runner === this.head){
                    this.head = node;
                }
            }else{
                runner = runner.next;
            }
        }
    }



    // boolean, is empty
    isEmpty(){

    }

    // return length
    size(){}



    // == Challenge Question ==

    // implement recursive prepend that starts from this.head or current

    // not moving .head properly
    recursivePrepend(target, node, current){
        if(current === undefined){
            current = this.head;
        }

        if(current === null){
            return false;
        }

        if(current === target){
            node.next = current;
            node.prev = current.prev;
            current.prev.next = node;
            current.prev = node;
            return true;
        }

        return this.recursivePrepend(target, node, current.next);
    }




    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node){}

    // add after target if exists
    append(target, node){}

    // pop from head
    removeHead(){}
}

// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}