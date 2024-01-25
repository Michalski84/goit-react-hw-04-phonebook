import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(contact => (
      <ContactListItem key={contact.id} onDelete={onDelete} {...contact} />
    ))}
  </ul>
);

export default ContactList;
