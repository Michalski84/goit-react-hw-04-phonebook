import React from 'react';

const ContactListItem = ({ id, name, number, onDelete }) => (
  <li>
    {name}: {number}
    <button type="button" onClick={() => onDelete(id)}>Delete</button>
  </li>
);

export default ContactListItem;
