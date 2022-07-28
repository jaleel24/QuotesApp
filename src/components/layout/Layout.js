import { Fragment } from "react";
import  classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
// Line=9 we want to wrap all the routes which are in the app.js by Layout component so we will do this
const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};
export default Layout;
