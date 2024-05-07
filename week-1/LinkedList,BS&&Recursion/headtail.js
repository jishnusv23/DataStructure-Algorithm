class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0

    }
    isEmpty(){
        return this.size==0

    }
    Prepend(value){
        const node =new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
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
            this.tail=node
        }
        this.size++
    }

    Remvefromfront(){
        if(this.isEmpty()){
            return null
        }else{
            const value=this.head.value
            this.head=this.head.next
            this.size--
            return value
        }

    }
    RemovefromEnd(){
        if(this.isEmpty()){
            return null

        }
        const value=this.head.value
        if(this.size===1){
            this.head=null
            this.tail=null

        }else{
            let prev=this.head
            while(prev.next!==this.tail){
                prev=prev.next
            }
            prev.next=null
            this.tail=prev
        }

        this.size--
        return value
    }
    print(){
        if(this.isEmpty()){
            console.log('List Is Empty');
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

const result=new LinkedList()
console.log(result.isEmpty());
// result.Prepend(3)
// result.Prepend(4)
// result.Prepend(5)
result.Append(2)
result.Append(3)
result.Append(4)
result.Prepend(1)
result.print()
result.Remvefromfront()
result.RemovefromEnd()
result.print()