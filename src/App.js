import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css";

const LOCAL_STORAGE_KEY = "phonebook_contacts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedContacts) {
      this.setState({ contacts: storedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  addContact = (contact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <div className="app">
        <h1>Телефонна книга</h1>
        <ContactForm onAdd={this.addContact} />
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
