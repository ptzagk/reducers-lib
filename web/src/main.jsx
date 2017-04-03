import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import userReducer from 'core/lib/reducers/user'

const LoginFormComponent = ({isLoggedIn, onLoginSubmit}) => {
  let input
  return <form onSubmit={e => {
    e.preventDefault()
    onLoginSubmit(input.value)
    input.value = ''
  }}>
    <input type='password' ref={node => { input = node }} />
    <button type='submit'>Log in</button>
    <p>{ isLoggedIn ? 'Congratulations you have logged in' : 'You are not logged in' }</p>
  </form>
}

const LoginFormContainer = connect(
  state => ({
    isLoggedIn: state.isLoggedIn
  }),
  dispatch => ({
    onLoginSubmit: password => {
      dispatch({type: 'LOGIN', password})
    }
  })
)(LoginFormComponent)

const store = createStore(userReducer)

render(
  <Provider store={store}>
    <LoginFormContainer />
  </Provider>,
  document.getElementById('root')
)
