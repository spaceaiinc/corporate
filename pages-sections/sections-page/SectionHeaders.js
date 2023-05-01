import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import makeStyles from '@mui/styles/makeStyles';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import Share from "@mui/icons-material/Share";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
// core components
import Header from "/components/Header/Header.js";
import Button from "/components/CustomButtons/Button.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CustomInput from "/components/CustomInput/CustomInput.js";

import headersStyle from "/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/headersStyle.js";

const useStyles = makeStyles(headersStyle);

export default function SectionHeaders({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <div className="cd-section" {...rest}>
      {/* <div className={classes.sectionBlank} id="blanksection" /> */}
      {/* HEADER 1 START */}
      <div>
        <Header
          absolute
          brand="AI Start"
          color="transparent"
          links={
            <div className={classes.collapse}>
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Projects
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    About us
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Contact
                  </Button>
                </ListItem>
              </List>
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button
                    color="transparent"
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    className={classes.navLink + " " + classes.navLinkJustIcon}
                  >
                    <i className={"fab fa-twitter"} />
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    color="transparent"
                    href="https://www.facebook.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    className={classes.navLink + " " + classes.navLinkJustIcon}
                  >
                    <i className={"fab fa-facebook"} />
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    color="transparent"
                    href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                    target="_blank"
                    className={classes.navLink + " " + classes.navLinkJustIcon}
                  >
                    <i className={"fab fa-instagram"} />
                  </Button>
                </ListItem>
              </List>
            </div>
          }
        />
        <div
          className={classes.pageHeader}
          style={{ backgroundImage: "url('/img/bg12.jpg')" }}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>Expert AI</h1>
                <h4>
                  Help Your Business With Long Memory AI
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                  target="_blank"
                  rel=""
                >
                  <i className="fas fa-ticket-alt" />
                  Add To Slack
                </Button>
              </GridItem>
              <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
                <div className={classes.iframeContainer}>
                  <iframe
                    height="250"
                    src="https://www.youtube.com/embed/IN6QnLpVEPI?ref=creativetim"
                    // frameBorder="0"
                    allow="encrypted-media"
                    allowFullScreen=""
                    title="Tesla"
                  />
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
