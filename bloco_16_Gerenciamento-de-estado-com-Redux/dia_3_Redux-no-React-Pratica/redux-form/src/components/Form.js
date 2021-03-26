import React, { Component } from 'react'
import PersonalFieldset from './PersonalFieldset';
import DataFieldset from './DataFieldSet';
import { connect } from 'react-redux';
import handleChange from '../actions'

class Form extends Component {
  constructor() {
    super();

    this.state = {
      formularioComErros: false,
    };
  }

  updateErrorState = (bool) => { this.setState({ formularioComErros: bool }) }

  handleError(name, value) {
    const { updateErrorState } = this;
    switch(name) {
      case 'name':
        const isNameInvalid = !(value.length >= 3);
        updateErrorState(isNameInvalid);
        break;
      case 'email':
        const isEmailInvalid = !(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i));
        updateErrorState(isEmailInvalid);
        break;
      case 'age':
        const isAgeInvalid = !(value.length > 0);
        updateErrorState(isAgeInvalid);
        break;
      case 'anecdote':
        const isAnecdoteInvalid = !(value.length > 0);
        updateErrorState(isAnecdoteInvalid);
        break;
      case 'terms':
        updateErrorState(!value);
        break;
      default:
        console.error('Unexpected form input');
        break;
    }
  };

 /*  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value
    this.setState({
      [name]: value,
    });
    this.handleError(name, value);
  } */
 /*  xablau = (target) => {
    console.log(target)
  } */

  render() {
    const { formularioComErros } = this.state;
    const { handleChange } = this.props;
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <PersonalFieldset />
          <DataFieldset />
          <label>
            <input
              type="checkbox"
              name="terms"
              onChange={ handleChange }
            />
            Concordo com termos e acordos
          </label>
        </form>
        { formularioComErros && 'Formulário inválido' }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleChange: ({ target }) => dispatch(handleChange(target)),
})

export default connect(null, mapDispatchToProps)(Form);