/*eslint-disable*/ import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from '@mui/styles/makeStyles';
// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import FooterLinks from "/components/Footer/FooterLinks.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import indexStyle from "/styles/jss/nextjs-material-kit-pro/pages/indexStyle.js";

// Sections for this page
import SectionProduct from "/pages-sections/index-page/SectionProduct.js";
import SectionTeam from "/pages-sections/index-page/SectionTeam.js";
import SectionWork from "/pages-sections/index-page/SectionWork.js";

const useStyles = makeStyles(indexStyle);

export default function Index({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Header
        color="transparent"
        brand="AI Start"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        // changeColorOnScroll={{
        //   height: 300,
        //   color: "white"
        // }}
        {...rest}
      />
      {/* <Parallax image="/img/bg8.jpg" filter="dark"> */}
      <Parallax>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>AI Start</h1>
              <h4>
                Make Work Easier With AI
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
        <div className={classes.container}>
          <SectionProduct />
        {/* <SectionTeam /> */}
        {/* <SectionWork /> */}
      </div>
      <Footer
        content={<FooterLinks />}
      />
    </div>
  );
}
