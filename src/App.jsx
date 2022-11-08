import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Contact from "./components/contact";
import Display from "./components/displayforminjs";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-image">
        <Header />
        <div className="navbar navbar-expand-lg navbar-light bg-dark" style={{color: 'white',marginTop: '70px'}}>
          <div className='navbar-nav mr-auto'>
            <div className='nav-link' style={{marginLeft: '350px', marginTop: '10px'}}>
              <Link to="/">About</Link>
            </div>
            <div className='nav-link' style={{marginLeft: '200px', marginTop: '10px'}}>
              <Link to="/contact">Contact</Link>
            </div>
            <div className='nav-link' style={{marginLeft: '200px', marginTop: '10px'}}>
              <Link to="/display">Display</Link>
            </div>
          </div>
        </div>
        <Routes>
            <Route path='/' element={< About />}></Route>
            <Route path='/contact' element={< Contact />}></Route>
            <Route path='/display' element={< Display />}></Route>
        </Routes>
        <Footer name="Bhargav Bodhankar"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
