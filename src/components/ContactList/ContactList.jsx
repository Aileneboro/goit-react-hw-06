import { useSelector, useDispatch } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts, deleteContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={nanoid()}>
          <Contact
            name={contact.name}
            number={contact.number}
            onDelete={handleDelete}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
