let shoppingCart = {
    პური: 2,
    რძე: 4,
    ყველი: 10,
    კვერცხი: 5
};

let sum = 0;

for (let i in shoppingCart){
    sum += shoppingCart[i];
};

console.log(sum)