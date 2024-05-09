
function Credentials({credentials}) {

console.log(credentials);

  return (
    <div id="credentials" className="pt-3 mb-20 text-black flex gap-5 justify-start">

      {credentials.map((c)=> (

          <div className="mr-10 text-right hover:bg-sky-400">
            <a href={c.url} className={c.class}>
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
