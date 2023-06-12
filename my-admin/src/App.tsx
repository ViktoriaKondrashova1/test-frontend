import { Admin, Resource, ListGuesser } from "react-admin";
import dataProvider from "./dataProvider";
import "./App.css";

// const dataProvider = simpleRestProvider(
//   "http://3.65.149.62/test-api",
//   httpClient
// );

const App = () => {
  return (
    <Admin dataProvider={dataProvider.getContacts}>
      <Resource name="contacts" list={ListGuesser} />
    </Admin>
  );
};

export default App;
