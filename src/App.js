import React, {useState} from 'react'

const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const StatisticLine = ({text, stat}) => {
    return (
            <tr>
                <td>{text}</td>
                <td>{stat}</td>
            </tr>
    )
}

const Statistics = ({good, neutral, bad}) => {
    const calcTotal = () => {
        return good + neutral + bad
    }

    const calcAverageScore = () => {
        return (good * 1) + (neutral * 0) + (bad * -1)
    }

    const calcPercentagePosFb = () => {
        return (good / calcTotal()) * 100
    }
    if (calcTotal() > 0) {
        return (

            <div>
                <table>
                    <tbody>
                    <StatisticLine text={"Good"} stat={good}/>
                    <StatisticLine text={"Neutral"} stat={neutral}/>
                    <StatisticLine text={"Bad"} stat={bad}/>
                    <StatisticLine text={"All"} stat={calcTotal()}/>
                    <StatisticLine text={"average"} stat={calcAverageScore()}/>
                    <StatisticLine text={"positive"} stat={calcPercentagePosFb() + "%"}/>
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div>
            <p>No feedback given</p>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h2>give feedback</h2>
            <Button handleClick={() => setGood(good + 1)} text={"good"}/>
            <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"}/>
            <Button handleClick={() => setBad(bad + 1)} text={"bad"}/>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App