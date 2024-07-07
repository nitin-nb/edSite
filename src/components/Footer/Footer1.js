import 'bootstrap/dist/css/bootstrap.css';
import './footer1.css';

export default function Footer() {
    return (
        <footer data-aos="fade-up" className="aos-init aos-animate">
            <div className="container-fluid footercontainer">
                

                <div className="footer-middle ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-9 ">
                            <div className="footer-wrapper-one ">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-lg-2 footerbottom" style={{marginRight:"3rem",position:"relative",right:"100px"}}>
                                        <div className="detail-wrapper ">
                                            <div className="footer-top-left-wiget col-md-2 ">
                                                <a href="https://smartcliff.in/" ><img src="https://smartcliff.in/assets/images/logo-white1.png" alt="logo" /></a>
                                            </div>
                                            <div className="footer-top-right-widget">
                                                <ul>
                                                    <li><a href="https://www.facebook.com/smartcliff.in" target="_blank"><img src="https://smartcliff.in/assets/images/social-icon1.png" /></a></li>
                                                    <li><a href="https://www.linkedin.com/company/smartcliff/" target="_blank"><img src="https://smartcliff.in/assets/images/social-icon5.png" /></a></li>
                                                    <li><a href="https://www.instagram.com/_smartcliff_/" target="_blank"><img src="https://smartcliff.in/assets/images/social-icon4.png" /></a></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6 col-lg-2 footerbottom" style={{marginRight:"3rem"}}>
                                        <div className="detail-wrapper ">
                                            <h4 >Quick Links</h4>
                                            <ul>
                                                <li ><a href="http://localhost:3000/">HOME</a></li>
                                                <li><a href="http://localhost:3000/about">ABOUT</a></li>
                                                <li><a href="http://localhost:3000/allcourses">COURSES</a></li>
                                                <li><a href="http://localhost:3000/services">SERVICES</a></li>                                                
                                                <li><a href="http://localhost:3000/contact">CONTACT</a></li>
                                                <li><a href="http://localhost:3000/login">LOGIN</a></li>

                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6 col-lg-2 footerbottom" style={{marginRight:"3rem"}}>
                                        <div className="detail-wrapper">
                                            <h4>COURSES</h4>
                                            <ul>
                                                <li><a href="/allcourses">SOFTWARE DEVELOPMENT</a></li>
                                                <li><a href="/allcourses">EMBEDDED DEVELOPMENT</a></li>
                                                <li><a href="/allcourses">TESTING</a></li>
                                                <li><a href="/allcourses">MECHANICAL DESIGN</a></li>
                                            </ul>
                                        </div>
                                    </div>

                 

                                    <div className="col-md-6 col-sm-6 col-lg-3 footerbottom">
                                        <div className="detail-wrapper">
                                            <h4>Contact</h4>
                                            <div className="row feature-tile">
                                                <div className="col-lg-12 col-sm-12 col-md-12"> 
                                                    <ul>
                                                        <li>
                                                            <div className="align hidden-xs-down">
                                                                <img src="https://smartcliff.in/assets/images/location.png" className="liicon" />
                                                            </div>
                                                            <div className="text contactlist">
                                                                <p className="colorwhite marginbottomzero">
                                                                    "2000, Krishna Colony (opp. to Central Studio)
                                                                    Ramanathapuram
                                                                    Trichy Road
                                                                    Coimbatore - 641 005"
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="align hidden-xs-down">
                                                                <img src="https://smartcliff.in/assets/images/mail.png" className="liicon" />
                                                            </div>
                                                            <div className="text contactlist">
                                                                <a href="mailto:enquiry@smartcliff.in">
                                                                    <p className="colorwhite marginbottomzero">
                                                                        enquiry@smartcliff.in</p>
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="align hidden-xs-down">
                                                                <img src="https://smartcliff.in/assets/images/phone.png" className="liicon" />
                                                            </div>
                                                            <div className="text contactlist">
                                                                <a href="tel:+91 811 007 7033">
                                                                    <p className="colorwhite marginbottomzero">+91 811 007 7033</p>
                                                                </a>
                                                                <a href="tel:+91 894 049 9888">
                                                                    <p className="colorwhite marginbottomzero">+91 894 049 9888	</p>
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container-fluid footercontainer">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="bottom-left-widget">
                                    <p>Copyrights @ 2023 Nitin NB. All Rights Reserved. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}