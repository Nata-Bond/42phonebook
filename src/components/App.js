import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import shortid from "shortid";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount(prevProps, prevState) {
    const enteredContacts = localStorage.getItem("contacts");
    if (enteredContacts) {
      this.setState({ contacts: JSON.parse(enteredContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: shortid.generate(),
    };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = (id) => {
    console.log(id);
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  };

  checkUnique = (name, number) => {
    const { contacts } = this.state;
    const isExist = !!contacts.find(
      (contact) => contact.name === name || contact.number === number
    );
    isExist && alert(`${name || number} is already exist`);
    return !isExist;
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    // const normalizedFilter = this.state.filter.toLowerCase();
    // const filteredContacts = this.state.contacts.filter((contact) =>
    //   contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    // );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact}
          onCheckUnique={this.checkUnique}
        />

        <h2>Contacts</h2>
        <Filter changeFilter={this.changeFilter} filter={this.state.filter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
