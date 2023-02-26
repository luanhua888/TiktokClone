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
        src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/327526350_571646944865529_2660997415655939697_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=68bf5fRsQFYAX9VaVIR&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfCMmInHtkELBS_em6V-9uhLUXuEPay4gz2EA0XQb57ldA&oe=6400F610"
        alt="avatar"
      />

      <div className={cx("infor")}>

      <div>
          <span className={cx("fullname")}>Phạm Thoại An</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
      </div>

        <span className={cx("username")}>phamthoaian</span>
      </div>


    </div>
  );
}

export default AccountsItem;
