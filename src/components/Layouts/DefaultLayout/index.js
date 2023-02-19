import Header from "src/components/Layouts/Header/index.js";
import SideBar from "./SideBar";
import style from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import React from "react";


const cx = classNames.bind(style);
function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <SideBar />
        <div className={cx('content')}>{children}alo</div> 
      </div>
    </div>
  );
}

export default DefaultLayout;
