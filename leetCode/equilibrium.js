

function equilibrium(arr, n) {
    var i, j;
    var leftsum, rightsum;

    /*Check for indexes one by one until
    an equilibrium index is found*/
    for (i = 0; i < n; ++i) {

        /*get left sum*/
        leftsum = 0;
        for (let j = 0; j < i; j++)
            leftsum += arr[j];

        /*get right sum*/
        rightsum = 0;
        for (let j = i + 1; j < n; j++)
            rightsum += arr[j];

        /*if leftsum and rightsum are same,
        then we are done*/
        if (leftsum == rightsum)
            return i;
    }

    /* return -1 if no equilibrium index is found*/
    return -1;
}
// Driver code

var arr = new Array(-7, 1, 5, 2, -4, 3, 0);
n = arr.length;
document.write(equilibrium(arr, n));

// This code is contributed by simranarora5sos

