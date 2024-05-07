class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) {
    return root;
  }

  if (p.value < root.value && q.value < root.value) {
    return lowestCommonAncestor(root.left, p, q) 
  } else if (p.value > root.value && q.value > root.value) {
    return lowestCommonAncestor(root.right, p, q)
  } else {
    return root
  }
}

const bstRoot = new TreeNode(6)
bstRoot.left = new TreeNode(2)
bstRoot.right = new TreeNode(8)
bstRoot.left.left = new TreeNode(0)
bstRoot.left.right = new TreeNode(4)
bstRoot.right.left = new TreeNode(7)
bstRoot.right.right = new TreeNode(9)

const node1 = bstRoot.right.left;

const node2 = bstRoot.right.right

const lcaNode = lowestCommonAncestor(bstRoot, node1, node2);
console.log("Lowest Common Ancestor:", lcaNode.value);
