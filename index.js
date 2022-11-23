let X = [-32, -56, 45, -3, 100, -98]
let Y = [23, 68, -45, -38, -1, 200]
let Z = []

for (let index in X) {
    if (X[index] > 0) {
        Z.push(X[index])
    }   
}

for (let index in Y) {
    if (Y[index] > 0) {
        Z.push(Y[index])
    }
}
console.log(Z);

let bigNumber = Z[0]


for (let index in Z) {
    if (bigNumber < Z[index]) {
        bigNumber = Z[index]
    }
}

console.log(bigNumber);

let numbers = [34, 44, 234, 54]
console.log(numbers.sort((a, b) => a - b))