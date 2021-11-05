import React, { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Statistic from './components/Statistic'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <Header header= 'give feedback' />
      <Button handleClick={() => setGood(good + 1)} text='good'></Button>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'></Button>
      <Button handleClick={() => setBad(bad + 1)} text='bad'></Button>
      <Header header= 'statistics'/>
      <Statistic data={[good, neutral, bad]} />
    </div>
  )
}

export default App
