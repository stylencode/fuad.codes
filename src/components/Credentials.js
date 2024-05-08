
function Credentials({credentials}) {

console.log(credentials);

  return (
    <div id="credentials" className="pt-5 mb-20 text-black flex gap-5">

      {credentials.map((c)=> (

          <div className="mr-10">
            <a href={c.url} className={c.class}>
              <h4 className="credential-title">
                {c.name}
              </h4>
            </a>
          </div>

      ))}
      
    </div>
  );
}

export default Credentials;
