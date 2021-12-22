import React from "react";
import descoverimg from "../../Assets/Images/metalife.5ec26818.svg";

export default function TrailerVideo() {
  return (
    <section className="trailar_video_section">
      <article>
        <div className="container">
          <h1>Trailer video</h1>
        </div> 
        <div className="iframe_wrapper">
          <iframe
            src="https://player.vimeo.com/video/649166035?h=c3df0b9282"
            style={{ overflow: "hidden", height: "100%", width: "100%" }}
            height="100%"
            width="100%"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Iframe Example"
          ></iframe>
        </div>
        <div className="mt-xl-5 mt-lg-4">
          <div  className="link_wrapper container">
          <a href="#" className="link_btn">
            <img className="me-4" src={descoverimg} alt="DISCOVER META-LIFE" />
            <p>DISCOVER META-LIFE</p>
          </a>
          <a href="#" className="link_btn"><p>LITE PAPER META-LIFE</p></a>
          </div>
        </div>
      </article>
    </section>
  );
}
