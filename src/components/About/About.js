import React from "react";
import "./About.css";
import banner from "../../images/Banner&Background/kit.png";

const About = () => {
  return (
    <div className=" container">
      <div className=" about-section mt-5 p-5">
        <div className="row">
          <div className="col-md-6">
            <div className="about-image">
              <img className="w-100" src={banner} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-text p-5 text-start ">
              <h1>About US</h1>
              <p>
                Pair large text with an image to give focus to your chosen
                product, collection, or blog post. Add details on availability,
                style, or even provide a review. Even if you can't afford to
                travel the world, you can take your children to the museum, zoo
                or local park. And don't be afraid to take them to grown-up
                spots. Eating out in a restaurant teaches children how to be
                quiet and polite and gives them the pleasure of knowing you
                trust them to behave.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
