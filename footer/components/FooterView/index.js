import * as React from "react";
import styles from "./index.module.css";

const generateRandomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

const FooterView = ({ info, updateColor }) => {
  return (
    <footer
      onClick={() => {
        updateColor ? updateColor(generateRandomColor()) : null;
      }}
      className={styles.pageFooter}
    >
      Footer goes here:{info}
    </footer>
  );
};

export default FooterView;
