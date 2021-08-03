import React, {useState} from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
    ]

    const [selected, setSelected] = useState(0)
    const [scoreArray, setScoreArray] = useState(new Uint8Array(anecdotes.length))

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }
    const voteAnecdote = (index) => {
        const arrayCopy = [...scoreArray]
        arrayCopy[index] += 1
        setScoreArray(arrayCopy)
    }

    const getHighestScoreIndex = () => {
        let bestAnecdoteIndex = 0
        let highestScore = 0;

        for (let i = 0; i < scoreArray.length; i++) {
            if (scoreArray[i] > highestScore) {
                bestAnecdoteIndex = i
                highestScore = scoreArray[i]
            }
        }
        return bestAnecdoteIndex
    }

    return (
        <div>
            <h2>Anecdote of the day</h2>
            <p>{anecdotes[selected]}</p>
            <p>has {scoreArray[selected]} votes</p>
            <button onClick={() => voteAnecdote(selected)} >vote</button>
            <button onClick={() => setSelected(getRandomInt(anecdotes.length))} >next anecdote</button>
            <h2>Anecdote with most votes</h2>
            <p>{anecdotes[getHighestScoreIndex()]} </p>
            <p>has the most votes with a total of {scoreArray[getHighestScoreIndex()]} votes</p>
        </div>

    )
}

export default App