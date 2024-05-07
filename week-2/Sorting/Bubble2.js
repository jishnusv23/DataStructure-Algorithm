function bubbleSort(arr){
    let swapp=true
    while(swapp){
        swapp=false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapp=true
            }
        }
    }
}
let arr=[2,3,67,76,3434,65,32]
bubbleSort(arr)
console.log(arr);