function Recursive(arr,target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,left,right){

    const midd=Math.floor((left+right)/2)
    if(target===arr[midd]){
        return midd
    }

    if(target<arr[midd]){
        return search(arr,target,left,midd-1)
    }else{
        return search(arr,target,midd+1,right)
    }
}
console.log(Recursive([4,5,6,7,8,10],10));