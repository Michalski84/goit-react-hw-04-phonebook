import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      try {
        const parsedContacts = JSON.parse(storedContacts);
        if (Array.isArray(parsedContacts)) {
          setContacts(parsedContacts);
        } else {
          console.error('Invalid contacts data in localStorage:', storedContacts);
        }
      } catch (error) {
        console.error('Error parsing contacts from localStorage:', error);
      }
    } else {
      const initialContacts = [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
      localStorage.setItem('contacts', JSON.stringify(initialContacts));
      setContacts(initialContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

const addContact = ({ name, number }) => {
  if (!name.trim() || !number.trim()) {
    alert('Please enter both name and number.');
    return;
  }

  const isNameExists = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
  if (isNameExists) {
    alert(`${name} is already in contacts.`);
    return;
  }
  
  const newContact = { id: Date.now(), name, number };
  setContacts(prevContacts => [...prevContacts, newContact]);
};


  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const handleContactDelete = id => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

   return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} contacts={contacts} />
      
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleContactDelete} />
    </div>
  );
};

export default App;
