class Node{
    constructor(value){
        this.value=value
        this.next=null

    }
}

class Linkedlist{
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

    deleteForm(index){
        if(index<0||index>this.size){
            return null
        }
        let removedNode

        if(index==0){
            removedNode=this.head
            this.head=this.head.next


        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next

            }
            removedNode=prev.next
            prev.next=removedNode.next

        }
        this.size--
        return removedNode.value
    }
    print(){
        if(this.isEmpty()){
            console.log('The linked list is empty ');
        }else{
            let curr=this.head
            let listValue=[]
            while(curr){
                listValue.push(curr.value)
                curr=curr.next
            }
            console.log(listValue);
        }
    }
}
const result=new Linkedlist()
console.log(result.isEmpty());
result.Add(45)
result.Add(49)
result.print()

result.deleteForm(1)
result.print()