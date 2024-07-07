import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousal.css";

const images = [
  {
    label: "sheeba- Frontend,Backend",
    imgPath: "img/t2.jpg",
  },
  {
    label: "karthik- Backend",
    imgPath: "img/t1.jpeg",
  },
  {
    label: "Angel- Frontend",
    imgPath: "img/t2.jpg",
  },
  {
    label: "Manikandan- L&D Head",
    imgPath: "img/t1.jpeg",
  },
  {
    label: "Tara- Junior Head",
    imgPath: "img/t2.jpg",
  },
  {
    label: "Subramaniyam- Founder,CEO",
    imgPath: "img/t1.jpeg",
  },
];

function Carousal() {
  const renderImages = () => {
    return images.map((image, index) => (
      <div key={index}>
        <img src={image.imgPath} alt={image.label} style={{height:"250px", width:"200px"}} />
        <p className="legend" style={{height:"20%", width:"20%"}}>{image.label}</p>
      </div>
    ));
  };

  return (
    <div className="carousal" style={{width:"50%"}}>
      <h2 style={{ textAlign:"center"}}>Meet Our Team</h2>

      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={false}
        swipeable={true}
        emulateTouch={true}
        swipeScrollTolerance={5}
      >
        {renderImages()}
      </Carousel>
    </div>
  );
}

export default Carousal;

