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
    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i=0
        let curnt=this.head
        while(curnt){
            if(curnt.value===value){
                return i
            }
            curnt=curnt.next
            i++
        }
        return -1
    }
    print(){
         if(this.isEmpty()){
            console.log('The List was Empty');
         }else{
            let currnt=this.head
            let listValue=[]
            while(currnt){
                listValue.push(currnt.value)
                currnt=currnt.next
            }
            console.log(listValue);
         }

    }
}
const result=new LinkedList()
console.log(result.isEmpty());
result.Add(39)
result.Add(45)
console.log(result.search(39));
result0.print()