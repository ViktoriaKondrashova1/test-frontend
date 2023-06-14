import { Layout, LayoutProps } from "react-admin";
import CustomAppBar from "../CustomAppBar/CustomAppBar";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import { JSX } from "react/jsx-runtime";

const CustomLayout = (props: JSX.IntrinsicAttributes & LayoutProps) => {
  return (
    <Layout
      {...props}
      appBar={CustomAppBar}
      sidebar={FilterSidebar}
      sx={{
        "& .RaLayout-appFrame": { marginTop: 0, backgroundColor: "white" },
        "& .RaLayout-content": { backgroundColor: "white" },
      }}
    />
  );
};

export default CustomLayout;
