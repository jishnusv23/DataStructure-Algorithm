class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
        Search(root,value){
            if(!root){
                return false
            }else{
                if(root.value===value){
                    return true
                }else if(value<root.value){
                   return  this.Search(root.left,value)
                }else{
                   return this.Search(root.right,value)
                }
            }


        }
        PostOrder(root){
            if(root){
                this.InOrder(root.left)
                this.InOrder(root.right)
                console.log(root.value);
            }
        }
        LevelOrder(){
            const queue=[]
            queue.push(this.root)
            while (queue.length) {
                let curr=queue.shift()
                console.log(curr.value);
                if(curr.left){
                    queue.push(curr.left)
                }
                if(curr.right){
                    queue.push(curr.right)
                }
                
            }
        }
        delete(value){
            this.root=this.deleteNode(this.root,value)
        }
        deleteNode(root,value){
            if(root===null){
                return null
            }
            if(value<root.value){
               root.left= this.deleteNode(root.left,value)
            }else if(value>root.value){
                root.right=this.deleteNode(root.right,value)
            }else{
                if(!root.left&&!root.right){
                    return null
                }else if(!root.left){
                    return root.right
                }else if(!root.right){
                    return root.right
                }
                root.value=this.min(root.right)
                root.right=this.deleteNode(root.right,root.value)
            }
            return root
        }
}

const tree=new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(7)
console.log(tree.Search(tree.root,5))
// tree.InOrder(tree.root)
tree.delete(3)
tree.LevelOrder()