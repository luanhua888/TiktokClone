import React from "react";
import classNames from "classnames/bind";
import styles from "src/components/AccountItems/AccountItems.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);
function AccountsItem({ children }) {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("avatar")} src="" alt="avatar" />
      <div className={cx("infor")}>
        <p className={cx("name")}>
          x<span>Nguyen Van A</span>
          <FontAwesomeIcon icon={["fas", "check-circle"]} />
        </p>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountsItem;
