import React, { Component } from 'react';
import styles from './Form.module.css';
// import buttonStyles from './Button.module.css';

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
    this.props.onSubmit(this.state);
    localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
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
