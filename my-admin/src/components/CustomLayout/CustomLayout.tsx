import { Layout, LayoutProps } from "react-admin";
import CustomAppBar from "../CustomAppBar/CustomAppBar";
import { JSX } from "react/jsx-runtime";

const CustomLayout = (props: JSX.IntrinsicAttributes & LayoutProps) => {
  return <Layout {...props} appBar={CustomAppBar} />;
};

export default CustomLayout;
