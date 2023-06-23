import { Datagrid, List, TextField } from "react-admin";
import NoResults from "../NoResults/NoResults";
import DetailsPanel from "../DetailsPanel/DetailsPanel";
import NameField from "../NameField/NameField";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import CustomPagination from "../CustomPagination/CustomPagination";
import "./ContactsList.scss";

const ContactsList = () => {
  return (
    <List
      actions={false}
      aside={<FilterSidebar />}
      pagination={<CustomPagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick="expand"
        expand={<DetailsPanel />}
        empty={<NoResults />}
        expandSingle
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
