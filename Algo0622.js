class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}



// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
//                                         x
// [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
//                       x
// [14, 15, 16, 17, 18]
//          x

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty(){
    };

    insert(node, tree){
        if(tree === undefined){
            tree = this.root;
        }
    };

    getLargestFromSubtree(tree){
        if(tree === undefined){
            tree = this.root;
        }

        // ... cont
    }

    getSmallestFromSubtree(tree){
    }
}

// https://www.cs.usfca.edu/~galles/visualization/BST.html




class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}



// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
//                                         x
// [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
//                       x
// [14, 15, 16, 17, 18]
//          x

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty(){
    };

    // BST.insert(new BSTNode(125));
    insert(node, tree){
        if(tree === undefined){
            tree = this.root;
        };

        if(tree === null){
            this.root = node;
            return;
        };
        // 150

        // go left
        if(tree.val > node.val){
            // check if null and add
            if(tree.left === null){
                tree.left = node;
                return;
            }else{
                // else recurse left
                return this.insert(node, tree.left);
            }
        // else go right
        }else if(tree.val < node.val){
            // check if null and add
            if(tree.right === null){
                tree.right = node;
                return;
            }else{
                // else recurse right
                return this.insert(node, tree.right);
            }
        }
    };

    getLargestFromSubtree(tree){
        if(tree === undefined){
            tree = this.root;
        }

        // ... cont
    }

    getSmallestFromSubtree(tree){
        // if no tree, tree is root
        if(tree === undefined){
            tree = this.root;
        }

        // if tree becomes null, return null
        if(tree === null){
            return null;
        }

        // if there is no further nodes, return tree
        if(tree.left === null){
            return tree;
        }

        // else recurse to the left and try again
        return this.getSmallestFromSubtree(tree.left);
    }
}

// https://www.cs.usfca.edu/~galles/visualization/BST.html