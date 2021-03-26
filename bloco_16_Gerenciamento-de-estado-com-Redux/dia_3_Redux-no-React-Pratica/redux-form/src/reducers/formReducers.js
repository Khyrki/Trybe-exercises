const INITIAL_STATE = {
  name: '',
  email: '',
  age: '',
  anecdote: '',
  terms: false,
  formularioComErros: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'INPUT_INSERT_INFORMATION':
      return { ...state, [action.name]: action.value }
    default:
      return state;
  }
};

export default reducer;
