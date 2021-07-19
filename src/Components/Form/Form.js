import React, { Component } from "react";
import shortid from "shortid";

export class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handelChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onSubmit(newContact);
    this.reset();
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.handelChange}
          value={name}
        />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={this.handelChange}
          value={number}
        />
        <button>Add contact</button>
      </form>
    );
  }
}
