import React, { useState} from 'react';

function Project({project}) {

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
        <div className="bg-blue-100 mb-3 cursor-pointer "  onClick={() => setShowModal(true)}>
          <div className="flex flex-col x-overflow-hidden w-100 hover:scale-105 duration-300 ease-in-out">
              <h2 className="absolute bg-white p-3">{project.title}</h2>
              <img src={project.images[0]}/>
          </div>
        </div>
        {showModal ? (
          <>
            <div
              className="modal no-scrollbar justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-screen ">
                {/*content*/}
                <div className="h-screen border-0 shadow-lg relative flex flex-col w-screen bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      {project.title}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black  h-4 w-4 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {project.description}
                    </p>
                  </div>
                  {/*footer*/}
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
    </div>
  );
}

export default Project;


