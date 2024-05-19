function Header({author}) {

  return (
    <header id="home" className="pt-20 mt-20 mb-20 text-black ">
      <div className="w-auto md:w-3/4">

            <h1 className="author-name text-gray-900">
              {author.name}
            </h1>
      </div>
      <div className="md:w-3/4" >
            <p className="author-description pt-0 text-gray-700">
              {author.description}
            </p>
      </div>
    </header>
  );
}

export default Header;
