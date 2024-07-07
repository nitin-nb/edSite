import React from "react"
import "./course.css"
import {coursesCard} from '../../dummydata'
// import { Title } from "../common/title/Title"
// import OnlineCourses from "./OnlineCOurse"
// import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import Navbar1 from "../../Header/Header1"
import Navbar2 from "../../Header/Header2"
import Footer from "../../Footer/Footer1"
import Layout from "../../Layout/layout"
import Course from "../Manage"
// import RegisterForm from "../Forms/RegisterForm"
// import MyComponent from "../common/Button/Button"

const CourseHead = () => {
  return (
      <Course />
  )
}

export default CourseHead
