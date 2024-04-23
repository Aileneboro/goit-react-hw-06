import { TiUser } from "react-icons/ti";
import { TiPhone } from "react-icons/ti";
import css from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={css.contactContainer}>
      <div>
        <p>
          <TiUser />
          {name}
        </p>
        <p>
          <TiPhone />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
