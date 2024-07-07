import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Card, CardContent, Grid, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import ltimg from '../IMAGES/lt.jpg'
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

function IT() {
    const trainingContent = {
        title: "Institute Training",
        description:
        "Institutional training refers to specialized training programs offered by educational institutions or training institutes with the aim of providing individuals with comprehensive skills and knowledge in a specific field or industry. These programs are designed to prepare individuals for specific careers or professions and are often tailored to meet industry standards and requirements.",
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
                        INSTITUTIONAL TRAINING
                    </h3>
                    <Grid container spacing={2} justifyContent="center" st>
                        <Grid item lg={10} sm={6} md={6} style={{ padding: "2rem" }}>
                            <Paper elevation={3} style={{ overflow: "hidden", background: "#eff9ff" }}>
                                <Grid container className="courses-card " alignItems="center">
                                    <TrainingCard {...trainingContent} />
                                    <Grid item xs={6}>
                                        <img
                                            src={ltimg}
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

export default IT;
