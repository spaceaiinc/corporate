import React from "react";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
// sections of this Page
import SectionHeaders from "/pages-sections/sections-page/SectionHeaders.js";
import SectionFeatures from "/pages-sections/sections-page/SectionFeatures.js";
import SectionBlogs from "/pages-sections/sections-page/SectionBlogs.js";
import SectionTeams from "/pages-sections/sections-page/SectionTeams.js";
import SectionProjects from "/pages-sections/sections-page/SectionProjects.js";
import SectionPricing from "/pages-sections/sections-page/SectionPricing.js";
import SectionTestimonials from "/pages-sections/sections-page/SectionTestimonials.js";
import SectionContacts from "/pages-sections/sections-page/SectionContacts.js";
import Footer from "/components/Footer/Footer.js";
import FooterLinks from "/components/Footer/FooterLinks.js";

import sectionsPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/sectionsPageStyle.js";

const useStyles = makeStyles(sectionsPageStyle);

export default function SectionsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <div className={classes.main}>
        <SectionHeaders id="headers" />
        <SectionFeatures id="features" />
        {/* <SectionBlogs id="blogs" /> */}
        {/* <SectionTeams id="teams" /> */}
        {/* <SectionTestimonials id="testimonials" /> */}
        {/* <SectionPricing id="pricing" /> */}
        {/* <SectionProjects id="projects" /> */}
        {/* <SectionContacts id="contacts" /> */}
      </div>
      <Footer
        content={<FooterLinks />}
        theme="white"
      />
    </div>
  );
}
