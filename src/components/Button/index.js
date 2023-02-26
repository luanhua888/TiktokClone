import React, { Children } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "src/components/Button/Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  children,
  to,
  href,
  onClick,
  primary = false,
  passProps,
  outline = false,
  small = false,
  large = false,
}) {
  let Comp = "button";

  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    large,
  });

  return (
    <Comp className={classes} {...props} >
      {children}
    </Comp>
  );
}

export default Button;
