import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar1 from './components/Header/Header1';
import Navbar2 from './components/Header/Header2';
import HomePage from './components/PAGES/HOME/home';
import About from './components/PAGES/ABOUT/about';
import Course from './components/PAGES/COURSES/courses';
import Join from './components/PAGES/JOIN/joinus';
import Service from './components/PAGES/SERVICE/service';
import Placement from './components/PAGES/CONTACT/contact';
import Hire from './components/PAGES/HIRE/hire';
import Footer1 from './components/Footer/Footer1';
import CourseHead from './components/PAGES/COURSES/CourseHead';
import FrondEnd from './components/PAGES/COURSES/softwarecourses';
import Form1 from './components/form/Apply-Form';
import HireForm from './components/form/Hire-Form';
import Login from './components/form/loginForm';
import AddCourses from './components/Task/addTask';
import Htd from './components/PAGES/SERVICE/htd';
import LT from './components/PAGES/SERVICE/lt';
import MCA from './components/PAGES/SERVICE/mca';
import IT from './components/PAGES/SERVICE/it';
import ContactUs from './components/PAGES/CONTACT/contact';

const App = () => {
  return (
    <Router>
      <Navbar1 />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/services" element={<Service />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/hirefromus" element={<Hire />} />
        <Route path="/join" element={<Join />} />
        <Route path="/allcourses" element={<CourseHead />} />
        <Route path="/courses/Courses1" element={<FrondEnd />} />
        <Route path="/forms" element={<Form1 />} />
        <Route path="/hireus" element={<HireForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/coursemanagement" element={<AddCourses />} />
        <Route path="/htd" element={<Htd />} />
        <Route path="/lateral" element={<LT />} />
        <Route path="/mca" element={<MCA />} />
        <Route path="/it" element={<IT />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer1 />
    </Router>
  );
};

export default App;
