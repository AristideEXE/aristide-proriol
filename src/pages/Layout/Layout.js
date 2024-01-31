import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <p>HEADER</p>
      <Outlet />
      <p>FOOTER</p>
    </>
  );
};

export default Layout;
