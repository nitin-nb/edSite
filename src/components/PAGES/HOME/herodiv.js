import "./home.css";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import homebg from "../IMAGES/climbing.jpg";
import SearchIcon from '@mui/icons-material/Search';
import overlayImage from "../IMAGES/overlayimg.png"
import TerrainIcon from '@mui/icons-material/Terrain';
import j1 from '../IMAGES/job(1).png'
import j2 from '../IMAGES/job(2).png'
import j3 from '../IMAGES/job(3).png'
import bulb from '../IMAGES/bulb.png'
import curl from '../IMAGES/curl.png'
import CardComponent from "../../Card/card";
import CardComponent1 from "../../Card/cardcarousel";
import CardComponent2 from "../../Card/card1";
import homebg2 from "../IMAGES/bg2.jpg"
import img2 from '../IMAGES/bg2img.jpg'

export default function Homediv() {
    return (
        <div>
            <Container maxWidth="xl" className="homediv">
                <img src={homebg} className="homebgimg1" />
                <img src={overlayImage} className="overlayhome-image" />
                <Box maxWidth="xs" className="textOverlay">
                    <Box className="montserratText">
                        <span >Reach Your <span className="herotext"><br />Cliff <TerrainIcon fontSize="xl" /> Smartly!</span></span>
                    </Box >
                    <Box >
                        <span className="additionalText">We are on a mission to address the digital skills gap for 10 Million+ young professionals, train and empower them.</span>
                    </Box>
                    <Box class="search-container">
                        <SearchIcon className="search-icon" />
                        <input type="text" placeholder="     Search for a Course..." class="search-input" />
                        <button class="search-button">Search</button>
                    </Box>
                </Box>
            </Container>
            <Container justifyContent="center ">
                <Box className="student-card-title" sx={{ mt: "2rem", mx: "auto" }}>
                    Are You a Student?..
                </Box>
                <Box className="student-card" sx={{ mt: "1rem", mx: "auto" }}>
                    <Grid container spacing={2} sx={{ alignContent: "center" }}>
                        <Grid item xs={4}>
                            <div className="grid-item">
                                <img src={j1} alt="Image 1" style={{ width: '50px', height: '50px', border: "3px solid black", marginLeft: "20px" }} />
                                <div className="content">
                                    <h6>Learn The Latest Skills</h6>
                                    <p>Learn the in-demand skill that has a greater scope</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="grid-item">
                                <img src={j2} alt="Image 1" style={{ width: '50px', height: '50px', border: "3px solid black" }} />
                                <div className="content">
                                    <h6>Get Ready For a Career</h6>
                                    <p>Practice the learned skill with our working environment.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="grid-item">
                                <img src={j3} alt="Image 1" style={{ width: '50px', height: '50px', border: "3px solid black" }} />
                                <div className="content">
                                    <h6 >Earn a placement</h6>
                                    <p>Get your dream employment that matches your skill.</p>
                                </div>
                            </div>

                        </Grid>
                    </Grid>
                </Box>
                <img src={bulb} style={{ width: '200px', height: '200px', marginTop: '-20rem', marginLeft: '-5rem' }} />
                <img src={curl} style={{ width: '200px', height: '200px', marginTop: '-21rem', marginLeft: '90%' }} />
            </Container>
            <Container>
                {/* <img src={lap} /> */}
                <Box>
                    <h3 className="h3herotext" align="center" style={{ marginBottom: '2rem' }}>Our <span className="herotext2">C</span>ourses</h3>
                    <CardComponent />
                </Box>
            </Container>
            <Container maxWidth={false} disableGutters style={{ marginTop: "2rem", marginBottom: "3rem" }}>
                <img src={homebg2} style={{ width: "100%", height: "400px" }} />
                <img src={img2} className="overlayimage2" />
                <Box className="herotext3 textOverlay1">
                        <span >The <span className="herotext">Smart</span> Choice for your <span className="herotext"><br />Future </span></span>
                    </Box >
            </Container>
            <Container>
                <Box mb={"2rem"}>
                    <h3 className="h3herotext" align="center" style={{ marginBottom: '2rem' }}>Student <span className="herotext2">T</span>estimonal</h3>
                    <CardComponent1 />
                    <img src={bulb} style={{ width: '200px', height: '200px', marginTop: '-30rem', marginLeft: '-6rem' }} />
                    <img src={curl} style={{ width: '200px', height: '200px', marginTop: '-20rem', marginLeft: '90%' }} />
                </Box>
            </Container>
            <Container>
                {/* <img src={lap} /> */}
                <Box>
                    <h3 className="h3herotext" align="center" >Prestigious <span className="herotext2">C</span>ompanies</h3>
                    <p className="h3herotext" align="center" style={{ marginBottom: '2rem' }}>Companies working with us</p>
                    <CardComponent2 />
                </Box>
            </Container>
            <Container>
                <Box className="newsletter">
                    <h3 className="h3herotext1" style={{ marginTop: "1rem" }}>Subscribe to our newsletter</h3>
                    <Box class="send-container">
                        <input type="text" placeholder=" Email Address" class="search-input" />
                        <button class="send-button">Send</button>
                    </Box>
                </Box>

            </Container>
        </div>

    );
}