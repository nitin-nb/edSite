import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from 'react-redux';
import { addTaskToServer } from "./TaskSlice";
import TasksList from "./TaskList";
import "./task.css";
import Layout from "../Layout/layout";

const AddCourses = () => {
  const dispatch = useDispatch();
  
  const [coursesName, setCoursesName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");

  const addCourses = (e) => {
    e.preventDefault();
    console.log("Adding course with details: ", {
      coursesName,
      description,
      duration,
      url,
      category,
    });

    dispatch(
      addTaskToServer({
        coursesName,
        description,
        duration,
        url,
        category,
      })
    ).then((result) => {
      if (result.type === 'tasks/addTaskToServer/fulfilled') {
        console.log("Course added successfully", result);
        setCoursesName("");
        setDescription("");
        setDuration("");
        setUrl("");
        setCategory("");
      } else {
        console.error("Failed to add course", result);
      }
    });
  };

  const tasksState = useSelector(state => state.tasks);

  console.log('Current tasks state:', tasksState);

  return (
    <section className="add-courses-section justify-content-center" style={{marginTop:"5rem"}}>
      <div className="row">
        <h1 className="montserratText2" style={{textAlign:"center",textTransform:"uppercase",marginBottom:"20px"}}> Course Management</h1>
        <div className="col-md-12" style={{width:"550px",marginLeft:"500px"}}>
          <div className="add-courses-form">
            <form>
              <label>COURSE NAME:</label>
              <input
                type="text"
                placeholder="Course Name"
                value={coursesName}
                onChange={(e) => setCoursesName(e.target.value)}
              />
              <label>COURSE DESCRIPTION:</label>
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label>COURSE DURATION:</label>
              <input
                type="text"
                placeholder="Duration of course"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
              <label>COURSE IMAGES:</label>
              <input
                type="text"
                placeholder="Image URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <label>COURSE CATEGORY:</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="SOFTWARE DEVELOPMENT">SOFTWARE DEVELOPMENT</option>
                <option value="AUTOMOTIVE EMBEDDED">AUTOMOTIVE EMBEDDED</option>
                <option value="TESTING TRACK">TESTING TRACK</option>
                <option value="MECHANICAL DESIGN">MECHANICAL DESIGN</option>
              </select>
              <div style={{ textAlign: "end" ,marginTop:"20px" }}>
                <Button variant="success" type="submit" onClick={addCourses}>
                  Add Courses
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <TasksList />
    </section>
  );
};

export default AddCourses;
