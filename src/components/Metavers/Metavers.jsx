import React from "react";
import metaversimg from "../../Assets/Images/metavers-section.png";

export default function Metavers() {
  return (
    <section className="metaver_section">
      <article className="container">
        <div>
          <img src={metaversimg} alt="metavers image" />
          <p>
            <span className="bold">
              The purpose of Meta Cards is to{" "}
              <span className="underline">create our own Metaverse :</span>{" "}
              <a href="#">META LIFE</a>
            </span>
          </p>
          <p>
            You will be the <span className="bold">instigators</span> of this
            new world thanks to a <span className="bold">future DAO</span>.
          </p>
          <p>
            You will be a <span className="bold">member of the community</span>,
            and will decide about{" "}
            <span className="bold">the future of META LIFE</span>.
          </p>
          <p>
            You will be able to{" "}
            <span className="bold">incarnate your own Legend</span> in this
            Metaverse where the possibilities will be infinite similarly to the
            gaming world (FPS games, competitions, Spatial races, Easter eggs)
            as well as events like concerts, festivals etc.
          </p>
          <p>
            You will also have the possibility to{" "}
            <span className="bold">generate income</span> in this Metaverse
            thanks to the <span className="bold">Play to Earn technology</span>.
          </p>
          <p className="mb-0">
            You will be the{" "}
            <span className="bold">
              owner of your own Land, house, vehicles, and several other
              incredible assets !
            </span>
          </p>
          <p>
            We are also working on a proprietary system where a land will have a
            real value (we are very well aware and sensitive about supply and
            ownership problems in virtual worlds, and definitely aim to solve
            this).
          </p>
          <p>
            Discover all the possibilities that Meta Life will propose by
            clicking there.
          </p>
        </div>
      </article>
    </section>
  );
}
