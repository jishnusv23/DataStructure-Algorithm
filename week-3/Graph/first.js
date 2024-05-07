class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
  hieght() {
    return this.getHeight(this.root);
  }
  getHeight(node) {
    if (!node) {
      return -1
    }
    let lefthegiht = this.getHeight(node.left);
    let rightHeight = this.getHeight(node.right);
    return Math.max(lefthegiht, rightHeight) + 1;
  }
  PreOrder(root) {
    if (root) {
      console.log(root.value);
      this.PreOrder(root.left);
      this.PreOrder(root.right);
    }
  }
  InOrder(root) {
    if (root) {
      this.InOrder(root.left);
      console.log(root.value);
      this.InOrder(root.right);
    }
  }
  PostOrder(root) {
    if (root) {
      this.PostOrder(root.left);
      this.PostOrder(root.right);
      console.log(root.value);
    }
  }
  leveOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
  FindLCA(root, num1, num2) {
    if (!root) {
      return null;
    }
    if (min < root.value && max < root.value) {
      return this.FindLCA(root.left, num1, num2);
    }
    if (min > root.value && max > root.value) {
      return this.FindLCA(root.right, num1, num2);
    }
    return root;
  }
  validBST(rooot){
    return this.isValidBST(rooot,-Infinity,Infinity)
  }
  isValidBST(root,min,max){
    if(!root){
      return false
    }
    if(min>=root.value||max<root.value){
      return false
    }
    return this.isValidBST(root.left,min,root.value)&&this.isValidBST(root.right,root.value,max)
  }
  sumNode(root) {
    if (root === null) {
      return 0;
    }
    return root.value + this.sumNode(root.left) + this.sumNode(root.right);
  }
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}
const tree = new Tree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(11);

tree.insert(3);
tree.insert(2);
tree.insert(7);
// tree.PostOrder(tree.root);
// console.log(tree.min(tree.root));

// tree.leveOrder();
// console.log('first');
// tree.delete(10);
// tree.leveOrder();
// console.log(tree.hieght());
// Find the Lowest Common Ancestor of nodes with values 2 and 7
const min = 2; // The value of the first node
const max = 7; // The value of the second node

// Call the FindLCA function and pass the root of the tree, and the two values
// const lcaNode = tree.FindLCA(tree.root, min, max);

// Check if the LCA was found and print its value
// if (lcaNode !== null) {
//   console.log(`The Lowest Common Ancestor of nodes with values ${min} and ${max} is: ${lcaNode.value}`);
// } else {
//   console.log(`No LCA found for nodes with values ${min} and ${max}.`);
// }


// console.log(tree.search(tree.root, 15));
// console.log(tree.search(tree.root, 29));

// console.log("Tree is empty? " + tree.isEmpty());
