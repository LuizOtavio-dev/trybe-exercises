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
      </fieldset>
      </>
    )
  }
}

export default Form;
