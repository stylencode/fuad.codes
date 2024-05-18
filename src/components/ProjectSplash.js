import React, { useState, useEffect} from 'react';

function ProjectSplash({project}) {
  return (
    <div>
        <div className="mb-3 cursor-pointer ">
          <div className="flex flex-col overflow-x-hidden hover:scale-105 duration-300 ease-in-out">
              <img src={project.splash}/>
          </div>
        </div>
    </div>
  );
}

export default ProjectSplash;


