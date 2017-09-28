const input1 = `7
3
5
2
1
4
6
7`;
// Expected Output - 3

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

    this.getHeight = function(root) {
        let leftNode = 0, rightNode = 0;
        if (!root) return -1;
        if (root.left) leftNode = 1 + this.getHeight(root.left);
        if (root.right) rightNode = 1 + this.getHeight(root.right);

        return Math.max(leftNode, rightNode);
    };
};

function mainProgram(input) {
    let tree = new BinarySearchTree();
    let root = null;
    
    let values = input.split('\n').map(Number);
    
    for (let i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    
    console.log(tree.getHeight(root));
}

mainProgram(input1);