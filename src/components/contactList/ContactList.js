import React from "react";
import ContactListItem from "./ContactListItem";
import s from "./contact.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          {...contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
