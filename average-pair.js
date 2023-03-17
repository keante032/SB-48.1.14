/**
 * The function relies on the fact that the array is sorted
 *  to calculate the running average of every two numbers.
 *  It does this by putting one pointer at the start of the
 *  array and one pointer at the end of the array.
 *
 *  At each point, if the average is less than the target num, we have to
 *  move the left pointer up, while the right can stay put. Otherwise if
 *  the average is greater than the sum, we move the right pointer down.
 *
 *  The function ends either when we've found the correct average, or
 *  the pointers have crossed paths (i.e. when the start is greater than the end),
 *  at which point we can conclude there is no truthy answer.
 */
function averagePair(arr, num) {
    let l = 0; // left pointer
    let r = arr.length - 1; // right pointer

    while (l < r) {
        let avg = (arr[l] + arr[r]) / 2;
        if (avg === num) {
            return true;
        } else if (avg < num) {
            l++;
        } else {
            r--;
        }
    }
    return false;
}

module.exports = averagePair;