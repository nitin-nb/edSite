import React from "react";
import './Ward.css'
const Ward = () => {
  const ward = ["We believe that the best way to have an impact in the world and to build a great company is through continuous progress, paired with iteration, experimentation and learning. We strive to get better every day and we take a growth mindset"
  ];

  const year = [2014,2015, 2016, 2017, 2018, 2019, 2020,2021,2022];
  return (
    <div>
      <div className="Nstuff">
        <h3>Our Belief</h3>
      </div>
      <div className="warrd">
        

        <div>
          {ward.map((e) => (
            <div className="de">{e}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ward;