import React,{useState,useEffect} from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MyVerticallyCenteredModal from './UpdateTask';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedTask,removeTaskFromList, deleteTaskFromServer } from "./TaskSlice";
import { getTasksFromServer } from './TaskSlice';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';




const TasksList = () => {
  const {tasksList} = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  const updateTask = (task) => {
    console.log("update Task");
    setModalShow(true)
    dispatch(setSelectedTask(task))
  };

  useEffect(() => {
    dispatch(getTasksFromServer())
  },[dispatch])

  const deleteTask = (task) => {
    console.log("delete task");
    dispatch(deleteTaskFromServer(task))
    .unwrap()
    .then(()=>{
      dispatch(removeTaskFromList(task))

    })
  };

  const [modalShow,setModalShow] = useState(false)
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>CoursesName</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Images</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            tasksList && tasksList.map((task,index) => {
              return (
                <tr className="text-center" key={task.id}>
                <td>{index + 1}</td>
                <td>{task.coursesName}</td>
                <td>{task.description}</td>
                <td>{task.duration}</td>
                <img style={{width:"300px",height:"120px"}} src={task.url}></img>

                <td>
                  <Button
                    className="my-3"
                    variant="secondary"
                    style={{ width: '89px' }}
                    onClick={() => updateTask(task)}
                      ><EditIcon />
                      EDIT                 
                      </Button>
                  <Button variant="secondary" onClick={() => deleteTask(task)} style={{ width: '89px' }}>
                    <DeleteIcon />
                    DELETE
                  </Button>
                </td>
              </tr>
              )
            })
          }
         
        </tbody>
      </Table>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TasksList;