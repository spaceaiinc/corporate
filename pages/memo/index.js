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
import SectionProduct from "/pages-sections/memo-index-page/SectionProduct.js";
import SectionTeam from "/pages-sections/memo-index-page/SectionTeam.js";
import SectionWork from "/pages-sections/memo-index-page/SectionWork.js";

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
              <h1 className={classes.title}>Memo AI</h1>
              <h4>
                Help Your Business With Long Memo AI
              </h4>
              <br />
              <a
                href="https://slack.com/oauth/v2/authorize?client_id=5140938213351.5168113999441&scope=app_mentions:read,channels:history,chat:write,groups:history,im:history,mpim:history&user_scope="
                style={{
                  alignItems: 'center',
                  color: '#000',
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  display: 'inline-flex',
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '16px',
                  fontWeight: '600',
                  height: '56px',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  width: '296px',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ height: '20px', width: '20px', marginRight: '12px' }}
                  viewBox="0 0 122.8 122.8"
                >
                  <path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z" fill="#e01e5a"></path><path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z" fill="#36c5f0"></path><path d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z" fill="#2eb67d"></path><path d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z" fill="#ecb22e">
                  </path>
                </svg>
                Add to Slack
              </a>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.container}>
        <SectionProduct />
        <SectionTeam />
        {/* <SectionWork /> */}
      </div>
      <Footer
        content={<FooterLinks />}
      />
    </div>
  );
}
