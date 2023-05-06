/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import Link from "next/link";

import makeStyles from '@mui/styles/makeStyles';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

// import styles from "/styles/jss/nextjs-material-kit-pro/components/FooterStyle.js";
import styles from "/styles/jss/nextjs-material-kit-pro/components/footerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function FooterLinks(props) {
  // const easeInOutQuad = (t, b, c, d) => {
  //   t /= d / 2;
  //   if (t < 1) return (c / 2) * t * t + b;
  //   t--;
  //   return (-c / 2) * (t * (t - 2) - 1) + b;
  // };

  // const smoothScroll = (e, target) => {
  //   if (window.location.pathname === "/sections") {
  //     var isMobile = navigator.userAgent.match(
  //       /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
  //     );
  //     if (isMobile) {
  //       // if we are on mobile device the scroll into view will be managed by the browser
  //     } else {
  //       e.preventDefault();
  //       var targetScroll = document.getElementById(target);
  //       scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
  //     }
  //   }
  // };
  // const scrollGo = (element, to, duration) => {
  //   var start = element.scrollTop,
  //     change = to - start,
  //     currentTime = 0,
  //     increment = 20;

  //   var animateScroll = function () {
  //     currentTime += increment;
  //     var val = easeInOutQuad(currentTime, start, change, duration);
  //     element.scrollTop = val;
  //     if (currentTime < duration) {
  //       setTimeout(animateScroll, increment);
  //     }
  //   };
  //   animateScroll();
  // };
  // var onClickSections = {};

  // const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <div>
      <div className={classes.left}>
        <List className={classes.list}>
          <ListItem className={classes.inlineBlock}>
            <a
              href="/"
              className={classes.block}
            >
              Home
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a
              href="/"
              className={classes.block}
            >
              Projects
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a
              href="/about-us"
              className={classes.block}
            >
              About us
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a
              href="/contact"
              className={classes.block}
            >
              Contact
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a
              href="/privacy-policy"
              className={classes.block}
            >
              Privacy Policy
            </a>
          </ListItem>
          {/* <ListItem className={classes.inlineBlock}>
            <a
              href="/licenses"
              className={classes.block}
            >
              Licenses
            </a>
          </ListItem> */}
        </List>
      </div>
      <div className={classes.right}>
        &copy; {1900 + new Date().getYear()} , All rights reserved{" "}by{" "}
        AI Start
      </div>
    </div>
  );
}

FooterLinks.defaultProps = {
  hoverColor: "primary"
};

FooterLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};
