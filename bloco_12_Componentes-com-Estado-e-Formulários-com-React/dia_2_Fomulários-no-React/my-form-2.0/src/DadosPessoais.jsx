import React from 'react';
import Input from './Input'

class DadosPessoais extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade:'',
      radioButton:''
    }
  }
  blurNumber = (event) => {
    event.target.value = event.target.value.replace(/^\d+/g,'')
  }

  render() {
    return (
      <fieldset>
        <Input title={'Name:'} type={'text'} value={this.name} name={'name'} maxLength={40} style={{textTransform:'uppercase'}}/>
        <Input title={'Email:'} type={'text'} value={this.email} name={'email'} maxLength={50}/>
        <Input title={'CPF:'} type={'text'} value={this.cpf} name={'cpf'} maxLength={11}/>
        <Input title={'Endereço:'} type={'text'} value={this.endereço} name={'endereço'} maxLength={200}/>
        <Input title={'Cidade:'} type={'text'} value={this.cidade} name={'cidade'} maxLength={28} blur={this.blurNumber}/>
        <Input title={'Radio Button:'} type={'radio'} value={this.radioButton} name={'radioButton'} />
      </fieldset>
    )
  }
}

export default DadosPessoais;