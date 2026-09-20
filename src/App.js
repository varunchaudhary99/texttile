import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform.js';
import React, { useState } from 'react';
import Alert from './components/Alert.js';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import About from './components/about.js';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>

        <Navbar
          title="hello one"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />

        <div className="container">

          <Routes>

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/"
              element={
                <Textform
                  heading="Edit Text Form"
                  mode={mode}
                />
              }
            />

          </Routes>

        </div>

      </Router>
    </>
  );
}

export default App;

