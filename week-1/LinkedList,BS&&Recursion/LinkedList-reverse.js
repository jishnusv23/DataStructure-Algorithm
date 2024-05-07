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
    reverse(){
        let prev=null
        let currnt=this.head
        while(currnt){
            let next=currnt.next
            currnt.next=prev
            prev=currnt
            currnt=next
        }
        this.head=prev
    }
    print(){
        if(this.isEmpty()){
            console.log('The List Is Empty');
        }else{
            let currnt=this.head
            let listValues=[]
            while(currnt){
                listValues.push(currnt.value)
                currnt=currnt.next
            }
            console.log(listValues);
        }
    }
}
let result=new LinkedList()
console.log(result.isEmpty());
result.Add(30)
result.Add(20)
result.Add(10)
result.print()
result.reverse()
result.print()