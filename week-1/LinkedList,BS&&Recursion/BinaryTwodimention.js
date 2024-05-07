function binarysearch(arr,target){
    let left=0,rigth=arr.length-1
    while(left<=rigth){
    let midd=Math.floor((left+rigth)/2)
    if(target===arr[midd]){
        return midd
    }

    if(target<arr[midd]){
        rigth=midd-1
    }else{
        left=midd+1
    }
}

    return -1
}
let matrix = [
    [1,   2,  3, 4, 5],
    [6,   7,  8, 9, 10],
    [11,   12,  13, 14, 15],
   
]

console.log(binarysearch(matrix,10));