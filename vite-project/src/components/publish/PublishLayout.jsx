import { Outlet } from "react-router-dom";
import PublishingIndexHeader from "./PublishingIndexHeader";
// import PublishingIndexFooter from "./PublishingIndexFooter";

const PublishLayout = (props) => {
  return (
    <>
      <PublishingIndexHeader></PublishingIndexHeader>
      {props.children ? props.children : <Outlet />}
      {/* <PublishingIndexFooter></PublishingIndexFooter> */}
    </>
  );
};

export default PublishLayout;
