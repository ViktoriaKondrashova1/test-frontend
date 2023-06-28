import { Admin, Resource, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";
import { httpClient } from "../../api/api";
import simpleRestProvider from "ra-data-simple-rest";
import ContactsList from "../../components/ContactsList/ContactsList";
import CustomLayout from "../../components/CustomLayout/CustomLayout";
import LoginPage from "../LoginPage/LoginPage";
import HomePage from "../HomePage/HomePage";
import ProfilePage from "../ProfilePage/ProfilePage";
import theme from "../../theme";

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
      dashboard={HomePage}
    >
      <Resource name="contacts" list={ContactsList} />
      <CustomRoutes>
        <Route path="/profile" element={<ProfilePage />} />
      </CustomRoutes>
    </Admin>
  );
};

export default MainPage;
