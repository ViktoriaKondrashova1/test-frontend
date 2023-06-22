import {
  Pagination,
  PaginationActions as RaPaginationActions,
  PaginationActionsProps,
} from "react-admin";

const PaginationActions = (props: PaginationActionsProps) => (
  <RaPaginationActions {...props} />
);

const CustomPagination = () => {
  //   const { hasPreviousPage, hasNextPage, setPage, page } = useListContext();

  return (
    <Pagination ActionsComponent={PaginationActions} rowsPerPageOptions={[]} />
  );
};

export default CustomPagination;
