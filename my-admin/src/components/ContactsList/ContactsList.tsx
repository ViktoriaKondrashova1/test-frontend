import { Datagrid, List, TextField } from "react-admin";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import NoResults from "../NoResults/NoResults";
import "./ContactsList.scss";

const ContactsList = () => (
  <List aside={<FilterSidebar />}>
    <Datagrid
      bulkActionButtons={false}
      rowClick="edit"
      empty={<NoResults />}
      sx={{
        "& .RaDatagrid-headerCell": {
          backgroundColor: "#e7e8ef",
          height: "48px",
        },
        "& .RaDatagrid-row": {
          height: "56px",
        },
      }}
    >
      <TextField source="company" label="Full name" />
      <TextField source="job_title" />
      <TextField source="industry" />
      <TextField source="country" label="Location" />
    </Datagrid>
  </List>
);

export default ContactsList;
