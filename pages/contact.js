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
import FooterLinks from "/components/Footer/FooterLinks.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import Button from "/components/CustomButtons/Button.js";

import contactStyle from "/styles/jss/nextjs-material-kit-pro/pages/contactStyles.js";

const useStyles = makeStyles(contactStyle);

export default function Contact({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  // Submit form
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }
    console.log("submit", name, email, message);
  };


  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Header
        absolute
        color="transparent"
        brand="AI Start"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          // backgroundImage: "url('/img/clint-mckoy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        {/* <div className={classes.container}> */}
        <div className={classes.contentCenter}>
          <h2 className={classes.title}>Send us a message</h2>
          {/* <GridContainer>
              <GridItem md={6} sm={6}> */}
          <p>
            You can contact us with anything related to our Products. We
            {"'"}ll get in touch with you as soon as possible.
            <br />
            <br />
          </p>
          <form>
            <CustomInput
              labelText="Your Name*"
              id="float"
              formControlProps={{
                fullWidth: true,
                onChange: (e) => {
                  e.preventDefault();
                  setName(e.target.value);
                }
              }}
            />
            <CustomInput
              labelText="Email address*"
              id="float"
              formControlProps={{
                fullWidth: true,
                onChange: (e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                }
              }}
            />
            <CustomInput
              labelText="Your message*"
              id="float"
              formControlProps={{
                fullWidth: true,
                onChange: (e) => {
                  e.preventDefault();
                  setMessage(e.target.value);
                }
              }}
              inputProps={{
                multiline: true,
                rows: 6
              }}
            />
            <div className={classes.textCenter}>
              {!name || !email || !message ?
                <Button
                  color="black"
                  round
                  onClick={handleSubmit}
                >
                  Contact us
                </Button>
                :
                <Button
                  color="primary"
                  round
                  onClick={handleSubmit}
                >
                  Contact us
                </Button>
              }
            </div>
          </form>
        </div>
      </div>
      <Footer
        content={<FooterLinks />}
      />
    </div>
  );
}
