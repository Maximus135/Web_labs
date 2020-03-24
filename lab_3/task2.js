// встроенная функция call
function sum() {
    return this.reduce((a, v) => a + v, 0);
}
console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));