import { Component } from "react";

const states = ['Rio Grande do Sul', 'Santa Catarina', 'Paraná', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo', 'São Paulo', 'Mato Grosso', 'Bahia', 'Pernambuco', 'Acre'];

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      states: '',
      addressType: ''
    }
  }

  handleState = ({ target: { value, name, type } }) => {
    
    if (name === 'name') {
      value = value.toUpperCase()
      this.setState({ name: value })
    }

    if (name === 'address') {
      value = value.replace(/[^\w\s]/gi, '')
      this.setState({ address: value })
    }

    this.setState({ [name]: value })
  }

  cityValid = () => {
    const { city } = this.state;
    const isvalid = city.match(/^\d/)
    ? this.setState({ city: '' })
    : this.setState({ city })
    return isvalid;
  }

  render() {
    const { name, address, city } = this.state;
    return (
      <form>
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
          <label htmlFor="city"> Cidade
            <input id="city" type="text" name="city" maxLength="28" value={ city } onChange={ this.handleState } onBlur={ this.cityValid } required />
          </label>
          <label htmlFor="states"> Estado
            <select name="states" id="states" onChange={ this.handleState } required>
              <option value="">Selecione</option>
              { states.map((state, index) => <option key={ index }>{ state }</option> ) }
            </select>
          </label>
          <label htmlFor="house">
            <input id="house" type="radio" name="addressType" value="house" onChange={ this.handleState } />
            Casa
          </label>
          <label htmlFor="ap">
            <input id="ap" type="radio" name="addressType" value="apartment" onChange={ this.handleState } />
            Apartamento
          </label>
        </fieldset>
      </form>
    )
  }
}

export default Form;
