import React from "react";

import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";

import NavigationItems from "../Navigation Items/NavigationItems";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div className={classes.Logo}>
      <Logo></Logo>
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
