import React, { useState, useEffect} from 'react';
import ProjectStack from './ProjectStack';
import Gallery from './Gallery';
import ProjectModal from './ProjectModal';

function Project({project}) {

  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal])

  return (
    <div>
        <div className="bg-blue-100 mb-3 cursor-pointer "  onClick={openModal}>
          <div className="flex flex-col overflow-x-hidden hover:scale-105 duration-300 ease-in-out">
              <h4 className="absolute bg-white p-3">{project.title}</h4>
              <img src={project.splash}/>
          </div>
        </div>
        {showModal ? ( 
            <ProjectModal project={project} closeModal={closeModal} />
         ) : null}
    </div>
  );
}

export default Project;


