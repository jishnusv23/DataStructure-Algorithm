class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else {
        // console.log(node.value);
      this.insertNode(this.root,node);
    }
  }

  insertNode(root,node) {
    // console.log(root.value);
    if (node.value<root.value) {
      if (root.left ===null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }
  
  Inorder(root=this.root) {
    if(!root) return
    

    this.Inorder(root.left);
    console.log(root.value);
    this.Inorder(root.right);
  }
}
const bst=new BST()
bst.insert(10)
bst.insert(5)
bst.insert(8)
bst.insert(4)
bst.insert(7)
bst.Inorder()