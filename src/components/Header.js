


function Header({author}) {

  return (
    <header id="home" className="pt-5 mb-5 text-black ">
      <div className="w-auto w-3/4">

            <h1 className="author-name text-gray-900">
              {author.name}
            </h1>
      </div>
      <div className="w-3/4" >
            <p className="author-description pt-0 text-gray-700">
              {author.description}
            </p>
      </div>
    </header>
  );
}

export default Header;
