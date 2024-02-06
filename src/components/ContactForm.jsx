import React, { useState } from 'react'; 
import styles from './Form.module.css'; 

const ContactForm = ({ onSubmit, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim() || !number.trim()) {
      alert('Please enter both name and number.');
      return;
    }
    
    const isNameExists = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (isNameExists) {
      alert(`${name} is already in contacts.`);
      return;
    }
    
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.formControl} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name:
        <input className={styles.input} type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label className={styles.label}>
        Number:
        <input className={styles.input} type="text" name="number" value={number} onChange={handleChange} />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
