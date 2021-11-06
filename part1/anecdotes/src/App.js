import React, { useState } from 'react'
import AncedoteText from './components/AnecdoteText'
import Button from './components/Button'
import Header from './components/Header'
import Stats from './components/Stats'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const pointAnec = []
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(pointAnec)
  const [max, setMax] = useState(0)
  
  const anecdoteChanger = () => {
    const max = anecdotes.length;
    const nextAnecdote = Math.floor(Math.random() * max);
    setSelected(nextAnecdote)
  }

  const vote = () => {
    const counter = [...points]
    if (counter[selected] === undefined){
      counter[selected] = 1
    } else {
      counter[selected] += 1
    }
    setPoints(counter)
  }
  
  const getMaxAnecdote = () => {
    for (let i = 0; i < points.length; i++) {
        if (points[i] > points[max]) {
          return setMax(i)
        }
    }
    return anecdotes[max]
}

  return (
    <div>
      <Header text={'Anecdote of the day'} />
      <AncedoteText text={anecdotes[selected]} />
      <Button handler={anecdoteChanger} text={'next anecdote'} />
      <Button handler={vote} text={'vote'} />
      <Stats votes={points[selected]} />
      <Header text={'Anecdote with most votes'} />
      <AncedoteText text={getMaxAnecdote()} />
      <Stats votes={points[max]} />
    </div>
  )
}

export default App