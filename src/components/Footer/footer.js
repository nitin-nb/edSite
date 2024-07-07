import './footer.css'
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../LOGO/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {fbicon} from 
// import Container from '@mui/material/Container';

export default function Footer() {
    return (
        <footer class="new_footer_area">
            <div >
                <div class=" footerdiv">
                    <div class="row">
                        <div class="col-lg-3 col-md-2">
                            <img src={logo} />
                            <div class="f_social_icon p-4">
                                <a href="#" class="fab fa-facebook"></a>
                                <a href="#" class="fab fa-twitter"></a>
                                <a href="#" class="fab fa-linkedin"></a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2">
                            <h3 class="f-title f_600 t_color f_size_18">Menu</h3>
                            <ul class="list-unstyled f_list">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Course</a></li>
                                <li><a href="#">Gallery</a></li>
                                <li><a href="#">Admission</a></li>
                                <li><a href="#">Support</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-2">
                            <h3 class="f-title f_600 t_color f_size_18">Services</h3>
                            <ul class="list-unstyled f_list">
                                <li><a href="#">Hire From Us</a></li>
                                <li><a href="#">Train From Us</a></li>
                                <li><a href="#">Lateral Training</a></li>
                                <li><a href="#">Mca program</a></li>
                                <li><a href="#">Join Us</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-2">
                            <h3 class="f-title f_600 t_color f_size_18">Courses</h3>
                            <ul class="list-unstyled f_list">
                                <li><a href='#'>Java Full-stack</a></li>
                                <li><a href='#'>Embedded</a></li>
                                <li><a href='#'>Testing</a></li>
                                <li><a href='#'>Programming Languages</a></li>
                                <li><a href='#'>Analytics</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-2">
                            <h3 class="f-title f_600 t_color f_size_18">Contact</h3>
                            <ul class="list-unstyled f_list">
                                <li><a href='#'></a></li>
                                <li><a href='#'>Embedded</a></li>
                                <li><a href='#'>Testing</a></li>
                                <li><a href='#'>Programming Languages</a></li>
                                <li><a href='#'>Analytics</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="container-fluid align-items-center footerdiv">
                            <p class="mb-0 f_400 ">©smartcliff Inc.. 2019 All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}