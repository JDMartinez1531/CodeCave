import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle } from "mdbreact";
import "./profile1.css"

const items = [
  { name: "home", label: "Home" },
  { name: "billing", label: "Billing" },
  { name: "settings", label: "Settings" },
];

const ProfileEdit1 = () => {
  return (
    <div>
      <MDBRow>
        <MDBCol md="2"><MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Channel List</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <Sidebar items={items}></Sidebar>
                </MDBDropdownMenu>
              </MDBDropdown>
          
        </MDBCol>
        <MDBCol md="8">
          <MDBContainer>
            <MDBRow>
              <div style={{ marginTop: "10px", fontSize: "40px" }}>
                User Info
              </div>
            </MDBRow>
            <MDBRow>
              <MDBCol md="2"></MDBCol>
              <MDBCol md="8">
                <MDBRow className>
                  <MDBCol sm="5">
                    <div style={{ marginTop: "10px" }}></div>
                    <label htmlFor="FirstName" className="grey-text">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="FirstName"
                      className="form-control"
                    />
                  </MDBCol>

                  <MDBCol sm="2">
                    <div style={{ marginTop: "10px" }}></div>
                    <label htmlFor="MiddleName" className="grey-text">
                      Middle Initial
                    </label>
                    <input
                      type="text"
                      id="MiddleName"
                      className="form-control"
                    />
                  </MDBCol>

                  <MDBCol sm="5">
                    <div style={{ marginTop: "10px" }}></div>
                    <label htmlFor="LastName" className="grey-text">
                      Last Name
                    </label>
                    <input type="text" id="LastName" className="form-control" />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol sm="5">
                    <div style={{ marginTop: "10px" }}></div>
                    <label htmlFor="personCity" className="grey-text">
                      City
                    </label>
                    <input
                      type="text"
                      id="personCity"
                      className="form-control"
                    />
                  </MDBCol>

                  <MDBCol sm="5">
                    <div style={{ marginTop: "10px" }}></div>
                    <label htmlFor="personState" className="grey-text">
                      State
                    </label>
                    <input
                      type="text"
                      id="personState"
                      className="form-control"
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol>
                    <div style={{ marginTop: "10px" }}></div>
                    <label htmlFor="personJobTitle" className="grey-text">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="personJobTitle"
                      className="form-control"
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol>
                    <div style={{ marginTop: "10px" }}></div>
                    <label htmlFor="personGitHub" className="grey-text">
                      GitHub URL
                    </label>
                    <input
                      type="text"
                      id="personGitHub"
                      className="form-control"
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol>
                    <div style={{ marginTop: "10px" }}></div>
                    <label htmlFor="personPortfolio" className="grey-text">
                      Portfolio URL
                    </label>
                    <input
                      type="text"
                      id="personPortfolio"
                      className="form-control"
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol>
                    <div style={{ marginTop: "10px" }}></div>
                    <label htmlFor="personBio" className="grey-text">
                      Summary
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="10"
                    ></textarea>
                  </MDBCol>
                </MDBRow>

                <MDBRow end>
                  <div className="text-center">
                    <MDBBtn color="primary">{"Save & Next"}</MDBBtn>
                  </div>
                  <div
                    style={{ marginLeft: "10px", marginRight: "15px" }}
                    className="text-center"
                  >
                    <MDBBtn color="warning">Exit</MDBBtn>
                  </div>
                </MDBRow>
              </MDBCol>
              <MDBCol md="3"></MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default ProfileEdit1;
