import React from "react"
import about2 from "../../Logo/cimg2.jpg"
import "./nextpage.css"
import Navbar1 from "../../Header/Header1"
import Navbar2 from "../../Header/Header2"
import Footer from "../../Footer/Footer1"

const FrondEnd = () => {
  return (
    <>
    <Navbar1/>
    <Navbar2/>
      <section className='about'>
        {/* <Back name='About Us' title='Courses'/> */}
        <h1 style={{textAlign:'center',marginTop:'40px'}}>Front-End </h1>
        <div className='container flex mtop'>
          <div className='' style={{textAlign:'center'}}>
            {/* <Title  subtitle='Frond-End Development' /> */}

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
           {/* <button className='btn2'><CourseApply/></button> */}
          </div>
          <div className=''>
            <img src={about2} alt='' width={500} height={300}/>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default FrondEnd