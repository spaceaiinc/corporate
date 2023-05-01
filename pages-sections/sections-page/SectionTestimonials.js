import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
import FormatQuote from "@mui/icons-material/FormatQuote";
import Star from "@mui/icons-material/Star";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardFooter from "/components/Card/CardFooter.js";
import CardAvatar from "/components/Card/CardAvatar.js";
import Muted from "/components/Typography/Muted.js";
import Warning from "/components/Typography/Warning.js";

import testimonialsStyle from "/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/testimonialsStyle.js";

const useStyles = makeStyles(testimonialsStyle);

export default function SectionTestimonials({ ...rest }) {
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
    <div className="cd-section" {...rest}>
      <div
        className={
          classes.testimonials +
          " " +
          classes.sectionDark +
          " " +
          classes.testimonial2
        }
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Carousel {...settings}>
                <div>
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src="/img/faces/kendall.jpg" alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        {'"'}I speak yell scream directly at the old guard on
                        behalf of the future. I gotta say at that time I’d like
                        to meet Kanye I speak yell scream directly at the old
                        guard on behalf of the future. My brother Chance!!!
                        <br />
                        Thank you for letting me work on this masterpiece. One
                        of my favorite people.{'"'}
                      </h5>
                      <h4 className={classes.cardTitle}>Kendall Thompson</h4>
                      <Muted>
                        <h6>CEO @ Marketing Digital Ltd.</h6>
                      </Muted>
                    </CardBody>
                    <div>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                    </div>
                  </Card>
                </div>
                <div>
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src="/img/faces/christian.jpg" alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        {'"'}Thank you Anna for the invite thank you to the
                        whole Vogue team Called I Miss the Old Kanye At the God
                        {"'"}s last game Chop up the soul Kanye. I promise I
                        will never let the people down. I want a better life for
                        all!!! Pablo Pablo Pablo Pablo! Thank you Anna for the
                        invite thank you to the whole Vogue team.{'"'}
                      </h5>
                      <h4 className={classes.cardTitle}>Christian Louboutin</h4>
                      <Muted>
                        <h6>Designer @ Louboutin & Co.</h6>
                      </Muted>
                    </CardBody>
                    <div>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                    </div>
                  </Card>
                </div>
              </Carousel>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
