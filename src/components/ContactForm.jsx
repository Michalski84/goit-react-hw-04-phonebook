import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Enter name"
          required
        />
        <input
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          placeholder="Enter number"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
