import React from 'react'
import'./social.css'
const Social = () => {
 
const social = [
  { id:1, src: "img/jasmin-logo.png", className: "a" },
  { id:2, src: "img/kgisl-logo.png", className: "b" },
  {id:3,  src: "img/changecx-logo.png", className: "c" },
  {id:4,  src: "img/mont-logo.png", className: "d" },
  // { id:5, src: "img/motivAi-logo.png", className: "e" },
  //  {id:6,  src: "img/pricol-logo.png", className: "k" },
];
const social2 = [
  // {id:1,  src: "img/changecx-logo.jpeg", className: "f" },
  // {id:2, src: "img/mont.png", className: "g" },
  {id:3, src: "img/motivAi-logo.png", className: "h" },
  {id:4, src: "img/pricol-logo.png", className: "i" },
  {id:5,  src: "img/jasmin-logo.png", className: "g" }
 
];

return (
  <div className="social">
    <div className='divone'>
    {social.map((e) => (
      <img  key={e.id} src={e.src} alt="" className={e.className} />
    ))}
    </div>
    <div className='divtwo'>
    {social2.map((e) => (
      <img key={e.id} src={e.src} alt="" className={e.className} />
    ))}
  </div>
  </div>
);
}

export default Social
