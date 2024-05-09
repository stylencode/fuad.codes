import resumeData from './data/resumeData.json';
import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Skills from './components/Skills';
import Credentials from './components/Credentials';
import Footer from './components/Footer';
import RecentWork from './components/RecentWork';
import FunWorks from './components/FunWorks';

function App() {

  const [data, setData] = useState(null);
  
  useEffect(() => {
    // Set the data from the JSON file when the component mounts
    setData(resumeData);
    
  }, []);

  return (
    <div className="lg:w-1/2 md:w-3/4 sm:w-100 p-4 m-auto overflow-x-hidden">
      <div className="mt-10">
        <Header author={resumeData.main} />
        <Credentials credentials={resumeData.main.credentials}/>
        <RecentWork projects={resumeData.projects} />
        <FunWorks projects={resumeData.funProjects} />
        <Skills skills={resumeData.resume.skills} />
        <Footer />
      </div>
    </div>
  );
}


export default App;
