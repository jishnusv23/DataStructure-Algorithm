class Node{
    constructor(value){
        this.value=value
        this.prev=null
        this.next=null

    }

}

class Doublelist{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0

    }
    isEmpty(){
        return this.size===0

    }
    preppend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head.prev=node
            this.head=node
        }
        this.size++

    }
    Append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
        }
        this.size++

    }
    RemoveFirst(){
        if(this.isEmpty()){
            return null 
        }
        const value=this.head.value
        this.head=this.head.next
        this.size--
        return value

    }
    print(){
        if(this.isEmpty()){
            console.log("The list is empty");
        }else{
            let curnt=this.head
            let listValues=[]
            while(curnt){
                listValues.push(curnt.value)
                curnt=curnt.next
            }
            console.log(listValues);
        }
    }
}
const result=new Doublelist()
console.log(result.isEmpty());
result.preppend(30)
result.preppend(20)
result.preppend(10)
result.print()
result.Append(40)
result.print()