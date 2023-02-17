import React from "react";
import classNames from "classnames/bind";

const cx = classNames.bind();

function Header() {
  return (
    <>
      <h2>Header</h2>
      <header className={cx("wrapper")}></header>
    </>
  );
}

export default Header;
