import './App.css';
import "bootstrap/dist/css/bootstrap.css";
// import "jquery/dist/jquery.js";
import "bootstrap/dist/js/bootstrap.js";
// import _ from "lodash";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
      <div className="App bg-image">
        <Header />
        <div style={{margin: '40px'}}>.</div>
        <About />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
