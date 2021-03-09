import React, { Component } from "react";
import s from "./contactForm.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  // handleImputName = (e) => {
  //   console.log(e.target.value);
  //   this.setState({ name: e.target.value });
  // };

  // handleImputNumber = (e) => {
  //   console.log(e.target.value);
  //   this.setState({ number: e.target.value });
  // };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkFullIsForm = (name, number) => {
    if ((name.length > 0) & (number.length > 0)) {
      return true;
    } else {
      alert(`form is not full`);
      return false;
    }
  };

  handleSubmit = (e) => {
    const { name, number } = this.state;
    const { onCheckUnique, onSubmit } = this.props;
    const unique = onCheckUnique(name, number);
    const fullForm = this.checkFullIsForm(name, number);
    e.preventDefault();
    unique && fullForm && onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Number
            <input
              className={s.input}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
            />
          </label>
          <button className={s.button} type="submit">
            Add
          </button>
        </form>
      </>
    );
  }
}
