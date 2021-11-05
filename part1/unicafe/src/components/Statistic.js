import StatsBar from "./StatsBar"

const Statistic = ({ data }) => {
    const [good, neutral, bad] = data
    const all = good + neutral + bad
    const countAverage = () => {
        let average = 0
        for(let i = 0; i < good; i++) {
            average += 1  
        }
        for(let i = 0; i < bad; i++){
            average -= 1
        }
        if(all === 0) {
            return "(can't show average now, because there are no votes)"
        }
        return average / all
    }

    const countPositive = () => {
        if (all === 0) {
            return "(can't show positive now, because there are no votes)"
        }
        return (good * 100) / all + '%'
    }

    if (good + neutral + bad === 0) {
        return ("No feedback given")
    }

    return (
        <table>
            <tbody>
                <StatsBar stats={good} statsText='good' />
                <StatsBar stats={neutral} statsText='neutral' />
                <StatsBar stats={bad} statsText='bad' />
                <StatsBar stats={all} statsText='all' />
                <StatsBar stats={countAverage()} statsText='average' />
                <StatsBar stats={countPositive()} statsText='positive' />
            </tbody>
        </table>        
    )
}

export default Statistic