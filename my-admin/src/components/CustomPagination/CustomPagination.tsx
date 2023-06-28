import {
  Pagination,
  PaginationActions,
  PaginationActionsProps,
  PaginationProps,
  useListContext,
} from "react-admin";

const Actions = (props: PaginationActionsProps) => {
  return <PaginationActions {...props} />;
};

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
