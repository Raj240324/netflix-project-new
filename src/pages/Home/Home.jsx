import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCard from "../../components/TitleCards/TitleCard";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="hero-image" />

        <div className="hero-content">
          <img className="title-image" src={hero_title} alt="" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="buttons">
            <button className="play-button">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="info-button">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCard title={"Blockbuster Movies"} />
          <TitleCard title={"Only on Netflix"} />
          <TitleCard title={"Upcoming"} />
          <TitleCard title={"Top Picks for you"} />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
