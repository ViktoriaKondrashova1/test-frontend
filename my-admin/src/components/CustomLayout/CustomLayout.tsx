import { Layout, LayoutProps } from "react-admin";
import CustomAppBar from "../CustomAppBar/CustomAppBar";

const CustomLayout = (props: LayoutProps) => {
  return <Layout {...props} appBar={CustomAppBar} />;
};

export default CustomLayout;
