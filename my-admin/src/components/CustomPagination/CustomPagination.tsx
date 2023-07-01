import {
  Pagination,
  PaginationActions,
  PaginationProps,
  useListContext,
} from "react-admin";

const Actions = (props: {}) => (
  <PaginationActions
    page={1}
    rowsPerPage={10}
    count={0}
    onPageChange={() => {}}
    {...props}
  />
);

const CustomPagination = (props: PaginationProps) => {
  const { page, setPage } = useListContext();

  if (page >= 7) {
    setPage(6);
    const popUp = document.querySelector<HTMLElement>(".popup");
    popUp!.style.opacity = "1";
    popUp!.style.visibility = "visible";
  }

  return <Pagination rowsPerPageOptions={[]} actions={Actions} {...props} />;
};

export default CustomPagination;
