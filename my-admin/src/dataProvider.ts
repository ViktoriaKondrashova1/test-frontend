import { fetchUtils } from "react-admin";
import { getToken } from "./api/api";

const apiUrl = "http://3.65.149.62/test-api";

const httpClient = async (url: string, options: fetchUtils.Options = {}) => {
  const token = await getToken().then((value) => value.accessToken);
  const user = {
    token: `Bearer ${token}`,
    authenticated: !!token,
  };
  return fetchUtils.fetchJson(url, { ...options, user });
};

const dataProvider = {
  getContacts: async () => {
    const url = `${apiUrl}/contacts?range=%5B0%2C10%5D`;
    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(headers.get("content-range")!.split("/").pop()!, 10),
    }));
  },
  getContact: async (id: string) => {
    const url = `${apiUrl}/contacts/contact/${id}`;
    return httpClient(url).then(({ json }) => ({
      data: json,
    }));
  },
};

export default dataProvider;
