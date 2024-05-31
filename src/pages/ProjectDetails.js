import ProjectStack from '../components/ProjectStack';
import Gallery from '../components/Gallery';
import {useNavigate} from 'react-router-dom';
import parse from 'html-react-parser';
import { useLocation } from 'react-router-dom';
import Animations from '../utils/Animations';

function ProjectDetails() {

const navigate = useNavigate();
const returnOnClick = () => navigate('/', { replace: true });
const animations = Animations();

const { state } = useLocation();
const project = state && state.project;
//console.log(project);

  return (
    <div>
        <div className="flex justify-center items-start	bg-white overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="lg:w-1/2 p-4  border-0 relative flex flex-col w-screen bg-white outline-none focus:outline-none">
            <div className="w-full p-2 mb-4 m-auto flex items-start justify-between border-b border-solid border-blueGray-200 rounded-t">
              
              <button
                className="mr-4 bg-transparent border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={returnOnClick}
              >
                <i className="fa-solid fa-left-long"></i>
              </button>
              <h4 className="w-85 text-2xl font-semibold">{project.title}</h4>
            </div>

            <div className="w-full p-2 m-auto">

              <img src={project.splash} className='splash-image'/>

              <ProjectStack projectStack={project.tech} />

              <div className="text-center pb-5">
                <a target="blank" href={project.url} className="m-auto bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                {project.url}
                </a>
              </div>

              <div className="project-description my-4 text-blueGray-500 text-lg leading-relaxed">
                {parse(project.description)}
              </div>
              
              <Gallery images={project.images} />
                  
            </div>
          </div>
        </div>
    </div>
  );
}

export default ProjectDetails;


