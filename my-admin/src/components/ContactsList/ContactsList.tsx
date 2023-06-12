import { Datagrid, List, TextField } from "react-admin";

const ContactsList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="company" />
      <TextField source="job_title" />
      <TextField source="industry" />
      <TextField source="country" />
    </Datagrid>
  </List>
);

export default ContactsList;
