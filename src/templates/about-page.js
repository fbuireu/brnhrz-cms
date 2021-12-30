import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Content, { HTMLContent } from "../components/Content";

import Layout from "../components/Layout";

import Mailchimp from "../components/Mailchimp"
import Statuten from "../components/Statuten"

// eslint-disable-next-line
export const AboutPageTemplate = ({ philosophie, vorstand }) => {
    return (
	<div>
		    <div
        className="full-width-image-container margin-top-0 banner-aktivitaeten banner"
        style={{
            backgroundImage: `url('/img/philosophie.jpg')`,
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
	    Philosophie
        </h1>
	    <h3><b>Direkte Hilfe, unbürokratisch und schnell.</b></h3>
	    </div>
            </div>

	  <section className="section section--gradient">
      <div className="container">
          <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
	    <div id="philosophie">
	    <h3>{philosophie.title}</h3>
	    <p>{philosophie.body}</p>
	    <br />
	    <br />
	    <div style={{background: "#D0E4F5"}}>
	    <div style={{width: "90%", display: "flex", flexDirection: "column", margin: "0 auto"}}>
	    <h3 style={{padding: "1em 4em", textAlign: "center", fontWeight: "bold"}}>Die Philosophie unseres Vereins beruht auf drei Grundgedanken:</h3>
	    <div className="circle-container" style={{display: "flex", justifyContent: "space-between"}}>
	    <div className="circle-section">
	    <div className="circle-with-text">
	    Hilfe zur Selbsthilfe
	</div>
	    <p>So wie in der Vergangenheit bei Project Hope e.V. leisten auch wir in den von uns unterstützen Projekten Hilfe zur Selbsthilfe: Wir wollen nicht einfach materielle Zuwendun gen geben, sondern aktiv die jeweilige Notsituation so verbessern, dass mittel- bis langfristig eine nachhaltige Verbesserung erreicht werden kann. </p>
	    </div>
	    <div  className="circle-section">
	    <div className="circle-with-text">
	    Ehrenamtlich aus Überzeugung
	</div>
	    <p>Wir arbeiten ehrenamtlich und aus Überzeugung: Alles was wir bewegen, machen wir mit viel Freunde und Elan in unserer Freizeit, weil wir wissen, dass wir damit einen wertvollen Beitrag für Leben unter lebenswerten Bedingungen leisten können.</p>
	    </div>
	    
	    <div className="circle-section">
	    <div className="circle-with-text">
	    Unnötige Kosten vermeiden
        </div>
	    <p>Wir wollen unnötige Kosten vermeiden: Unsere administrativen Aufwendungen halten wir auf einem Minimum und finanzieren diese intern durch unsere Mitgliedbeiträge und sonstigen finanziellen Zuwendungen der Mitglieder und Vorstände.</p>
	    </div>
	    
	</div>
	    <div>
	    <p style={{padding: "1em"}}>Diese Hilfe erreichen wir im Wesentlichen mit unseren Charity Aktionen. Hier möchten wir in einem spannenden Umfeld gemeinsam Spass haben aber gerade mit dem Wissen über un sere persönliche privilegierte Lebenssituation auch einen Teil an diejenigen weiterreichen, denen es nicht so gut geht. Das ist unser Antrieb und unsere Motivation.</p>
	    </div>
	    </div>

	</div>

	    <div id="vorstand" style={{width: "65%", margin: "3em auto 4em auto"}}>
	    <div>
	    <h2 className="title has-text-weight-bold is-bold-light" style={{color: "#0023A5", fontSize: "3rem"}}>{vorstand.title}</h2>
	    <div>
	    {vorstand.body}
	    </div>
	    </div>
	    </div>

	
	
	    <div style={{background: "#033277"}}>
	    <div style={{width: "70%", display: "flex", margin: "0 auto", padding: "2em"}} className="newsletter-box">
	    <h4 style={{color: "white", fontSize: "2.5rem", fontWeight: "bold"}}>Bleiben Sie informiert!</h4>
	    <div style={{display: "flex", flexDirection: "column"}}>
	    <p style={{color: "white", marginTop: "1em", fontSize: "1rem"}}>Wir informieren Sie über unsere laufenden Projekte, wie ihre Spenden vor Ort Gutes tun und senden ihnen Einladungen zu unseren Veranstaltungen.</p>
	    <Mailchimp />
	    </div>
	    </div>
            </div>

	    <div id="statuten" style={{margin: "4em auto", width: "65%"}}>
	    <Statuten />
	    </div>
	    
	</div>

      	    <div className="mitgliedschaft-testimony">
	    <h4 style={{color: "white"}}>„Mit meiner Mitgliedschaft kann ich die großartige
	Arbeit von Bärenherz unterstützen und habe
	das gute Gefühl, eine Hilfe zu leisten, die auch
	ankommt.“</h4>
	    <div style={{lineHeight: "0.2", marginTop: "4em"}}>
	    <h4 style={{margin: "1em"}}><b>Arno Bohn</b></h4>
	    <h4>Selbständiger Unternehmer, Freiburg im Breisgau</h4>
	    </div>
	    </div>
	
            </div>
          </div>
        </div>
      </div>
	  </section>
	    </div>
  );
};

AboutPageTemplate.propTypes = {
  philosophie: PropTypes.object,
  vorstand: PropTypes.object,
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
    return (
	    <Layout>
	    	  <AboutPageTemplate
        philosophie={frontmatter.philosophie}      
        vorstand={frontmatter.vorstand}      
	  />
	</Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;


export const aboutPageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        philosophie {
          title
          body
        }
        vorstand {
          title
          body
        }
      }
    }
  }
`;
