function createCounter() {
    let currentCounter = 1;
    return () => {
        return currentCounter++;
    };
}

const count = createCounter();

count(); // 1
count(); // 2
count(); // 3
count(); // 4

console.log(count()); // 5