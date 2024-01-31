import { Outlet } from "react-router";
import styles from "./Layout.module.css";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <>
    <Header/>
      <div className={styles.content}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
