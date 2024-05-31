import React, { useState, useEffect} from 'react';

function ProjectSplash({project}) {
  return (
    <>
        <div className="mb-3 cursor-pointer project-item opacity-0 translateX-[-100px]">
          <div className="flex flex-col overflow-x-hidden hover:scale-105 duration-300 ease-in-out">
              <img src={project.splash}/>
          </div>
        </div>
    </>
  );
}

export default ProjectSplash;


