import React, { Component } from 'react';
import styles from './Form.module.css';
import buttonStyles from './Button.module.css';

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
      <form className={styles.formControl} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Enter name"
          required
        />
        </label>
        <label className={styles.label}>
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          placeholder="Enter number"
          required
        />
        </label>
        <button className={buttonStyles.button} type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
