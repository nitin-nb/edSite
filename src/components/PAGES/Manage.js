import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Card, Container } from "react-bootstrap";
import { CardContent, CardMedia, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import { ImageListItem, ImageList } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getTasksFromServer } from "../Task/TaskSlice";

const Course = () => {
  const { tasksList } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    dispatch(getTasksFromServer());

    // Filter the tasks based on the selected category
    const filtered = selectedCategory ? tasksList.filter((task) => task.category === selectedCategory) : tasksList;
    setFilteredTasks(filtered);
  }, [dispatch, selectedCategory, tasksList]);

  const categories = [
    "SOFTWARE DEVELOPMENT",
    "AUTOMOTIVE EMBEDDED",
    "TESTING TRACK",
    "MECHANICAL DESIGN",
  ];

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleShowAllCourses = () => {
    setSelectedCategory("");
  };

  return (
    <>
      {/* <div className="vector">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <p className="oc">HOME / ONLINE ADMISSION</p>
              <h2 className="oc">ALL COURSES</h2>
            </div>
          </div>
        </div>
      </div> */}
      <Container fluid id="corss" style={{ marginTop: 35,  marginBottom: "20px" }}>
        <div style={{ marginBottom: "20px" }}>
          <Button
            // variant={selectedCategory === "" ? "contained" : "outlined"}
            color="primary"
            sx={{
              backgroundColor: selectedCategory === '' ? "#ff7426" : "#4d2c5e",
              margin: "5px",
              color: "white",
              '&:hover': {
              backgroundColor: '#000',
            },
            }}
            onClick={handleShowAllCourses}
          >
            All Courses
          </Button>
          {categories.map((category) => (
            <Button
            key={category}
            color="primary"
            sx={{
              backgroundColor: selectedCategory === category ? "#ff7426" : "#4d2c5e",
              margin: "5px",
              color: "white",
              '&:hover': {
              backgroundColor: '#000',
              color: '#fff'
            },
            }}
            onClick={() => handleCategoryFilter(category)}
          >
            {category}
          </Button>
          
          ))}
        </div>

        <h6 style={{backgroundColor:"#ffedc8", padding: 10, textAlign:"center", fontSize: 20}}>This is done using local server, dynamic server is under progress. Contact nitin nb for details regarding.</h6>


        <ImageList sx={{ width: 1400, marginBottom: "20px" }} cols={3}>
          {filteredTasks.map((task) => (
            <ImageListItem key={task.id}>
              <Card
                sx={{
                  margin: "10px",
                  padding: "20px",
                  background: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "250px", // Adjust the height value
                }}
                key={task.id}
              >
                <CardMedia>
                  <img
                    src={task.url}
                    alt="Course"
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="body" component="div">
                    <h6>Course Name: {task.coursesName}</h6>
                  </Typography>
                  <Typography gutterBottom variant="body" component="div" sx={{ textAlign: "justify" }}>
                    <a>Description: {task.description}</a>
                  </Typography>
                  <Typography gutterBottom variant="body" component="div" sx={{ textAlign: "left" }}>
                    <b>Duration: {task.duration}</b>
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Link to="/courses" onClick={() => window.scrollTo(0, 0)}> */}
                    <Button size="small">Know more</Button>
                  {/* </Link> */}
                </CardActions>
              </Card>
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  );
};

export default Course;
