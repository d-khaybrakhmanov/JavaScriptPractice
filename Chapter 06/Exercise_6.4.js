const myArr = [];

for (let x = 0; x < 10; x++) {
    let val1 = x * 5;
    let val2 = x * x;
    let res = cal(val1, val2, "+");
    myArr.push(res)
}
console.log(myArr);

function cal(a, b, op) {
    if (op == "-") {
        return a - b;
    } else {
        return a + b;
    }
}