import * as React from "react";
import styles from "./index.module.css";
const Header = ({ info, bgColor }) => (
  <header
    style={bgColor ? { backgroundColor: bgColor } : {}}
    className={styles.pageHeader}
  >
    Header goes here - {info}
  </header>
);

export default Header;
