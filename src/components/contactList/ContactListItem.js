import React from "react";
import s from "./contact.module.css";

const ContactListItem = ({ name, number, id, deleteContact }) => {
  return (
    <li className={s.listItem}>
      <span>
        {name} : {number}
      </span>
      <button
        className={s.button}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
