import { Admin, Resource } from "react-admin";
import dataProvider from "../../dataProvider";
import ContactsList from "../../components/ContactsList/ContactsList";
import CustomLayout from "../../components/CustomLayout/CustomLayout";

const MainPage = () => {
  return (
    <Admin dataProvider={dataProvider.getContacts} layout={CustomLayout}>
      <Resource name="contacts" list={ContactsList} />
    </Admin>
  );
};

export default MainPage;
