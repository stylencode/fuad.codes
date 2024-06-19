
function Header({author}) {

  return (
    <header id="home" className="pt-20 mt-20 mb-5 text-black lg:w-1/2 md:w-3/4 sm:w-100 p-4 m-auto overflow-x-hidden" >
      <div className="w-auto md:w-full lg:w-3/4 mb-5" >

            <h1 className="author-name text-gray-900 opacity-0" >
              {author.name}
            </h1>
      </div>
      <div className="md:w-3/4" >

            <p className="author-description pt-0 text-gray-700 opacity-0" >
              {author.intro}
              <br /><br />
              {author.description}
            </p>
      </div>
    </header>
  );
}

export default Header;
