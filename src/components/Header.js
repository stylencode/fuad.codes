


function Header({author}) {

  return (
    <header id="home" className="pt-5 mb-5 text-black">
      <div className="">

            <h1 className="author-name">
              {author.name}
            </h1>

            <p className="author-title">
              {author.title}
            </p>
            <p className="author-description">
              {author.description}
            </p>
            
      </div>
    </header>
  );
}

export default Header;
