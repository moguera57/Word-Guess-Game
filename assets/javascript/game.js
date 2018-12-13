$(document).ready(function () {

    //Should probably map the string to an array, then change the array rather than
    //the string. Just concatonate it when you go to display. Dummy.

    const wordList = ["oasis", "blur", "elastica", "pulp", "these animal men", "suede", "radiohead", "supergrass", "the stone roses", "manic street preachers"]

    $("#startBtn").click(init)

    let gameOver = false;
    let guessed = []
    let wordArray = []
    let wrongGuesses = 8
    let solution = []


    function init() {

        gameOver = false

        $("#game").empty()
        $("#result").empty()
        $("#guessed").empty()

        wordArray = []
        guessed = []
        let random = Math.floor(Math.random() * 10)
        wrongGuesses = 8
        let blank = ''
        let blankText = ''

        word = wordList[random]

        wordArray = word.split('')

        $("#startBtn").text("Restart")

        for (let i = 0; i < wordArray.length; i++) {

            if (wordArray[i] === ' ')
                blank += ' '
            else
                blank += "_"
        }

        solution = blank.split('');
        console.log(solution.join(''))

        blankText = $(`<div>${blank}</div>`)

        $("#game").append(blankText)

        $("#game-text").text(`Please select a letter. Guesses left: ${wrongGuesses}.`)
    }

    $(document).keypress(function (e) {
        if(gameOver == false){
            let correctGuess = -1
            let letter = e.key.toLowerCase();

            guessed.push(letter)
            let guessedString = ''

            for (var i = 0; i < guessed.length; i++) {
                guessedString += (guessed[i] + ", ")
            }

            $("#guessed").text(guessedString)


            for (let i = 0; i < wordArray.length; i++) {
                if (wordArray[i] == letter) {
                    correctGuess = 1
                }
            }

            if (correctGuess === -1) {

                wrongGuesses--
                $("#game-text").text(`Please select a letter. Guesses left: ${wrongGuesses}.`)

                if (wrongGuesses == 0) {
                    $("#result").append("You Lose!")
                    gameOver = true
                }
            }
            else {
                for (let i = 0; i < wordArray.length; i++) {
                    for (let k = 0; k < guessed.length; k++) {
                        if (wordArray[i] == guessed[k])
                            solution[i] = wordArray[i]
                    }
                }

                let solutionPrint = $(`<div>${solution.join('')}</div>`)
                $("#game").empty()
                $("#game").append(solutionPrint)

                console.log(solution)
                console.log(wordArray)

                if(solution.join('') == wordArray.join('')){
                    $("#result").append("You Win!")
                    gameOver = true
                }
            }
        }
    });
});