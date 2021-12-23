import React from "react";
import img1 from "../../Assets/Images/road_bg_2.png";
import img2 from "../../Assets/Images/road_bg_1.png";
import { roadmapData } from "./../../data/roadmapData";
import SingleRoadMap from "./SingleRoadMap";

export default function Roadmap() {
  return (
    <section className=" roadmap_section">
      <article className="container">
        <img className="bg_im_1 absolute" src={img1} alt="bg one" />
        <img className="bg_im_2 absolute" src={img2} alt="bg two" />
        <div className="title">
          <h2>Lorem ipsum dolor sit amet.</h2>
        </div>
        <div>
          {roadmapData.map((data, index) => (
            <SingleRoadMap data={data} key={index} />
          ))}
        </div>
      </article>
    </section>
  );
}
