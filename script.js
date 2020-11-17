
(function() {
    // to get the value of an input: document.getElementById("element-id").value
    // your code here


    document.getElementById("js-play").addEventListener("click", function(event) {

        event.preventDefault();

        const secretNumber = Math.floor(Math.random() * 22) + 1;
        console.log(secretNumber);

        const userGuess = Number(document.getElementById("js-user-guess").value);
        console.log(userGuess);

        if (secretNumber === userGuess){
            window.alert("Awesome! You number " + userGuess + " was correct. You can be named many things, hungry not being one of them.");
        } else if (secretNumber == userGuess + 1 || secretNumber == userGuess - 1) {
            window.alert("So close, but you just missed it! Are you in a class that started on the thirteenth or what?");
        }
        else {
            window.alert("Bummer... You guessed " + userGuess + " and the secret number was " + secretNumber + ".");
        }
    });



})();
