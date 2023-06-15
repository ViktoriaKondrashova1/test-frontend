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
  getList: async (
    resource: string,
    params: {
      pagination: { page: any; perPage: any };
      sort: { field: any; order: any };
      filter: any;
    }
  ) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${JSON.stringify(query)}`;
    // const url = `${apiUrl}/contacts?range=%5B0%2C10%5D`;
    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(headers.get("content-range")!.split("/").pop()!, 10),
    }));
  },
  getOne: async (id: string) => {
    const url = `${apiUrl}/contacts/contact/${id}`;
    return httpClient(url).then(({ json }) => ({
      data: json,
    }));
  },
  getCountries: async () => {
    const url = `${apiUrl}/contacts/countries`;
    return httpClient(url).then(({ json }) => ({
      data: json,
    }));
  },
  getMany: () => {},
  getManyReference: () => {},
  create: () => {},
  update: () => {},
  updateMany: () => {},
  delete: () => {},
  deleteMany: () => {},
};

export default dataProvider;
