import React, { Component } from "react";
import { nanoid } from "nanoid";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone } = this.state;

    if (!name || !phone) return;

    const contact = {
      id: nanoid(),
      name,
      phone,
    };

    this.props.onAdd(contact);

    this.setState({ name: "", phone: "" });
  };

  render() {
    const { name, phone } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Ім'я"
        />
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={this.handleChange}
          placeholder="Телефон"
        />
        <button type="submit">Додати</button>
      </form>
    );
  }
}

export default ContactForm;
