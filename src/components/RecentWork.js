import Project from "./Project";

function RecentWork({projects}) {

  const projectsData = projects;
  console.log(projectsData);

  return (
    <div id="projects" className="mb-20">
      <h2 className="mb-5">
        Recent Work
      </h2>
      <div className="mt-5">
            <div class="columns-1 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-3 [&>img:not(:first-child)]:mt-8">
              {projectsData.map((p) => (
                <Project project={p}/>
              ))}
          </div>
        </div>
    </div>
  );
}

export default RecentWork;

