let nickname = "Gigi";

function outer() {
    let nickname = "Gio";

    function inner() {
        console.log(nickname);
    }

    inner();
}

outer();