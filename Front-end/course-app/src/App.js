import { ToastContainer } from 'react-toastify';
import './App.css';
import { Row, Col, Container, Button } from 'reactstrap';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from './components/Menus';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return ( 
  <>
    <Router>
    
    <Container>

      <Header />
       <Row>
        <Col md={4}>
          <Menus />
        </Col>
        <Col md={8}>
          <Routes>
         <Route path="/" element={<Home/>} exact/>
         <Route path="/add" element={<AddCourse/>} exact/>
         <Route path="/view" element={<AllCourses/>} exact />
         <Route path="/about" element={<About/>} exact />
         <Route path="/contact" element={<Contact />} exact/>
         </Routes>
        </Col>
       </Row>
    </Container>
    </Router>
    <ToastContainer />
    
  </>

  );
}

export default App;
