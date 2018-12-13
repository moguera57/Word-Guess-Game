$(document).ready(function() {
    
    const wordList = ["oasis","blur","elastica","pulp","these animal men","suede","radiohead","supergrass", "the stone roses", "manic street preachers"]

    $("#startBtn").click(init)

    function init(){

        $("#game").empty()

        let random = Math.floor(Math.random() * 10)
        let wrongGuesses = 8
        let blank = ""
        let blankText = ""
        let word = ""

        console.log(random)

        word = wordList[random]

        $("#startBtn").text("Restart")

        for(let i=0; i<word.length; i++){

            console.log(word.charAt(i))

            if(word.charAt(i) == ' ')
                blank += '&nbsp'
            else
                blank += "_"
        }

        blankText = $(`<div>${blank}</div>`)

        $("#game").append(blankText)

        $("#game").append(word)
        
        $("#game-text").text(`Please select a letter. Guesses left: ${wrongGuesses}.`)

        $(document).keypress(function(e){
            let correctGuess = -1
            let letter = e.key.toLowerCase();
            console.log(letter)

            for(let i=0; i<word.length; i++){
                if(word.charAt(i) == letter){
                    correctGuess = i
                }
            }

            if(correctGuess == -1){
                wrongGuesses--
                $("#game-text").text(`Please select a letter. Guesses left: ${wrongGuesses}.`)
                if(wrongGuesses == 0){
                    alert("You Lose!")
                    init()
                }
            }
            else{
                console.log("Right Guess!")
            }
        });

    }

});