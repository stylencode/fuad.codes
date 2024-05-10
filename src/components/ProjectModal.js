import ProjectStack from './ProjectStack';
import Gallery from './Gallery';
import parse from 'html-react-parser';

function ProjectModal({project,closeModal}) {

    return (
        <>
        <div className="modal flex justify-center items-start	bg-white overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">

                <div className="lg:w-1/2 p-4  border-0 relative flex flex-col w-screen bg-white outline-none focus:outline-none">

                  <div className="w-full p-2 mb-4 m-auto flex items-start justify-between border-b border-solid border-blueGray-200 rounded-t">
                    <h4 className="w-85 text-xl font-semibold">{project.title}</h4>

                    <button
                      className="mr-4 bg-transparent border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={closeModal}
                    >
                      <span className="bg-transparent text-black  h-5 w-5 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>

                  <div className="w-full p-2 m-auto">

                        <Gallery images={project.images} />

                        <ProjectStack projectStack={project.technologies} />

                        <div className="project-description my-4 text-blueGray-500 text-lg leading-relaxed">
                          {parse(project.description)}
                        </div>
                        
                  </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
  }
  
  export default ProjectModal;
  