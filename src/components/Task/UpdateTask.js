import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateTaskInServer } from "./TaskSlice";

const MyVerticallyCenteredModal = (props) => {
  const { selectedTask } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [coursesName, setCoursesName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (Object.keys(selectedTask).length !== 0) {
      setCoursesName(selectedTask.coursesName);
      setDescription(selectedTask.description);
      setDuration(selectedTask.duration);
      setUrl(selectedTask.url);
      setCategory(selectedTask.category);
    }
  }, [selectedTask]);

  const updateTask = () => {
    props.onHide();
    dispatch(
      updateTaskInServer({
        id: selectedTask.id,
        coursesName,
        description,
        duration,
        url,
        category,
      })
    );
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Course Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Course Name"
              value={coursesName}
              onChange={(e) => setCoursesName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Course Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Course Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Course Duration</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Course Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Image URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Course Category</Form.Label>
            <Form.Control
              as="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="SOFTWARE DEVELOPMENT">Software Development</option>
              <option value="AUTOMOTIVE EMBEDDED">Embedded Development</option>
              <option value="TESTING TRACK">Software Testing</option>
              <option value="MECHANICAL DESIGN">
                Mechanical Engineering
              </option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="text-end">
          <Button variant="primary" type="submit" onClick={updateTask}>
            Update Task
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;