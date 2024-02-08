import React, { Fragment } from "react";
// import { SiCodechef, SiHackerrank } from "react-icons/si";

function Resume() {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 bg-dark slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">Nirav Motivaras</h2>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EXPERIENCE</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    Jr. Javascript Developer
                  </h4>
                  <h6 className="blue-label px-2 py-1">Jul 2022 - Present</h6>
                  <p className="m-0">SoftYoi LLP · Full-time</p>
                  <p>Ahmedabad, Gujarat, India</p>
                </li>
                {/* <li>
                  <h4 className="ff-jose my-1 text-red">Internship Trainee</h4>
                  <h6 className="blue-label px-2 py-1">Dec 2020 - Apr 2021</h6>
                  <p className="m-0">TatvaSoft · Internship</p>
                  <p>Ahmedabad, Gujarat, India</p>
                </li> */}
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EDUCATION</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    Msc in Infromation Technology
                  </h4>
                  <h6 className="blue-label px-2 py-1">2020 - 2022</h6>
                  <p className="m-0">Bhakta Kavi Narsinh Mehta University</p>
                  {/* <p>CGPA: 8.05</p> */}
                </li>
                {/* <li>
                  <h4 className="ff-jose my-1 text-red">
                    Higher Secondary School
                  </h4>
                  <h6 className="blue-label px-2 py-1">March 2017</h6>
                  <p className="m-0">Navyug Vidyalaya Porbandar</p>
                  <p>Grade: 71.69 %</p>
                </li> */}
              </ul>
            </div>
          </div>

          <hr></hr>

          {/* <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">PROFILE</h4>
              <h1>
                <a
                  href="https://www.codechef.com/users/yagnik_003"
                  target="/blank"
                  className="text-white text-decoration-none mx-2"
                >
                  <SiCodechef className="zoom-on-hover" />
                </a>
                <a
                  href="https://www.hackerrank.com/Yagnik_003"
                  target="/blank"
                  className="text-white text-decoration-none mx-2"
                >
                  <SiHackerrank className="zoom-on-hover" />
                </a>
              </h1>
            </div>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
}

export default Resume;
