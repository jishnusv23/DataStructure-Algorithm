BinarySearchTree.prototype.height = function () {
  if (this.right === null && this.left === null) return 1;
  var heightLeft = 0;
  var heightRight = 0;
  if (this.left != null) heightLeft = this.height(this.left);
  if (this.right != null) heightRight = this.height(this.right);
  if (heightLeft > heightRight) {
    return heightLeft + 1;
  } else {
    return heightRight + 1;
  }
};

// Create a new BST
const bst = new BST();

// Insert some values
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(12);
bst.insert(17);

// Print the height of the tree
console.log(bst.height()); // Output: 3
