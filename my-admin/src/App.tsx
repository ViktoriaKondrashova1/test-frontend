import { Admin, Resource, ListGuesser, fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-json-server";
import { getToken } from "./api/api";
import "./App.css";

// let url = "http://3.65.149.62/test-api/contacts";
// let response = await fetch(url, {
//   headers: {
//     Authorization: "Bearer " + jsonToken.accessToken,
//   },
// });
// const jsonData = await response.json();
// console.log(jsonData);

const httpClient = async (url: string, options: fetchUtils.Options = {}) => {
  const token = await getToken().then((value) => value.accessToken);
  const user = {
    token: `Bearer ${token}`,
    authenticated: !!token,
  };
  // if (!options.headers) {
  //   options.headers = new Headers({ Accept: "application/json" });
  // }
  // options.headers.set("Access-Control-Expose-Headers", "X-Total-Count");
  // const headers = options?.headers
  //   ? new Headers({ Accept: "application/json" })
  //   : new Headers();
  // headers.set("Access-Control-Expose-Headers", "X-Total-Count");
  return fetchUtils.fetchJson(url, { ...options, user });
};

const dataProvider = simpleRestProvider(
  "http://3.65.149.62/test-api",
  httpClient
);

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="contacts" list={ListGuesser} />
    </Admin>
  );
};

export default App;
