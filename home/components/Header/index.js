import * as React from "react";
import styles from "./index.module.css";
const Header = ({ info }) => (
  <header className={styles.pageHeader}>Header goes here - {info}</header>
);

export default Header;
