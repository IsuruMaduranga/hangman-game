const gameDOM = document.querySelector('#game')
const guessesDOM = document.querySelector('#guesses')
const pressedKeyDOM = document.querySelector('#key')
let game

const render = () => {
    gameDOM.innerHTML = ''
    guessesDOM.textContent = game.gameStatus

    game.puzzle.split('').forEach(element => {
            const spanEl = document.createElement('span')
            spanEl.textContent = element
            gameDOM.appendChild(spanEl)
    });
}

window.addEventListener('keypress',
    e => {
        if(game.status === 'playing'){
            game.guess(e.key)
            render()  
        }
    }
)

const startGame = async()=>{
    const puzzle = await getPuzzle(2)
    game = new Hangman(puzzle,puzzle.length-1)
    render()
}

document.querySelector('#reset').addEventListener('click',startGame)

startGame()


