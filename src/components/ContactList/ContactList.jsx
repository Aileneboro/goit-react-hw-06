import Contact from "../Contact/Contact";
import { nanoid } from "nanoid";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={nanoid()}>
          <Contact
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
