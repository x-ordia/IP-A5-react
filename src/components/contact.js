import * as Icon from "react-bootstrap-icons";

export default function Contact() {
  return (
    <section id="contact" className="footer-paralax bg-image sect-mt4 route" style={{marginTop: '-100px'}}>
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Say hello!</h5>
                    </div>
                    <div>
                      <form
                        action=""
                        className="php-email-form"
                      >
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                required
                              ></input>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                required
                              ></input>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                required
                              ></input>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                rows="5"
                                placeholder="Message"
                                required
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12 text-center my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">
                              Your message has been sent. Thank you!
                            </div>
                          </div>
                          <div className="col-md-12 text-center">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                            >
                            Send</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6 text-left text-black">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">I would love to collaborate with you on projects. If you find me interesting do
                      follow me on the social networking sites linked below. Suggestions and issues regarding the 
                      website are most welcome. If the form does not work you can mail me</p>
                      <ul className="list-ico">
                        <li>
                          <Icon.GeoAlt /> Thane west
                        </li>
                        <li>
                          <Icon.Phone /> 7977287910
                        </li>
                        <li>
                          <Icon.Envelope /> 2020.bhargav.bodhankar@ves.ac.in
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                            <a href="#">
                            <span className="ico-circle">
                                <i>WA</i>
                            </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <span className="ico-circle">
                                <i>IG</i>
                            </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <span className="ico-circle">
                                <i>GH</i>
                            </span>
                            </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};