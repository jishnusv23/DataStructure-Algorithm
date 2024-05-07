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
    RemoveMiddle(){
        if(!this.head||!this.head.next){
            return null
        }
        let slow=this.head
        let fast=this.head 
        let prev=null
        while(fast&&fast.next){
            prev=slow
            slow=slow.next
            fast=fast.next.next
        }
        prev.next=slow.next
        this.size--

    }
    print(){
        let curnt=this.head
        let listValue=[]
        while(curnt){
            listValue.push(curnt.value)
            curnt=curnt.next
        }
        console.log(listValue);
    }
}
let result=new LinkedList()
console.log(result.isEmpty())
result.Add(3)
result.Add(4)
result.Add(5)
result.print()
result.RemoveMiddle()
result.print()