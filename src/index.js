import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import EditButton from './Edit';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <App />
      {/* <Routes>
        <Route exact path='/' element={< App />}></Route>
        <Route exact path='/edit' element={< EditButton />}></Route>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);
