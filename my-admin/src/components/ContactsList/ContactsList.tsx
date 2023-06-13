import { Datagrid, List, TextField } from "react-admin";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import NoResults from "../NoResults/NoResults";
import DetailsPanel from "../DetailsPanel/DetailsPanel";
import "./ContactsList.scss";

const ContactsList = () => (
  <List aside={<FilterSidebar />}>
    <Datagrid
      bulkActionButtons={false}
      rowClick="expand"
      expand={<DetailsPanel />}
      isRowExpandable={(row) => row}
      empty={<NoResults />}
      className="contacts-table"
      sx={{
        "& .RaDatagrid-headerCell": {
          backgroundColor: "#e7e8ef",
          height: "48px",
        },
        "& .RaDatagrid-row": {
          height: "56px",
        },
        "& .RaDatagrid-expandIcon": {
          display: "none",
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
