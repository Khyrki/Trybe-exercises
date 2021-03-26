import React, { Component } from 'react'

class DataFieldset extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <fieldset>
        <legend>Texto e arquivos</legend>
        <label>
          Anedota:
          <textarea
            name="anecdote"
            onChange={ handleChange }
          />
        </label>
        <input type="file" />
      </fieldset>
    );
  }
}

export default DataFieldset;