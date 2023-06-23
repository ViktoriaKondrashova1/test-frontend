import { Admin, Resource, fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import ContactsList from "../../components/ContactsList/ContactsList";
import CustomLayout from "../../components/CustomLayout/CustomLayout";
import LoginPage from "../LoginPage/LoginPage";
import { getToken } from "../../api/api";
import theme from "../../theme";

const httpClient = async (url: string, options: fetchUtils.Options = {}) => {
  const token = await getToken().then((value) => value.accessToken);
  const user = {
    token: `Bearer ${token}`,
    authenticated: !!token,
  };
  return fetchUtils.fetchJson(url, { ...options, user });
};

const MainPage = () => {
  return (
    <Admin
      dataProvider={simpleRestProvider(
        "http://3.65.149.62/test-api",
        httpClient
      )}
      layout={CustomLayout}
      theme={theme}
      loginPage={LoginPage}
    >
      <Resource name="contacts" list={ContactsList} />
    </Admin>
  );
};

export default MainPage;
