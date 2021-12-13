import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import baby from "../img/ultrasound.jpg"

const ProjektePage = ({ data }) => {
  return (
	  <Layout>
	  <img src={baby} />
	          <div
          className="full-width-image-container margin-top-0 banner"
          style={{
              backgroundImage: `{baby}`,

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
	  Projekte
        </h1>
	  <h3><b>Hilfe für die Schwächsten. Direkt und lebensrettend.</b></h3>
	    </div>
        </div>
    </Layout>
  );
};

export default ProjektePage;