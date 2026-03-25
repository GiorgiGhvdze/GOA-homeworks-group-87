// global scope - ში შექმნილი ცვრადი კი ბლოკ სკოუპისგან შექმნილ ცვლადისგან განსხვავებით შეგვიძლია კოდის ნებისმიერ ნაწილში გამოვიყენოთ

const name = "Giorgi"; // შევქმენი გლობალ სკოუპში ცვლადი და შემიძლია გამოვიყენო ნებისმიერ ადგილას

const helloUser = () =>{
    return "Hello" + " " + name
}

console.log(helloUser())





// Block scope - ნიშნავს იმას რომ მაგალითად შევქმენით ცვლადი ფუნქციაში და შეგვიძლია ის გამოვიყენოთ მარტო მაგ ფუნქციის ფარგლებში

const helloGiorgi = () =>{
    let name = "Giorgi"; // შევქმენით ცვლადი ბლოკ სკოუპში და მისი გამოყენება ამ ფუნქციის გარეთ არ შეგვიძლია
    return "Hello" + " " + name
}

// console.log(name) - ამოაგდებს ერორს

console.log(helloGiorgi())





// lexical scope - 



