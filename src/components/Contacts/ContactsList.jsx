import ContactCard from "./ContactCard";
import Spinner from "../Utility/Spinner";
const ContactsList = ({
  isLoading,
  contactsData,
  search,
  deleteContacts,
  dispatch,
}) => {
  const data =
    contactsData &&
    contactsData
      .filter((item) => {
        return search.toLowerCase() === ""
          ? item
          : item.firstName.toLowerCase().includes(search);
      })
      .slice(0, 2)
      .map((contact) => (
        <ContactCard
          key={contact.id}
          id={contact.id}
          image={contact.picture}
          firstName={contact.firstName}
          lastName={contact.lastName}
          deleteContacts={deleteContacts}
          dispatch={dispatch}
        />
      ));

  return (
    <div>
      <div className="mt-[100px]">{isLoading ? <Spinner /> : data}</div>
    </div>
  );
};

export default ContactsList;
