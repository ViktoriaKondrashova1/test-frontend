import { Datagrid, List, TextField } from "react-admin";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import "./ContactsList.scss";

const ContactsList = () => (
  <List aside={<FilterSidebar />}>
    <Datagrid
      rowClick="edit"
      sx={{
        "& .RaDatagrid-headerCell": {
          backgroundColor: "#e7e8ef",
          height: "48px",
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
