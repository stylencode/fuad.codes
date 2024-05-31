import ProjectSplash from "./ProjectSplash";
import { Link } from "react-router-dom";

function RecentWork({projects}) {

  const projectsData = projects;
  //console.log(projectsData);

  return (
    <div id="projects" className="mb-20 ">
      <h2 className="mb-5 recent-work opacity-0" >
        Recent Work
      </h2>
          <div className="mt-5">
              <div className="columns-2 sm:gap-4 lg:columns-2 xl:columns-2 [&>img:not(:first-child)]:mt-8">
                {projectsData.map((p) => (
                  <Link to={`/${p.slug}`} state = {{ project: p}}>
                    <ProjectSplash project={p}/>
                  </Link>
                ))}
            </div>
          </div>    
    </div>
  );
}

export default RecentWork;


