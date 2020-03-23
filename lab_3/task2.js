let sum = {
    call: function(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    },
};
console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));