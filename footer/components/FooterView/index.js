import * as React from "react";
import styles from "./index.module.css";
const FooterView = ({ info }) => (
  <footer className={styles.pageFooter}>Footer goes here:{info}</footer>
);

export default FooterView;
