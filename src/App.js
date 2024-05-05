import logo from './logo.svg';
import './App.css';
import resumeData from './data/resumeData.json';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';


function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    // Set the data from the JSON file when the component mounts
    setData(resumeData);
    console.log(resumeData);
  }, []);

  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
