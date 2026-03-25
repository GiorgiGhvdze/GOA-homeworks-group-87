

let arr1 = [1,2,3,4,5,6,7]
let arr2 = ["asd", "123a", "112323a", "125453453a", "123a65465"]


console.log(arr1.length) // .length - მეთოდი აბრუნებს მასივში ელემენტების რაოდენობას
console.log(arr2.length)



console.log(arr1.join(", ")) // .join() - მეთოდი აერთებს მასივის ელემენტებს მითითებული გამყოფით
console.log(arr2.join("-"))



console.log(arr1.toString()) // .toString() - მეთოდი გადააქცევს მასივს სტრინგად და გამოყომს ყოველ ელემენტს მძიმეთი (,)
console.log(arr2.toString())




console.log(arr1.pop()) // .pop() - მეთოდი ამოაგდებს სიაში ბოლო ინდექსზე მყოფ ელემენტს. ამ შემთხვევაში ამოაგდებს ელემნტს მასივიდან და დაბრუნებს მაგ ამოგდებულ ელემენტს

arr2.pop()
console.log(arr2) // ამ შემთქვევაში კი დარჩენილი ელემენტები პოპის შემდეგ



arr1.push(7)
console.log(arr1)
// .push() - ამატებს ელემენტს მასივის ბოლოში
arr2.push("dajsdjosand1")
console.log(arr2)



arr1.shift()
console.log(arr1) // .shift() - შლის ელემენტს სიიდან 

console.log(arr2.shift()) // შლის მასივიდან პირველ ელემენტს და აბრუნებს მას



let notArray = "this is not an array"
console.log(Array.isArray(arr1)) // Array.isArray() - ამოწმებს თუ მნიშვნელობა მასივია
console.log(Array.isArray(notArray)) 



console.log(arr1.concat(arr2)) // .concat() - მეთოდი აერთიანებს მასებს
console.log(arr1.concat(arr1))



console.log(arr1.slice(1)) // .slice() - მეთოდი აბრუნებს მასივის კონკრეტულ ნაწილს და გადაეცემა 2 არგუმენტი (start, end), რომელი ინდექსიდან დაიწყოს და რომელ ინდექსამდე ამოწრას
console.log(arr2.slice(1,4))



// .splice() - მეთოდი შლის რომელიღაცა ინდექსიდან დაწყებული რამდენიმე ელებენტს მაგალითად:
arr1.splice(1,2) // პირველი ინდექსიდან 2 ელემენტს წაშლის
console.log(arr1)

arr2.splice(1,2, 1) // ასევე შეგვიძლია მითითებულ ინდექსიდან წავშალოდ რამდენიმე ელემენტი ელემენტი და მაგ ინდექსზე ჩავსვათ სხვა ელემენტი სხვა მნიშვნელობაზე
console.log(arr2)