const INITIAL_STATE = {
  user: '',
  password:'',
}

function setUserAndPassword(state = INITIAL_STATE,action) {
  switch (action.type) {
    case 'LOGIN':
      return ({
        user: action.user,
        password: action.password,
      })
    default:
      return state;
  }
}

export default setUserAndPassword;
