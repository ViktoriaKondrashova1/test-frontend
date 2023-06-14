import { Datagrid, List, TextField } from "react-admin";
import NoResults from "../NoResults/NoResults";
import DetailsPanel from "../DetailsPanel/DetailsPanel";
import NameField from "../NameField/NameField";
import "./ContactsList.scss";

const ContactsList = () => {
  return (
    <List actions={false}>
      <Datagrid
        bulkActionButtons={false}
        rowClick="expand"
        expand={<DetailsPanel />}
        isRowExpandable={(row) => row}
        empty={<NoResults />}
      >
        <NameField source="company" label="Full name" />
        <TextField source="job_title" />
        <TextField source="industry" />
        <TextField source="country" label="Location" />
      </Datagrid>
    </List>
  );
};

export default ContactsList;
