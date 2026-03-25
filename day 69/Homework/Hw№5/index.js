let hero = "Batman";

function transform(hero) {
    hero = "Superman";
    console.log("ფუნქციის შიგნით:", hero);
}

transform("Iron Man");
console.log("გარეთ:", hero);


// გლობალ hero ცვლადი იმიტომ არ შეიცვალა რომ ფუნქციაში იქმნება ლოკალური ცვლადი hero და ეს ლოკალური ცვლადი არ უდრის გლობალურ ცვლადს

// transform("Iron Man") - ის შემთხვევაში თავიდან ეს hero ცვლადი იქნება "Iron Man", მაგრამ ფუნქციაში ჩვენ გადავუარეთ და შევცვალეთ ეს ცვლადი "Superman" - ად