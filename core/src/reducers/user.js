export default (state = { isLoggedIn: false }, action) => {
  switch (action.type) {
    case 'LOGIN':
      if (action.password === 'secret') {
        return { isLoggedIn: true }
      }
      return state
    default:
      return state
  }
}
