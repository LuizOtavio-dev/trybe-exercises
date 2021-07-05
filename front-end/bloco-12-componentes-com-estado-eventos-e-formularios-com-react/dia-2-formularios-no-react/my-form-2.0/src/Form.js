import { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleUpperCase = ({ target: { value } }) => {
    this.setState({name: value.toUpperCase()})
  }

  render() {
    const { name } = this.state;
    return (
      <>
        <fieldset>
          <label htmlFor="name"> Nome
            <input id="name" type="text" maxLength="40" value={ name } onChange={ this.handleUpperCase } required />
          </label>
          <label htmlFor="email"> Email
            <input id="email" type="text" maxLength="50" required />
          </label>
          <label htmlFor="cpf"> CPF
            <input id="cpf" type="text" maxLength="11" required />
          </label>
      </fieldset>
      </>
    )
  }
}

export default Form;
