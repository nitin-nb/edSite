import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Card, CardContent, Grid, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import htdimg from '../IMAGES/htd.jpg'
import './htd.css'

function TrainingCard({ title, description, image, buttonText, buttonLink }) {
    return (
        <Grid item xs={6} className="course-grid">
            <Card>
                <CardContent style={{ height: "350px" }} >
                    <Typography variant="h5" component="h2" style={{ textAlign: "center", marginBottom: "2rem" }}>
                        {title}
                    </Typography>
                    <Typography variant="body" component="p" style={{ textAlign: "center" }}>
                        {description}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowForwardIcon />}
                        component={Link}
                        to={buttonLink}
                        style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}
                    >
                        {buttonText}
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    );
}

function HTD() {
    const trainingContent = {
        title: "HTD (Hire Train Deploy) Training",
        description:
            "HTD (Hire Train Deploy) is an innovative program designed to bridge the gap between skills demand and talent supply in the high-tech industry. HTD focuses on empowering individuals with the necessary training and expertise to meet the specific needs of companies seeking skilled professionals. Through HTD, participants gain comprehensive hands-on training in high-tech design principles and techniques, equipping them with the knowledge and skills needed to excel in various domains such as software development, data analytics, artificial intelligence, and more.",
        buttonText: "Apply Now",
        buttonLink: "/forms",
    };

    return (
        <section>
            <div class="animate-this" className="imgobj">
                <div class="abstract-image22"></div>
                <div class="abstract-image23"></div>
                <div class="abstract-image24"></div>
                <div class="abstract-image25"></div>
                <div class="abstract-image26"></div>
                <div class="abstract-image27"></div>
                <div class="abstract-image28"></div>
                <div class="abstract-image29"></div>
                <div class="abstract-image30"></div>
                <>
                    <h3 className="montserratText2" style={{ display: "flex", justifyContent: "center",marginTop:"1rem" }}>
                        HTD
                    </h3>
                    <Grid container spacing={2} justifyContent="center" st>
                        <Grid item lg={10} sm={6} md={6} style={{ padding: "2rem" }}>
                            <Paper elevation={3} style={{ overflow: "hidden", background: "#eff9ff" }}>
                                <Grid container className="courses-card " alignItems="center">
                                    <TrainingCard {...trainingContent} />
                                    <Grid item xs={6}>
                                        <img
                                            src={htdimg}
                                            alt="Training"
                                            width={"70%"}
                                            style={{
                                                width: "100%",
                                                height: "350px",
                                                marginTop: "1rem",
                                                display: "block",
                                                margin: "0 auto",
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </>
                </div>
        </section>
    );
}

export default HTD;
