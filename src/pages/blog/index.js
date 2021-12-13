import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

import golfer from "../../img/golfer.png"
import bmw from "../../img/bmw.png"
import callaway from "../../img/callaway.png"
import mmp from "../../img/mmp.png"
import ski from  "../../img/ski.png"

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
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
        <section className="section">
          <div className="container">
            <div id="golf-tunier" className="content">
	    <img src={golfer} />
	    <div
	style={{
	    margin: "2em auto",
        }}
	    >
	    <p>Am 6. Mai 2022 ist es soweit! Mit dem Charity Golfturnier auf der wunderschönen Anlage in Lippers wil startet Bärenherz seine Charity Aktivitäten. Das Golfturnier soll ein fester Bestandteil in unserem jährlichen Aktivitätenprogramm werden. </p>
<p>Starten möchten wir mit 48 aktiven Teilnehmern, die im Scramble Modus – also als Team – versu chen, den Sieg zu erringen. Der Teamgedanke soll ganz klar im Vordergrund stehen, denn als Team wollen alle Teilnehmer eines erreichen: Die Unterstützung unseres Projektes und damit die Hilfe für diejenigen, die es wirklich notwendig benötigen. </p>
<p>Aber auch der Spass wird an diesem Tag sicher nicht zu kurz kommen. Nach dem standesgemässen Empfang am 1. Abschlag erwartet die Teilnehmer eine Runde auf einem der schönsten Golfplätze der Bodensee Region. Für die entsprechende Zwischenverpflegung wird ebenso gesorgt wie für einen or dentlichen Empfang nach der Runde. Am Abend steht das grosse Galadinner auf dem Programm, bei dem neben einer hochkarätigen Tombola auch aussergewöhnliche Objekte zur Versteigerung kommen. </p>
	    <p style={{display: "flex", alignItems: "center"}}><a
	  style={{
	      background: "#0023A5",
	      color: "white",
	      margin: "1em auto",
	      padding: "1em",
        }}
>Hier vormerken </a></p>
	    <p>Lassen Sie Sich überraschend und geniessen Sie mit uns einen unvergessenen Tag. Für uns selbst, aber auch für diejenigen, denen der Erlös des Turniers zu Gute kommt. Weitere Details, das Pro gramm und das Anmeldeformular stehen voraussichtlich Ende Januar 2022 hier zur Verfügung. Wir freuen uns auf Sie! </p>
	    <div>
	    <h3 style={{color: "#0023A5", marginTop: "2em"}}>Unsere Partner:</h3>
	    <div className="golf-tunier-partner-logos">
	    <img />
	    <img src={bmw} style={{width: "5em"}}/>
	    <img src={callaway}  style={{width: "8em"}}/>
	    <img src={mmp}  style={{width: "9em"}}/>	    
	    </div>
	    </div>
	    </div>
            </div>
          </div>
            </section>
	    <div style={{background: "#0023a5", display: "flex", padding: "2em"}}>
	    <h3 style={{color: "white", padding: "1em", fontSize: "2em", fontWeight: "bold"}}>Keine Veranstaltung verpassen</h3>
	    <div>
	    <p style={{color: "white", padding: "1em", fontSize: "1.6vw"}}>Wir informieren Sie unsere laufenden Projekte, wie ihre Spenden vor Ort Gutes tun und senden ihnen Einladungen zu unseren Veranstaltungen.</p>

	    </div>
	    </div>
	            <section className="section">
          <div className="container">
            <div id="ski-tag" className="content">
	    <img src={ski} />
	    <div
	style={{
	    margin: "2em auto",
        }}
	    >
	    <p>Als zweiten Charity-Event planen wir im Dezember 2022 ein Ski-Wochenende in den Schweizer Alpen unter kompetenter Leitung unseres Vizepräsidenten Andy Wenzel, ehemaliger Ski-Weltmeister, Welt cup-Sieger und Olympiazweiter. Weitere Details folgen in Kürze. </p>
	    <p style={{display: "flex", alignItems: "center"}}><a
	  style={{
	      background: "#0023A5",
	      color: "white",
	      margin: "1em auto",
	      padding: "1em",
        }}
>Hier vormerken </a></p>

	    <div>
	    <h3 style={{color: "#0023A5", marginTop: "2em"}}>Unsere Partner:</h3>
	    <div className="golf-tunier-partner-logos">
	    <img />
	    <img src={bmw} style={{width: "5em"}}/>
	    <img src={callaway}  style={{width: "8em"}}/>
	    <img src={mmp}  style={{width: "9em"}}/>	    
	    </div>
	    </div>
	    </div>
            </div>
          </div>
            </section>
      </Layout>
    );
  }
}
