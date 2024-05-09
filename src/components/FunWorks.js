function FunWorks ({projects}) {

  const funWorks = projects;
  console.log(funWorks);

  return (
    <div id="projects" className="mb-20">
      <h2 className="mb-5">
        Fun Projects
      </h2>
      <div className="mt-5">      
              <ul role="list" class="divide-y divide-gray-100">
                {funWorks.map((p) => (
                    <li class="flex justify-between gap-x-6 py-5">
                      <div class="flex min-w-0 gap-x-4">
                        <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src={p.avatar} alt="" />
                        <div class="min-w-0 flex-right">
                          <p class="text-lg font-semibold leading-6 text-gray-900">{p.name}</p>
                          <p class="mt-1 truncate text-md leading-5 text-gray-700">{p.context}</p>
                        </div>
                      </div>
                    </li>
                ))}
              </ul>
        </div>       
    </div>
  );
}

export default FunWorks;


