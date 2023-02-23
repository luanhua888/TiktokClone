import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "src/components/Layouts/Header/Header.module.scss";
import images from "src/assets/images/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "src/components/Layouts/Popper";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }, 1000);
  });

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="logoTiktok" />
        </div>

        <Tippy
          content="Tìm kiếm"
          interactive={true}
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div {...attrs} className={cx("search-Result")} tabIndex="1">
              <PopperWrapper>
                <h4 className={cx('search-title')}>
                    Accounts
                </h4>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              placeholder="Search accounts and videos"
              spellCheck={false}
            />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            {/* icon loading */}
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon
                className={cx("search-icon")}
                icon={faMagnifyingGlass}
              />
            </button>
          </div>
        </Tippy>

        {/* Action */}
        <div className={cx("action")}>
          <button className={cx("btn-upload")}>Upload</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
