import { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
    }
  }

  handleState = ({ target: { value, name } }) => {
    
    if ( name === 'name') {
      value = value.toUpperCase()
      this.setState({ name: value })
    }

    if ( name === 'address') {
      value = value.replace(/[^\w\s]/gi, '')
      this.setState({ address: value })
    }

    this.setState({ [name]: value })
  }

  render() {
    const { name, address } = this.state;
    return (
      <>
        <fieldset>
          <label htmlFor="name"> Nome
            <input id="name" type="text" name="name" maxLength="40" value={ name } onChange={ this.handleState } required />
          </label>
          <label htmlFor="email"> Email
            <input id="email" type="text" name="email" maxLength="50" onChange={ this.handleState } required />
          </label>
          <label htmlFor="cpf"> CPF
            <input id="cpf" type="text" name="cpf" maxLength="11" onChange={ this.handleState } required />
          </label>
          <br />
          <label htmlFor="address"> Endereço
            <input id="address" type="text" name="address" maxLength="200" value={ address } onChange={ this.handleState } required />
          </label>
      </fieldset>
      </>
    )
  }
}

export default Form;
