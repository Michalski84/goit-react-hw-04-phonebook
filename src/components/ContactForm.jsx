import React, { Component } from 'react';
import styles from './Form.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (!name.trim() || !number.trim()) {
      alert('Please enter both name and number.');
      return;
    }
    this.props.onSubmit({ name, number });
    // Sprawdź, czy this.props.contacts istnieje i jest tablicą
    if (Array.isArray(this.props.contacts)) {
      localStorage.setItem('contacts', JSON.stringify([...this.props.contacts, { name, number }]));
    }
    // Wyczyść stan formularza
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.formControl} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Name:
          <input className={styles.input} type="text" name="name" value={name} onChange={this.handleChange} />
        </label>
        <label className={styles.label}>
          Number:
          <input className={styles.input} type="text" name="number" value={number} onChange={this.handleChange} />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
