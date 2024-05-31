import resumeData from './data/resumeData.json';
import React, { useState, useEffect } from 'react';
import Home from './Home';
import ProjectDetails from './pages/ProjectDetails';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [data, setData] = useState(null);

  
  useEffect(() => {
    // Set the data from the JSON file when the component mounts
    setData(resumeData);
    
  }, []);

  return (
      <Routes>
          <Route exact path="/" element={ <Home data={resumeData} /> } />
          <Route exact path="/:projectname" element={<ProjectDetails />} />
      </Routes>
  )
}
export default App;
