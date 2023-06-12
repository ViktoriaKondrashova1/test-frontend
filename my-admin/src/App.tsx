import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider";
import ContactsList from "./components/ContactsList/ContactsList";
import "./App.scss";

// const dataProvider = simpleRestProvider(
//   "http://3.65.149.62/test-api",
//   httpClient
// );

const App = () => {
  return (
    <Admin dataProvider={dataProvider.getContacts}>
      <Resource name="contacts" list={ContactsList} />
    </Admin>
  );
};

export default App;
