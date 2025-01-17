import * as React from "react";
import { graphql } from 'gatsby';
import PropTypes from "prop-types";
import showdown from 'showdown'

import Layout from "../components/Layout";
import Mailchimp from "../components/Mailchimp"

import golfer from "../img/golfer.png"
import ski from  "../img/ski.png"

// logos
import ey from  "../img/logos/EY.jpg"
import albego from "../img/logos/albego.jpg"
import mmp from "../img/logos/mmp.png"
import callaway from "../img/logos/callaway.png"
import kitzhof from "../img/logos/Kitzhof.png"
import beuerberg from "../img/logos/Logo_Beuerberg.png"
import b_services from "../img/logos/b_services.png"
import golf_leuk from "../img/logos/GolfLeuk_logo_.png"


export const EventsPageTemplate = ({
  golfturnier,
  skiweekend,
}) => {
  const converter = new showdown.Converter()
  return (
	<div>
	  <div
        className="full-width-image-container margin-top-0 banner-aktivitaeten banner"
        style={{
          backgroundImage: `url('/img/glove.jpg')`,

        }}
      >
	    <div
          className="banner-text"
	      style={{
		    marginRight: "50%"
		  }}
	    >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              backgroundColor: "#f40",
		      color: "white",
		      lineHeight: "2.3",
            }}
          >

	        Unsere Aktivitäten
          </h1>

	      <h3><b>Spass haben und Gutes tun: Seien Sie dabei!</b></h3>
	    </div>
      </div>

	  <div>
	    <section className="section">
          <div className="container">
            <div id="golf-turnier" className="content">
	          <img src={golfer} />
	          <div
	            style={{
	              margin: "2em auto",
                }}
	          >
	            <br />
	            <br />
	            {/*
	                <p style={{display: "flex", alignItems: "center"}}><a
	                style={{
	                background: "#0023A5",
	                color: "white",
	                margin: "1em auto",
	                padding: "1em",
                    }}
                    >Hier vormerken </a></p>
	              */}
	            <h3 className="has-text-weight-semibold">{golfturnier.title}</h3>
	    	    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(golfturnier.body)}} />
                <br/>
                <br/>
                <br/>
	            <div className="partner-logos-container">
	              <h3 style={{color: "#0023A5"}}>Unsere Partner:</h3>
	              <div className="partner-logos">
	                <img src={ey} />
	                <img src={mmp} />
	                <img src={albego} />
	                <img src={kitzhof} />
	                <img src={callaway} />
	                <img src={b_services} />
	                <img src={beuerberg} />
	                <img src={golf_leuk} />
	              </div>
	            </div>
	          </div>
            </div>
          </div>
        </section>
	    <div style={{background: "#033277"}}>
	      <div style={{width: "70%", display: "flex", margin: "0 auto", padding: "2em"}} className="newsletter-box">
	        <h4 style={{color: "white", fontSize: "2.5rem", fontWeight: "bold"}}>Bleiben Sie informiert!</h4>
	        <div style={{display: "flex", flexDirection: "column"}}>
	          <p style={{color: "white", marginTop: "1em", fontSize: "1rem"}}>Wir informieren Sie über unsere laufenden Projekte, wie ihre Spenden vor Ort Gutes tun und senden ihnen Einladungen zu unseren Veranstaltungen.</p>
	          <Mailchimp />
	        </div>
	      </div>
        </div>
	    <section className="section">
          <div className="container">
            <div id="ski-weekend" className="content">
	          <img src={ski} />
	          <div
	            style={{
	              margin: "2em auto",
                }}
	          >
	            {/*
	                <p style={{display: "flex", alignItems: "center"}}><a
	                style={{
	                background: "#0023A5",
	                color: "white",
	                margin: "1em auto",
	                padding: "1em",
                    }}
                    >Hier vormerken </a></p>
	              */}
	          </div>
	          <h3 className="has-text-weight-semibold">{skiweekend.title}</h3>
	    	  <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(skiweekend.body)}} />
            </div>
          </div>
        </section>
	  </div>
	</div>
  )
}


const EventsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
	<Layout>
	  <EventsPageTemplate
        golfturnier={frontmatter.golfturnier}
        skiweekend={frontmatter.skiweekend}
	  />
	</Layout>
  );
};

EventsPageTemplate.propTypes = {
  golfturnier: PropTypes.object,
  skiweekend: PropTypes.object,
};

EventsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default EventsPage

export const pageQuery = graphql`
  query EventsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "events-page" } }) {
      frontmatter {
        golfturnier {
          title
          body
        }
        skiweekend {
          title
          body
        }
      }
    }
  }
`;
