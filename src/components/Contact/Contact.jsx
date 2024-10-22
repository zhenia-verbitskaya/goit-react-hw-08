import { MdPerson, MdPhone } from "react-icons/md";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={s.contactCard}>
      <div className={s.contactFields}>
        <div className={s.contactField}>
          <MdPerson size="24" />
          <p>{contact.name}</p>
        </div>
        <div className={s.contactField}>
          <MdPhone size="24" />
          <p>{contact.number}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
        className={s.contactBtn}
      >
        Delete
      </button>
    </div>
  );
}
