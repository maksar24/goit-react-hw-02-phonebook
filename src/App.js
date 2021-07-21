import React, { Component } from "react";
import "./App.css";
import { Form } from "./Components/Form/Form";
import { ContactList } from "./Components/ContactList/ContactList";
import { Filter } from "./Components/Filter/Filter";
import { Wrapper } from "./App.styles";

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
    this.state.contacts.forEach((el) => {
      if ((el.name === newContact.name) & (el.number === newContact.number)) {
        this.state.contacts.splice(0, 1);
        alert(`${newContact.name} is already in contacts`);
      }
    });

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  getSearchName = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  removeContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((el) => el.id !== id),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter getSearchName={this.getSearchName} label="Enter contact name" />
        <ContactList
          options={contacts}
          searchValue={filter}
          onDelete={this.removeContact}
        />
      </Wrapper>
    );
  }
}

export default App;
