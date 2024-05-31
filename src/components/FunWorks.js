import { Link } from "react-router-dom";

function FunWorks ({projects}) {

  const funWorks = projects;
  console.log(funWorks);

  return (
    <div id="funProjects" className="mb-20">
      <h2 className="mb-5 fun-projects opacity-0">
        Fun Projects
      </h2>
      <div className="mt-5">      
              <ul role="list" class="divide-y divide-gray-100">

                {funWorks.map((p) => (
                    <Link to={`/${p.slug}`} state = {{ project: p}}>
                      <li class="flex justify-between gap-x-6 py-5 fun-project-item opacity-0">
                        <div class="flex min-w-0 gap-x-4">
                          <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src={p.splash} alt="" />
                          <div class="min-w-0 flex-right">
                            <p class="text-lg font-semibold leading-6 text-gray-900">{p.title}</p>
                            <p class="mt-1 truncate text-md leading-5 text-gray-700">{p.shortDescription}</p>
                          </div>
                        </div>
                      </li>
                    </Link>
                    
                ))}
              </ul>
        </div>       
    </div>
  );
}

export default FunWorks;


