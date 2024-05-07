// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let key=arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>key){
//             arr[j+1]=arr[j]
//             j=j-1

        
//         }
//         arr[j+1]=key
//     }
// }
// let arr=[2,3,-4,78,87,89,98,-98]
// insertionSort(arr)
// console.log(arr);

function insertionSort(arr){
    let i=0
    while(i<arr.length){
        let key=arr[i]
        let j=i-1
        while (j>=0&&arr[j]>key) {
            arr[j+1]=arr[j]
            j=j-1


            
        }
        arr[j+1]=key
        i++
    }
}
let arr=[2,45,-89,-90,-78,67,-56,56]
insertionSort(arr)
console.log(arr);