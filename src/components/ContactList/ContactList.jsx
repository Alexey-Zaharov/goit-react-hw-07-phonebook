import { useSelector } from 'react-redux';
import ContactListElement from '../ContactListElement';
import css from './ContactList.module.css';

const ContactList = () => {
  const getContacts = useSelector(state => state.contacts.list);
  const getFilter = useSelector(state => state.filter);
  const normolizedFiltredData = getFilter.toLowerCase();
  const filtredData = getContacts.filter(contact =>
    contact.name.toLowerCase().includes(normolizedFiltredData)
  );
  return (
    <div className={css.contactLiscContainer}>
      <ul>
        {filtredData.map(({ id, name, phone }) => {
          return (
            <ContactListElement key={id} id={id} name={name} number={phone} />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
