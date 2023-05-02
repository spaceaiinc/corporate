import React from "react";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
import Chat from "@mui/icons-material/Chat";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import Fingerprint from "@mui/icons-material/Fingerprint";
import GroupWork from "@mui/icons-material/GroupWork";
import Airplay from "@mui/icons-material/Airplay";
import LocationOn from "@mui/icons-material/LocationOn";
import Extension from "@mui/icons-material/Extension";
import ChildFriendly from "@mui/icons-material/ChildFriendly";
import WatchLater from "@mui/icons-material/WatchLater";
import Code from "@mui/icons-material/Code";
import FormatPaint from "@mui/icons-material/FormatPaint";
import Dashboard from "@mui/icons-material/Dashboard";
import ViewCarousel from "@mui/icons-material/ViewCarousel";
import AccessTime from "@mui/icons-material/AccessTime";
import AttachMoney from "@mui/icons-material/AttachMoney";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import featuresStyle from "/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/featuresStyle.js";

const useStyles = makeStyles(featuresStyle);

export default function SectionFeatures({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        <div className={classes.features3}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.phoneContainer}>
                <img src="/img/sections/iphone.png" alt="..." />
              </div>
            </GridItem>
            {/* <GridItem xs={12} sm={6} md={6} pt={10} className={classes.mlAuto}>
              <div className={classes.iframeContainer}>
                <iframe
                  height="300"
                  width="100%"
                  src="https://www.youtube.com/embed/IN6QnLpVEPI?ref=creativetim"
                  frameBorder="0"
                  allow="encrypted-media"
                  allowFullScreen=""
                  title="Tesla"
                />
              </div>
            </GridItem> */}
            <GridItem xs={12} sm={6} md={6}>
              <h2
                className={classes.title}
                style={{
                  textAlign: "center",
                }}
              >Your work will be much easier</h2>
              <InfoArea
                className={classes.infoArea}
                icon={Extension}
                title="GPT in Slack"
                description="You can use GPT in Slack to generate text, answer questions, and summarize documents. It's a great way to get started to work with GPT"
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={WatchLater}
                title="Long Memory"
                description="You can make GPT remember things for you. It's a great way to get started to work with GPT"
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={ChildFriendly}
                title="Easy to Use"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="primary"
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
