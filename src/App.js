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
        <Route path="/kategori" element={<div>kategori</div>} />
        <Route path='/mitra' element={<div>mitra</div>} />  
        <Route path="/tentang" element={<div>tentang</div>} />
        <Route path='/blog' element={<div>blog</div>} />  
        <Route path='/keranjang' element={<div>keranjang</div>} />  
        <Route path='/masuk' element={<div>masuk</div>} />  
        <Route path="/daftar" element={<div>daftar</div>} />
      </Routes>
    </Router>
  );
}

export default App;
