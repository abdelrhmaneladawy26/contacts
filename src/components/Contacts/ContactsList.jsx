import ContactCard from "./ContactCard";
import Spinner from "../Utility/Spinner";
const ContactsList = ({ isLoading, contactsData, search }) => {
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
          image={contact.picture}
          firstName={contact.firstName}
          lastName={contact.lastName}
        />
      ));

  return (
    <div>
      <div className="mt-[100px]">{isLoading ? <Spinner /> : data}</div>
    </div>
  );
};

export default ContactsList;
