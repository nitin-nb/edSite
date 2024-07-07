import React from "react";
import "./Promotion.css";
import VerifiedIcon from "@mui/icons-material/Verified";

const Promotion = () => {
  const data = [
    "Be Bold, Be Innovative",
    "Focus on Individual impact",
    "Progress Over Perfection",
    "Care About People",
  ];
  const paragraph = [
    {p:"We believe everyone is driven by an innate desire to learn and grow. By equipping people with the skills, the world needs, we help them redefine their careers, their companies and their lives. Today, people need to continuously build their skills and stay ready to take advantage of the next opportunity in an ever-changing world",id:1}
   ,{p: "We take a human-first approach to building our organization. We care deeply about our teammates, our clients, the students, educators and families we serve. ",id:2}
  ];

  return (
    <div className="ALL">
      <div>
        <img src="img/myall.jpg" alt="" className="myall" />
      </div>
      <div className="main">
        <h1>35,000+ happy students joined with us to achieve their goals</h1>
        {paragraph.map((el) => (
          <p className="of" key={el.id}>{el.p}</p>
        ))}
        {data.map((e) => (
          <p className="of">
            <VerifiedIcon style={{ color: "#0cbc87" }} /> {e}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Promotion;
