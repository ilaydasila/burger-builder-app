import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../Navigation Items/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo></Logo>
        </div>
        <nav className={classes.DesktopOnly}>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
