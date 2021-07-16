import React, { Component } from "react";

export class Form extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handelChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { name } = this.state;

    return (
      <div>
        <h2>Phonebook</h2>
        <form>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handelChange}
          />
          <button>Add contact</button>
        </form>
        <h3>Contacts</h3>
        <ul></ul>
      </div>
    );
  }
}
