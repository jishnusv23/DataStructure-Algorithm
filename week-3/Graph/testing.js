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
    min(root){
        if(!root.right){
            return root.value
        }else{
            return this.min(root.right)
        }
    }
    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(!root) return root

        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
            
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left&&!root.right){
                return null
            }else if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }

    
    search(root,value){
        if(!root){
            return false
        }
        if(root.value===value){
            return true
        }else if(value<root.value){
           return this.search(root.left,value)
        }else{
          return  this.search(root.right,value)
        }
    }
}