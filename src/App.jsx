import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Contact from "./components/contact";
import Display from "./components/displayforminjs";
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'; 

function App() {
  return (
      <div className="App bg-image">
        <Header />
        <div style={{margin: '40px'}}>.</div>
        <About />
        <Contact />
        <Display />
        <Footer name="Bhargav Bodhankar"/>
      </div>
  );
}

export default App;
