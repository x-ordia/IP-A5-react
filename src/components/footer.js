const Footer = (props) => {
    return (
      <footer className="footer bg-black">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box d-flex justify-content-between">
                <span className="copyright">
                  VESIT
                </span>
                <span>
                  Developed in ReactJS by <strong>{props.name}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;