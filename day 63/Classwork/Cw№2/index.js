let arr = [true, "Giorgi", 11, false]

const randomItem = (arr) =>{
    return arr[Math.floor(Math.random() * arr.length)]
}

console.log(randomItem(arr))