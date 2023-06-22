import {
  Pagination,
  PaginationActions as RaPaginationActions,
  PaginationActionsProps,
  PaginationProps,
} from "react-admin";

const PaginationActions = (props: PaginationActionsProps) => (
  <RaPaginationActions {...props} />
);

const CustomPagination = (props: PaginationProps) => {
  return (
    <Pagination
      ActionsComponent={PaginationActions}
      rowsPerPageOptions={[]}
      {...props}
    />
  );
};

export default CustomPagination;
