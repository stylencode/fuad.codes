
function Credentials({credentials}) {

//console.log(credentials);

  return (
    <div id="credentials" className="pt-3 mb-10 pb-10 text-black flex gap-5 justify-start lg:w-1/2 md:w-3/4 sm:w-100 p-4 m-auto overflow-x-hidden">

      {credentials.map((c)=> (

          <div className="mr-10 text-right cred-item opacity-0 hover:scale-125 transition-all">
            <a href={c.url} className={c.class} target="_blank">
              <svg className="social-icon  w-[40px] text-center m-auto" viewBox="0 0 512 512"><path d={c.path}></path></svg>
            
              <h5 className="credential-title text-center m-auto">
                {c.name}
              </h5>
            </a>

          </div>

      ))}
      
    </div>
  );
}

export default Credentials;
