import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newStateGood = counterReducer(state, action)
    expect(newStateGood).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })
  test('ok is incremented', () => {
    const action = {
      type: 'OK'
    }
    const state = initialState

    deepFreeze(state)
    const newStateOk = counterReducer(state, action)
    expect(newStateOk).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    })
  })
  test('Bad is incremented', () => {
    const action = {
      type: 'BAD'
    }
    const state = initialState

    deepFreeze(state)
    const newStateBad = counterReducer(state, action)
    expect(newStateBad).toEqual({
      good: 0,
      ok: 0,
      bad: 1
    })
  })
})