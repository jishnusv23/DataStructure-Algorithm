// function binarysearch(arr,target){

//     let left=0,riight=arr.length-1
//     while(left<=riight){
//         let midd=Math.floor((left+riight)/2)

//         if(target===arr[midd]){
//             return midd

//         }
//         if(target<arr[midd]){
//             riight=midd-1
//         }else{
//             left=midd+1
//         }

//     }
//     return -1

// }
// let arr=[3,2,4,5,7,6,8,1]
// let sort = arr.toSorted();
// console.log(sort);
// console.log(binarysearch(sort, 1));

// function binarysearch(arr,target){
//     let sort = arr.toSorted();
//     let left=0
//     let right=sort.length-1
//     while(left<=right){
//         let midd=Math.floor((left+right)/2)
//         if(target===sort[midd]){
//             return midd
//         }
//         if(target<sort[midd]){
//             right=midd-1
//         }else{
//             left=midd+1
//         }

//     }
//     return -1

// }
// let arr=[2,1,4,3,6,5,9,7]

// console.log(binarysearch(arr,19));

function binarysearch(arr,target){
    let left=0
    let right=arr.length-1
    while (left<=right) {
        let midd=Math.floor((left+right)/2)
        if(target===arr[midd]){
            return midd
        }
        if(target<arr[midd]){
            right=midd-1
        }else{
            left=midd+1
        }
    }
}
console.log(binarysearch([2,3,4,5,6,7],3));

// function Rbinary(arr,target){
//     return search(arr,target,left=0,rigth=arr.length-1)
// }

// function search(arr,target,left,right){
//     let midd=Math.floor((left+right)/2)
//     if(target===arr[midd]){
//         return midd
//     }
//     if(target<arr[midd]){
//     return search(arr,target,left,right-1)
//     }else{
//     return search(arr,target,left+1,right)
//     }
// }
// console.log(Rbinary([2,3,4,5,6,7],6));
