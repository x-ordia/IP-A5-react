import React from 'react';
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, 
//             MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import './index.css';

export default function EditButton() {
  return (
    <div>
        <div className="row">
            <div className="col-md-4 animated fadeIn">
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src="../public/profile.jpg"
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    Bhargav Bodhankar
                  </h5>
                  <p className="card-text">
                    Thane, Maharashtra
                    <br />
                    <span className="phone">7977287910</span>
                  </p>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}