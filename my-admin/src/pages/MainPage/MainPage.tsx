import { Admin, Resource } from "react-admin";
import dataProvider from "../../dataProvider";
import ContactsList from "../../components/ContactsList/ContactsList";

const MainPage = () => {
  return (
    <Admin dataProvider={dataProvider.getContacts}>
      <Resource name="contacts" list={ContactsList} />
    </Admin>
  );
};

export default MainPage;
