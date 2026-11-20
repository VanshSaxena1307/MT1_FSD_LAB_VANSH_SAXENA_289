//Implement a custom map() function without using the built-in map() method


function mAp(arr, callback) {
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        ans.push(callback(arr[i], i, arr));
    }

    return ans;
}

let numbers = [1, 2, 3, 4, 5];

let squared = mAp(numbers, function(num) {
    return num * num;
});

console.log(squared);
