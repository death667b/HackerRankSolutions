const input1 = `6
3
5
4
7
2
1`;
// Expected Output - 3 2 5 1 4 7 

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
};

function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };

    this.levelOrder = function(root) {
        let queue = new Array();
        if (root !== null) {
            queue.push(root);
            
            while (queue.length > 0) {
                let node = queue.shift();
                process.stdout.write(node.data + " ");

                if (node.left !== null) queue.push(node.left);
                if (node.right !== null) queue.push(node.right);
            }
        }
        process.stdout.write('\n');
    };
};

function mainProgram(input) {
    let tree = new BinarySearchTree();
    let root = null;
    
    let values = input.split('\n').map(Number);
    
    for (let i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    
    tree.levelOrder(root);
}

mainProgram(input1);