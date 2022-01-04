import Navbar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages';
import Course from './pages/course';
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path='/course' element={<Course/>} />  
      </Routes>
    </Router>
  );
}

export default App;
