import fetchGreeting from './api'

const initialState = {
  message: null
}

const SET_GREETING = 'set/greeting'

const setGreeting = payload => ({
  type: SET_GREETING,
  payload
})

export const loadGreeting = () => async dispatch => {
  const data = await fetchGreeting()
  dispatch(setGreeting(data))
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GREETING:
      return action.payload
    default:
      return state
  }
}

export default rootReducer
