class Hangman{

    constructor(word,numOfGuesses){
        this.word=word.toLowerCase().split('')
        this.numOfGuesses=numOfGuesses
        this.guessedletters = []
        this.status = 'playing'
    }

    get puzzle(){
        let str = ''
        for(let char of this.word){
            if(!this.guessedletters.includes(char)){
                str+=char.replace(/[a-zA-Z]/,'*')
            }else{
                str+=char
            }       
        }
        return str
    }

    guess(char){
        const guess = char.toLowerCase()
        const isUnique = !this.guessedletters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        if(isUnique){
            this.guessedletters.push(guess)
        }
    
        if(isUnique && isBadGuess){
            this.numOfGuesses--
        }
    }

    get gameStatus(){
        const isFinished = this.word.every(element => element.match(/\W/) || this.guessedletters.includes(element))
        const isGuessesLeft = this.numOfGuesses>0
    
        if(!isFinished && isGuessesLeft){
            return `Guesses Left: ${game.numOfGuesses}`
        }else if(!isFinished && !isGuessesLeft){
            this.status = 'failed'
            return `Nice try! The word is "${this.word.join('')}"`
        }else if(isFinished){
            this.status = 'finished'
            return 'Great work! You guessed the word!'
        }
    }    
}










