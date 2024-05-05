function Footer() {

  const networks = "Social Networks"

  return (
    <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>Copyright &copy; Stylencode</small>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
