/* eslint-disable */
import React from "react";
import makeStyles from '@mui/styles/makeStyles';
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js"

import projectsStyle from "/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/projectsStyle.js";

const useStyles = makeStyles(projectsStyle);

export default function SectionGettingStarted({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.projects}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>
                Getting Started
              </h2>
              {/* <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your projects. Keep you user engaged by providing meaningful
                information.
              </h5> */}
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react?ref=njsmkp-projects-section-sections"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src="https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306"
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react?ref=njsmkp-projects-section-sections"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      Add To Your Work Channel Or DM
                    </h4>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmkp-projects-section-sections"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src={
                        "https://s3.amazonaws.com/creativetim_bucket/products/217/original/opt_mk_nextjs_thumbnail.jpg?1525851474"
                      }
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/217/original/opt_mk_nextjs_thumbnail.jpg?1525851474')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmkp-projects-section-sections"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      [@memo-ai read/ {`<your message>`}] make memo.ai save information
                    </h4>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react?ref=njsmkp-projects-section-sections"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src="https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbp_react_thumbnail.jpg?1509466309"
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbp_react_thumbnail.jpg?1509466309')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react?ref=njsmkp-projects-section-sections"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      [@memo-ai {`<question>`}] to answer your question from saved information
                    </h4>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
