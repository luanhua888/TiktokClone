import React from "react";
import classNames from "classnames/bind";
import styles from "src/components/AccountItem/AccountsItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AccountsItem({ children }) {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_300x300.webp?x-expires=1677387600&x-signature=Nfzh5TlFme4xLCnA9muNvoKDUUg%3D"
        alt="avatar"
      />

      <div className={cx("infor")}>

      <div>
          <span className={cx("fullname")}>Ngô Ngọc Hòa</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
      </div>

        <span className={cx("username")}>ngongochoa</span>
      </div>


    </div>
  );
}

export default AccountsItem;
