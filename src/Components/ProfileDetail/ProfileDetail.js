import React, { Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import browserRoutes from "../../Routes/browserRoutes";
import { defaultValues } from "../CreateProfile/formDataValues";
import serverRoutes from "../../Routes/serverRoutes";
import axios from "axios";

import { UserContext } from "../../App";

const ProfileDetail = ({}) => {
  const [user] = React.useContext(UserContext);

  const [profileData, setProfileData] = useState(defaultValues);
  const {
    title,
    firstname,
    middlename,
    lastname,
    marriedName,
    motherName,
    fatherName,
    spouseName,
    address,
    homePhone,
    cellPhone,
    workPhone,
    emailAddress,
    middleschool,
    highschool,
    israelSchool,
    collegeAttended,
    gradSchools,
    profession,
    birthday,
    clubs,
    sportsTeams,
    awards,
    committees,
    oldAddresses,
    hillelDayCamp,
    hillelSleepCamp,
    hiliDayCamp,
    hiliWhiteCamp,
    hiliInternationalCamp,
    hili,
    hillel,
    haftr,
    parentOfStudent,
    boards,
    alumniPositions,
    siblings,
    children,
    comment,
    id,
    profilePictureURL,
  } = profileData;
  const history = useHistory();

  const toEditProfile = (e) => {
    e.preventDefault();
    let ROUTE = browserRoutes.EDIT_PROFILE;
    if (JSON.parse(localStorage.getItem("user"))?.admin) {
      ROUTE += "?id=" + window.location?.search?.substring(4);
    }
    history.push(ROUTE);
  };
  const toCreateProfile = (e) => {
    e.preventDefault();
    history.push(browserRoutes.CREATE_PROFILES);
  };

  const queryParams = window.location?.search?.substring(4);
  useEffect(() => {
    if (user?.alumniId || queryParams) {
      axios
        .get(`${serverRoutes.ALUMNI}/${user?.alumniId || queryParams || 0}`)
        .then((res) => {
          setProfileData(res.data);
        })
        .catch((err) =>
          console.log(err.response?.data?.message || "server error")
        );
    }
  }, [user?.alumniId]);

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    history.push(browserRoutes.AUTH);
  };

  const toAdminCenter = (e) => {
    e.preventDefault();
    history.push(browserRoutes.ALL_PROFILES);
  };

  return (
    <Fragment>
      <div className="container">
        <nav className="navbar">
          {/* <img style={{ width: "50%" }} src="images/logo.png" alt="..." /> */}
          <img width="200px" src="images/fake-logo.png" alt="..." />

          <div className="d-flex">
            {JSON.parse(localStorage.getItem("user"))?.admin ? (
              <button
                // className="btn selectwalletbutton my-2 my-sm-0 mr-2"
                className="nav-link mr-2"
                onClick={toAdminCenter}
              >
                Admin Center
              </button>
            ) : (
              <button className="nav-link mr-2">Your Profile</button>
            )}
            <button
              className="btn selectwalletbutton my-2 my-sm-0"
              onClick={logout}
            >
              Log out
            </button>
          </div>
        </nav>
        <div className="container">
          <div
            className="container rounded mt-1 mb-5"
            style={{ backgroundColor: "#1A237E" }}
          >
            <div className="row">
              <div className="col-md-4">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img
                    className="mt-5"
                    src={
                      profilePictureURL
                        ? profilePictureURL
                        : "images/profile-img.png"
                    }
                    width="200px"
                    alt="..."
                  />
                  {/* <span className="font-weight-bold" style={{ color: "#fff" }}>
                    Image Name
                  </span> */}
                  <div className="mt-5 text-center">
                    {!JSON.parse(localStorage.getItem("user"))?.admin &&
                    !JSON.parse(localStorage.getItem("user"))?.alumniId ? (
                      <button
                        className="btn btn-primary profile-button"
                        type="button"
                        onClick={toCreateProfile}
                      >
                        Create Profile
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary profile-button"
                        type="button"
                        onClick={toEditProfile}
                      >
                        Edit Profile
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="p-3 py-5">
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <ul className="row profile-detail">
                        <li className="col-12 col-md-6">
                          <span>Title : </span>
                          <span>{title || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Firstname : </span>
                          <span>{firstname || ""}</span>
                        </li>

                        <li className="col-12 col-md-6">
                          <span>Middlename : </span>
                          <span>{middlename || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Lastname : </span>
                          <span>{lastname || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Marriedname : </span>
                          <span>{marriedName || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Mothername : </span>
                          <span>{motherName || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Fathername : </span>
                          <span>{fatherName || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Spousename : </span>
                          <span>{spouseName || ""}</span>
                        </li>
                      </ul>
                      <ul className="row profile-detail">
                        <li className="col-12 col-md-6">
                          <span>Address Line 1 : </span>
                          <span>{address?.line1 || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Address Line 2 : </span>
                          <span>{address?.line2 || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Address City : </span>
                          <span>{address?.city || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Address State : </span>
                          <span>{address?.state || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Address Zip : </span>
                          <span>{address?.zip || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Address Country : </span>
                          <span>{address?.country || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Home Phone : </span>
                          <span>{homePhone || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Cell Phone : </span>
                          <span>{cellPhone || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Work Phone : </span>
                          <span>{workPhone || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Email Address : </span>
                          <span>{emailAddress || ""}</span>
                        </li>
                      </ul>
                      <ul className="row profile-detail">
                        <li className="col-12 col-md-6">
                          <span>Middleschool Name: </span>
                          <span>{middleschool?.name || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Middleschool Year Started : </span>
                          <span>{middleschool?.yearStarted || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>middleschool Year Ended : </span>
                          <span>{middleschool?.yearEnded || ""}</span>
                        </li>
                      </ul>
                      <ul className="row profile-detail">
                        <li className="col-12 col-md-6">
                          <span>Highschool Name: </span>
                          <span>{highschool?.name || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Highschool Year Started : </span>
                          <span>{highschool?.yearStarted || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Highschool Year Ended : </span>
                          <span>{highschool?.yearEnded || ""}</span>
                        </li>
                      </ul>
                      <ul className="row profile-detail">
                        <li className="col-12 col-md-6">
                          <span>Israelschool Name: </span>
                          <span>{israelSchool?.name || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Israelschool Year Started : </span>
                          <span>{israelSchool?.yearStarted || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Israelschool Year Ended : </span>
                          <span>{israelSchool?.yearEnded || ""}</span>
                        </li>
                      </ul>
                      <ul className="row profile-detail">
                        <li className="col-12 col-md-6">
                          <span>CollegeAttended Name: </span>
                          <span>{collegeAttended?.name || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>CollegeAttended Year Started : </span>
                          <span>{collegeAttended?.yearStarted || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>CollegeAttended Year Ended : </span>
                          <span>{collegeAttended?.yearEnded || ""}</span>
                        </li>
                      </ul>
                      <ul className="row profile-detail">
                        {gradSchools.map((item, index) => (
                          <Fragment key={index}>
                            <li className="col-12 col-md-6">
                              <span>Grad School Name: </span>
                              <span>{item?.name || ""}</span>
                            </li>
                            <li className="col-12 col-md-6">
                              <span>Grad School Year Started : </span>
                              <span>{item?.yearStarted || ""}</span>
                            </li>
                            <li className="col-12 col-md-6">
                              <span>Grad School Year Ended : </span>
                              <span>{item?.yearEnded || ""}</span>
                            </li>
                          </Fragment>
                        ))}
                      </ul>
                      <ul className="row profile-detail">
                        <li className="col-12 col-md-6">
                          <span>Professions : </span>
                          <span>{profession?.join(", ") || ""}</span>
                        </li>
                      </ul>

                      <ul className="row profile-detail">
                        <li className="col-12 col-md-6">
                          <span>Clubs : </span>
                          <span>{clubs?.join(", ") || ""}</span>
                        </li>
                      </ul>
                      <ul className="row profile-detail">
                        <li className="col-12 col-md-6">
                          <span>Sports Teams : </span>
                          <span>{sportsTeams?.join(", ") || ""}</span>
                        </li>
                      </ul>
                      <ul className="row profile-detail">
                        <li className="col-12 col-md-6">
                          <span>Awards : </span>
                          <span>{awards?.join(", ") || ""}</span>
                        </li>
                      </ul>
                      <ul className="row profile-detail">
                        <li className="col-12 col-md-6">
                          <span>Committees : </span>
                          <span>{committees?.join(", ") || ""}</span>
                        </li>
                      </ul>

                      <ul className="row profile-detail">
                        {oldAddresses.map((item, index) => (
                          <Fragment key={index}>
                            <li className="col-12 col-md-6">
                              <span>Old Addresses Line1: </span>
                              <span>{item?.line1 || ""}</span>
                            </li>
                            <li className="col-12 col-md-6">
                              <span>Old Addresses Line2 : </span>
                              <span>{item?.line2 || ""}</span>
                            </li>
                            <li className="col-12 col-md-6">
                              <span>Old Addresses City : </span>
                              <span>{item?.city || ""}</span>
                            </li>
                            <li className="col-12 col-md-6">
                              <span>Old Addresses State : </span>
                              <span>{item?.state || ""}</span>
                            </li>
                            <li className="col-12 col-md-6">
                              <span>Old Addresses Zip : </span>
                              <span>{item?.zip || ""}</span>
                            </li>
                            <li className="col-12 col-md-6">
                              <span>Old Addresses Country : </span>
                              <span>{item?.country || ""}</span>
                            </li>
                          </Fragment>
                        ))}
                      </ul>
                      <ul className="row profile-detail">
                        <li className="col-12 col-md-6">
                          <span>HillelDayCamp Attended : </span>
                          <span>
                            {hillelDayCamp?.attended ? "True" : "False"}
                          </span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HillelDayCamp Start Year : </span>
                          <span>{hillelDayCamp?.startYear || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HillelDayCamp End Year : </span>
                          <span>{hillelDayCamp?.endYear || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HillelDayCamp Speciality : </span>
                          <span>{hillelDayCamp?.specialty || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HillelDayCamp Camper : </span>
                          <span>
                            {hillelDayCamp?.camper ? "True" : "False"}
                          </span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HillelDayCamp Counselor : </span>
                          <span>
                            {hillelDayCamp?.counselor ? "True" : "False"}
                          </span>
                        </li>
                      </ul>

                      <ul className="row profile-detail">
                        <li className="col-12 col-md-6">
                          <span>HillelSleepCamp Attended : </span>
                          <span>
                            {hillelSleepCamp.attended ? "True" : "False"}
                          </span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HillelSleepCamp Start Year : </span>
                          <span>{hillelSleepCamp?.startYear || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HillelSleepCamp End Year : </span>
                          <span>{hillelSleepCamp?.endYear || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HillelSleepCamp Speciality : </span>
                          <span>{hillelSleepCamp?.specialty || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HillelSleepCamp Camper : </span>
                          <span>
                            {hillelSleepCamp?.camper ? "True" : "False"}
                          </span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HillelSleepCamp Counselor : </span>
                          <span>
                            {hillelSleepCamp?.counselor ? "True" : "False"}
                          </span>
                        </li>
                      </ul>

                      <ul className="row profile-detail">
                        <li className="col-12 col-md-6">
                          <span>HiliDayCamp Attended : </span>
                          <span>{hiliDayCamp.attended ? "True" : "False"}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HiliDayCamp Start Year : </span>
                          <span>{hiliDayCamp?.startYear || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HiliDayCamp End Year : </span>
                          <span>{hiliDayCamp?.endYear || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HiliDayCamp Speciality : </span>
                          <span>{hiliDayCamp?.specialty || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HiliDayCamp Camper : </span>
                          <span>{hiliDayCamp?.camper ? "True" : "False"}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HiliDayCamp Counselor : </span>
                          <span>
                            {hiliDayCamp?.counselor ? "True" : "False"}
                          </span>
                        </li>
                      </ul>

                      <ul className="row profile-detail">
                        <li className="col-12 col-md-6">
                          <span>HiliWhiteCamp Attended : </span>
                          <span>
                            {hiliWhiteCamp.attended ? "True" : "False"}
                          </span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HiliWhiteCamp Start Year : </span>
                          <span>{hiliWhiteCamp?.startYear || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HiliWhiteCamp End Year : </span>
                          <span>{hiliWhiteCamp?.endYear || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HiliWhiteCamp Speciality : </span>
                          <span>{hiliWhiteCamp?.specialty || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HiliWhiteCamp Camper : </span>
                          <span>
                            {hiliWhiteCamp?.camper ? "True" : "False"}
                          </span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HiliWhiteCamp Counselor : </span>
                          <span>
                            {hiliWhiteCamp?.counselor ? "True" : "False"}
                          </span>
                        </li>
                      </ul>

                      <ul className="row profile-detail">
                        <li className="col-12 col-md-6">
                          <span>HiliInternationalCamp Attended : </span>
                          <span>
                            {hiliInternationalCamp.attended ? "True" : "False"}
                          </span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HiliInternationalCamp Start Year : </span>
                          <span>{hiliInternationalCamp?.startYear || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HiliInternationalCamp End Year : </span>
                          <span>{hiliInternationalCamp?.endYear || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HiliInternationalCamp Speciality : </span>
                          <span>{hiliInternationalCamp?.specialty || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HiliInternationalCamp Camper : </span>
                          <span>
                            {hiliInternationalCamp?.camper ? "True" : "False"}
                          </span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>HiliInternationalCamp Counselor : </span>
                          <span>
                            {hiliInternationalCamp?.counselor
                              ? "True"
                              : "False"}
                          </span>
                        </li>
                      </ul>

                      <ul className="row profile-detail">
                        <li className="col-12 col-md-6">
                          <span>Hili : </span>
                          <span>{hili ? "True" : "False"}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Hillel : </span>
                          <span>{hillel ? "True" : "False"}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Haftr : </span>
                          <span>{haftr ? "True" : "False"}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>ParentOfStudent : </span>
                          <span>{parentOfStudent ? "True" : "False"}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>Boards : </span>
                          <span>{boards?.join(", ") || ""}</span>
                        </li>
                        <li className="col-12 col-md-6">
                          <span>AlumniPositions : </span>
                          <span>{alumniPositions?.join(", ") || ""}</span>
                        </li>
                      </ul>

                      <ul className="row profile-detail">
                        {siblings.map((item, index) => (
                          <Fragment key={index}>
                            <li className="col-12 col-md-6">
                              <span>Siblings firstname: </span>
                              <span>{item?.firstname || ""}</span>
                            </li>
                            <li className="col-12 col-md-6">
                              <span>Siblings Lastname : </span>
                              <span>{item?.lastname || ""}</span>
                            </li>
                            <li className="col-12 col-md-6">
                              <span>Siblings Year Completed : </span>
                              <span>{item?.yearCompleted || ""}</span>
                            </li>
                            <li className="col-12 col-md-6">
                              <span>Siblings MiddleSchool Name : </span>
                              <span>{item?.middleSchool.name || ""}</span>
                            </li>
                            <li className="col-12 col-md-6">
                              <span>Siblings MiddleSchool YearStarted : </span>
                              <span>
                                {item?.middleSchool.yearStarted || ""}
                              </span>
                            </li>
                            <li className="col-12 col-md-6">
                              <span>Siblings MiddleSchool YearEnded : </span>
                              <span>{item?.middleSchool.yearEnded || ""}</span>
                            </li>

                            <li className="col-12 col-md-6">
                              <span>Siblings HighSchool Name : </span>
                              <span>{item?.highSchool.name || ""}</span>
                            </li>
                            <li className="col-12 col-md-6">
                              <span>Siblings HighSchool YearStarted : </span>
                              <span>{item?.highSchool.yearStarted || ""}</span>
                            </li>
                            <li className="col-12 col-md-6">
                              <span>Siblings HighSchool YearEnded : </span>
                              <span>{item?.highSchool.yearEnded || ""}</span>
                            </li>
                          </Fragment>
                        ))}
                      </ul>

                      <ul className="row profile-detail">
                        {children.map((item, index) => (
                          <Fragment key={index}>
                            <li className="col-12 col-md-6">
                              <span>Children firstname: </span>
                              <span>{item?.firstname || ""}</span>
                            </li>
                            <li className="col-12 col-md-6">
                              <span>Children Lastname : </span>
                              <span>{item?.lastname || ""}</span>
                            </li>
                            <li className="col-12 col-md-6">
                              <span>Children Graduation Year : </span>
                              <span>{item?.graduationYear || ""}</span>
                            </li>
                          </Fragment>
                        ))}
                      </ul>

                      <ul className="row profile-detail">
                        <li className="col-12 col-md-6">
                          <span>Comment : </span>
                          <span>{comment || ""}</span>
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
    </Fragment>
  );
};

export default ProfileDetail;
