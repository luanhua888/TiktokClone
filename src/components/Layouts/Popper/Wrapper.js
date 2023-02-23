import React from "react";
import classNames from "classnames/bind";
import styles from "src/components/Layouts/Popper/Popper.module.scss";

const cx = classNames.bind(styles);
function Wrapper({ children}) {
  return <div className={cx("wrapper")}>{children}</div>;
}
export default Wrapper;
