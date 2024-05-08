import resumeData from './data/resumeData.json';
import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Xtra from './components/Xtra';
import Credentials from './components/Credentials';
import Footer from './components/Footer';
import RecentWork from './components/RecentWork';


function App() {

  const [data, setData] = useState(null);
  
  useEffect(() => {
    // Set the data from the JSON file when the component mounts
    setData(resumeData);
    
  }, []);

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-10">
        <Header author={resumeData.main} />
        <Credentials credentials={resumeData.main.credentials}/>
        <RecentWork projects={resumeData.projects} />
        <Skills skills={resumeData.resume.skills} />
        <Xtra data={resumeData.extra} />
        <Footer />

        


      </div>
    </div>
  );
}


export default App;
