/* eslint-env mocha */

const assert = require('chai').assert
const createStore = require('redux').createStore
const reducer = require('../lib/reducers/user').default

describe('User reducer', () => {
  let store

  beforeEach(() => {
    store = createStore(reducer)
  })

  it('should log in with the correct password', () => {
    store.dispatch({type: 'LOGIN', password: 'secret'})
    assert.isTrue(store.getState().isLoggedIn)
  })
})
