import { ProgressBar } from "react-bootstrap";

export default function About() {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full" style={{borderWidth: '0px',borderStyle:'solid',borderTopRightRadius: '500px', borderBottomRightRadius: '200px'}}>
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-4 text-left">
                      <div className="about-img">
                      <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' 
                      viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img'
                       xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EProfile%3C/title%3E%3Cdesc%3EA
                        flat styled icon from Orion Icon Library.%3C/desc%3E%3Cpath data-name='layer5'
                        fill='%23e5edff' d='M36 8v4h-8V8H8v54h48V8H36z'%3E%3C/path%3E%3Cpath data-name='layer3'
                        d='M34.668 31.368a6 6 0 1 0-5.339 0A9.749 9.749 0 0 0 22 41h20a9.751 9.751 0 0 0-7.332-9.632z' 
                        fill='%2371c3f3'%3E%3C/path%3E%3Cpath data-name='layer2' 
                        d='M44 49H20a1 1 0 0 1 0-2h24a1 1 0 0 1 0 2zm-6 6H26a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z' 
                        fill='%237b8baf'%3E%3C/path%3E%3Cpath data-name='opacity' fill='%23000064' opacity='.1' 
                        d='M25.999 13.999v-6l8 .001L36 11.999 33.999 14l-8-.001z'%3E%3C/path%3E%3Cpath data-name='layer1' 
                        fill='%235090ff' d='M28 2h8v9.998h-8z'%3E%3C/path%3E%3Cpath data-name='opacity' 
                        d='M32 20a6 6 0 0 0-2.669 11.368A9.749 9.749 0 0 0 22 41h10z' fill='%23000064' 
                        opacity='.15'%3E%3C/path%3E%3C/svg%3E" alt="Profile" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-8">
                      <div className="about-info d-flex flex-column align-items-baseline text-black w-100 lh2">
                        <div className="row w-100">
                          <div className="col-md-3 text-right">
                            <span className="title-s">Name: </span>
                          </div>
                          <div className="col-md-9 text-left text-left">
                            <span>Bhargav Bodhankar</span>
                          </div>
                        </div>
                        <div className="row w-100">
                          <div className="col-md-3 text-right">
                            <span className="title-s text-right">Profile:</span>
                          </div>
                          <div className="col-md-9 text-left">
                            <span>Web developer</span>
                          </div>
                        </div>
                        <div className="row w-100">
                          <div className="col-md-3 text-right text-right">
                            <span className="title-s">Email: </span>
                          </div>
                          <div className="col-md-9 text-left">
                            <span>2020.bhargav.bodhankar@ves.ac.in</span>
                          </div>
                        </div>
                        <div className="row w-100">
                          <div className="col-md-3 text-right">
                            <span className="title-s">Phone: </span>
                          </div>
                          <div className="col-md-9 text-left">
                            <span>7977287910</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br/>
                  <div className="skill-mf text-left">
                    <h5 className="title-left" style={{paddingLeft: '195px', marginTop: '-15px'}}>Skills</h5>
                        <div style={{paddingTop: '30px'}}>
                          <span>Javascript </span>
                          <span className="pull-right">60%</span>
                          <div className="progressBar">
                          <ProgressBar variant="warning" now={60} />
                          </div>
                        </div>
                        <div>
                          <span>C++ </span>
                          <span className="pull-right">70%</span>
                          <div className="progressBar">
                          <ProgressBar variant="warning" now={70} />
                          </div>
                        </div>
                        <div>
                          <span>Python </span>
                          <span className="pull-right">80%</span>
                          <div className="progressBar">
                          <ProgressBar variant="warning" now={80} />
                          </div>
                        </div>
                        <div>
                          <span>C </span>
                          <span className="pull-right">60%</span>
                          <div className="progressBar">
                          <ProgressBar variant="warning" now={60} />
                          </div>
                        </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0 text-black">
                    <div className="title-box-2 text-left">
                      <h5 className="title-left" style={{paddingTop: '210px', paddingLeft: '175px'}}>About me</h5>
                    </div>
                    <p className="lead">I am a third year student in VESIT studying BTech in Information
                    Technology. Machine learning and related concepts interest me. Exploring deep learning,
                    artificial intelligence, computer vision and data science. Currently improving web
                    development technologies and skills. I have basic knowledge in cyber security.</p>
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