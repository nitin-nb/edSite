import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cimg1 from '../Logo/cimg1.jpg';
import cimg2 from '../../components/PAGES/IMAGES/t2.jpg';
import cimg3 from '../../components/PAGES/IMAGES/t1.jpeg';

const CardComponent1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <Slider {...settings}>
        <div>
          <div
            style={{
              width: 380,
              height: 300,
              marginRight: '20px',
              backgroundColor: '#FDF8EE',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={cimg2}
              alt="Card 1"
              style={{ width: '40%', height: '30%', objectFit: 'contain', marginBottom:'1.5rem' }}
            />
            <div>
              <h5 style={{textAlign:"center"}}>Front-End Developer</h5>
              <h6 style={{textAlign:"center"}}>Akhila</h6>
              <p style={{marginLeft:"10px"}}>First of all, I would like to thanks my family and friends for their support and motivation, and also special thanks to Smartcliff and Smartcliff's staffs for giving me the opportunity to prove myself.</p>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              width: 380,
              height: 300,
              marginRight: '20px',
              backgroundColor: '#FDF8EE',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={cimg3}
              alt="Card 2"
              style={{ width: '40%', height: '30%', objectFit: 'contain' , marginBottom:'.2rem'}}
            />
            <div>
              <h5 style={{textAlign:"center",}}>Mern-Stack Developer</h5>
              <h6 style={{textAlign:"center"}}>Ram Kumar</h6>
              <p style={{marginLeft:"10px"}}> After Completing My BE degree, I have no idea about my next plan so, friends suggest me Coimbatore Smartcliff, In short period I learn new topic and i got placed in good company thanks to Smartcliff.</p>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              width: 350,
              height: 300,
              marginRight: '20px',
              backgroundColor: '#FDF8EE',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={cimg3}
              alt="Card 3"
              style={{ width: '40%', height: '30%', objectFit: 'contain' }}
            />
            <div>
              <h5 style={{textAlign:"center"}}>Embedded Engineer</h5>
              <h6 style={{textAlign:"center"}}>Suriya</h6>
              <p style={{marginLeft:"10px"}}>I got placed in jasmine infotech as an Embedded hardware engineer role,thanks to smartcliff. The Lecture also has so many knowledge and experience, They helped me a lot to develop my technical skills and personal skills also.</p>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              width: 350,
              height: 300,
              
              backgroundColor: '#FDF8EE',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={cimg3}
              alt="Card 2"
              style={{ width: '40%', height: '30%', objectFit: 'contain' }}
            />
            <div>
              <h5 style={{textAlign:"center"}}>Mern-Stack Developer</h5>
              <h6 style={{textAlign:"center"}}>Bala Kishore</h6>
              <p style={{marginLeft:"10px"}}>My experience about smartcliff is like friendly staff with all the time, environment and class facilities are good. While joining smatcliff I have zero knowledge about programming but now I am experienced with it. Thanks for the smatcliff staffs to guide me well in practically.</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CardComponent1;
