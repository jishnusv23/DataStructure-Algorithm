class Node{
    constructor(value){

        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0

    }
    isEmpty(){
        return this.size===0

    }
    getsize(){
        return this.size
    }
    Add(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++

    }
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value===value){
             this.head=this.head.next
             this.size--
            return value
        }else{
            let prev=this.head
            while(prev.next&&prev.next.value!==value){
                prev=prev.next
            }   
            if(prev.next){
                const removedNode=prev.next
                prev.next=removedNode.next
                this.size--
                return value

            }
            return null
        }
         
    }
    
    print(){
        if(this.isEmpty()){
            console.log('List is Empty ');
        }else{
            let current=this.head
            let listValue=[]
            while(current){
                listValue.push(current.value)
                current=current.next
            }
            console.log(listValue);
        }
    }
}
const result=new LinkedList()
console.log(result.isEmpty());
result.Add(34)
result.Add(45)
result.print()
result.removeValue(45)
result.print()