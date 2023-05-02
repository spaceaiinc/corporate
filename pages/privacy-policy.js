/*eslint-disable*/
import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import privacyPolicyStyle from "/styles/jss/nextjs-material-kit-pro/pages/privacyPolicyStyles.js";
import FooterLinks from "../components/Footer/FooterLinks";

const useStyles = makeStyles(privacyPolicyStyle);

export default function privacyPolicy({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="AI Start"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        {...rest}
      />
      <div className={classes.contactContent}>
        <div className={classes.container}>
          <h2 className={classes.title}>Send us a message</h2>
          <GridContainer>
            <GridItem md={6} sm={6}>
              <p>
                You can contact us with anything related to our Products. We
                {"'"}ll get in touch with you as soon as possible.
                <br />
                <br />
              </p>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer
        content={<FooterLinks />}
      />
    </div>
  );
}
