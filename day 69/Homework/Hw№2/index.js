
let price = 100;

const changePrice = () => {
    let price = 50; // აქ არის შეცდომა
    console.log("ახალი ფასი ფუნქციაში:", price);
};

changePrice();
console.log("გლობალური ფასი:", price); // აქ ისევ 100 უნდა ეწეროს!
