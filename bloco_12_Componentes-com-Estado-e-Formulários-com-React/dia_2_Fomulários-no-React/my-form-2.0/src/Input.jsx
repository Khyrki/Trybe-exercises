import React from 'react';

class Input extends React.Component {


  render() {
    const { title, value, name, type, maxLength, style, blur} = this.props;
    return (
      <label> {title}
        <input type={type} name={name} /* value={value} */ maxLength={maxLength} style={style} onBlur={blur} required/>
      </label>
    ) 
  }     
}

export default Input;