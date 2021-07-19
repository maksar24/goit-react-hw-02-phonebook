import React, { Component } from "react";
import "./App.css";
import { Form } from "./Components/Form/Form";
import { ContactList } from "./Components/ContactList/ContactList";
import { Filter } from "./Components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addNewContact = (newContact) => {
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));

    this.state.contacts.forEach((el) => {
      if (el.name === newContact.name) {
        this.state.contacts.splice(0, 1);
        alert("fff");
      }
    });
  };

  getSearchName = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h2>Phonebook</h2>
        <Form onSubmit={this.addNewContact} />
        <h3>Contacts</h3>
        <h3>Find contacts by name</h3>
        <Filter getSearchName={this.getSearchName} label="Enter contact name" />
        <ContactList options={contacts} searchValue={filter} />
      </div>
    );
  }
}

export default App;
