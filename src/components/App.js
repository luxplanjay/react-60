import { Layout } from './Layout';

export const App = () => {
  const [contacts, setContacts] = useState([]);

  changeOnlineStatus = contactId => {
    setContacts(prevContacts =>
      prevContacts.map(contact => {
        if (contact.id === contactId) {
          return {
            ...contact,
            isOnline: !contact.isOnline,
          };
        }
        return contact;
      })
    );
  };

  return <Layout>{value}</Layout>;
};
