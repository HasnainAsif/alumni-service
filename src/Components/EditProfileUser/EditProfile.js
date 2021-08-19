import React, { useState, useEffect } from "react";
import { defaultValues } from "./formDataValues";
import {
  onChange,
  onChangeArrayType,
  onFileChange,
  onSubmit,
} from "./profileFunctions";
import Navbar from "./Navbar";
import Names from "./Names";
import Address from "./Address";
import Phones from "./Phones";
import MiddleSchool from "./MiddleSchool";
import HighSchool from "./HighSchool";
import IsraelSchool from "./IsraelSchool";
import CollegeAttended from "./CollegeAttended";
import GradSchools from "./GradSchools";
import OldAddresses from "./OldAddresses";
import Siblings from "./Siblings";
import Children from "./Children";

import serverRoutes from "../../Routes/serverRoutes";
import axios from "axios";

import { UserContext } from "../../App";
import { useHistory } from "react-router-dom";

const EditProfile = () => {
  const history = useHistory();

  const [user] = React.useContext(UserContext);

  const [formData, setFormData] = useState(defaultValues);
  const [gradschoolFields, setGradschoolFields] = useState([]);
  const [oldAddressesFields, setOldAddressesFields] = useState([]);
  const [siblingsFields, setSiblingsFields] = useState([]);
  const [childrenFields, setChildrenFields] = useState([]);

  const {
    profession,
    birthday,
    clubs,
    sportsTeams,
    awards,
    committees,
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
    comment,
    profilePictureURL,
  } = formData;

  const queryParams = window.location?.search?.substring(4);
  useEffect(() => {
    if (user?.alumniId || queryParams) {
      axios
        .get(`${serverRoutes.ALUMNI}/${user?.alumniId || queryParams || 0}`)
        .then((res) => {
          setFormData(res.data);
          setGradschoolFields(res.data.gradSchools);
          setOldAddressesFields(res.data.oldAddresses);
          setSiblingsFields(res.data.siblings);
          setChildrenFields(res.data.children);
        })
        .catch((err) =>
          console.log(err.response?.data?.message || "server error")
        );
    }
  }, [user?.alumniId]);

  return (
    <div className="container">
      <Navbar />
      <div className="container">
        <div
          className="container rounded mt-1 mb-5"
          style={{ backgroundColor: "#1A237E" }}
        >
          <div className="row">
            {/* <div className="col-md-4 ">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  className="mt-5"
                  src="images/profile.png"
                  width="200px"
                  alt="..."
                />
                <span className="font-weight-bold" style={{ color: "#fff" }}>
                  Image Name
                </span>
              </div>
            </div> */}
            <div className="col-md-12">
              <div className="p-3 py-5">
                {/* <form onSubmit={onSubmit}> */}
                <form>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right" style={{ color: "#fff" }}>
                      Edit Profile
                    </h4>
                  </div>
                  <Names {...{ formData, setFormData }} />
                  <Address {...{ formData, setFormData }} />
                  <Phones {...{ formData, setFormData }} />
                  <MiddleSchool {...{ formData, setFormData }} />
                  <HighSchool {...{ formData, setFormData }} />
                  <IsraelSchool {...{ formData, setFormData }} />
                  <CollegeAttended {...{ formData, setFormData }} />
                  <GradSchools
                    {...{ formData, setFormData, gradschoolFields }}
                  />
                  <div
                    className="row mt-3 pt-2"
                    style={{ borderTop: "1px solid #fff" }}
                  >
                    <div className="col-md-4 col-sm-6 mb-2">
                      <label className="labels">Profession</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Profession"
                        name="profession"
                        value={profession}
                        onChange={(e) =>
                          onChangeArrayType(e, formData, setFormData)
                        }
                      />
                      <small style={{ color: "white" }}>
                        separate with commas like: profession1, profession2
                      </small>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Birthday</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Birthday"
                        name="birthday"
                        value={birthday}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Clubs</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Clubs"
                        name="clubs"
                        value={clubs}
                        onChange={(e) =>
                          onChangeArrayType(e, formData, setFormData)
                        }
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Sports Teams</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Sports Teams"
                        name="sportsTeams"
                        value={sportsTeams}
                        onChange={(e) =>
                          onChangeArrayType(e, formData, setFormData)
                        }
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Awards</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Awards"
                        name="awards"
                        value={awards}
                        onChange={(e) =>
                          onChangeArrayType(e, formData, setFormData)
                        }
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Committees</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Committees"
                        name="committees"
                        value={committees}
                        onChange={(e) =>
                          onChangeArrayType(e, formData, setFormData)
                        }
                      />
                    </div>
                  </div>
                  <OldAddresses
                    {...{ formData, setFormData, oldAddressesFields }}
                  />
                  <div
                    className="row mt-3 pt-2"
                    style={{ borderTop: "1px solid #fff" }}
                  >
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">hillelDayCamp Start Year</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter hillelDayCamp Start Year"
                        name="hillelDayCamp.startYear"
                        value={hillelDayCamp?.startYear}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">hillelDayCamp End Year</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter hillelDayCamp End Year"
                        name="hillelDayCamp.endYear"
                        value={hillelDayCamp?.endYear}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">hillelDayCamp Specialty</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter hillelDayCamp Specialty"
                        name="hillelDayCamp.specialty"
                        value={hillelDayCamp?.specialty}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">hillelDayCamp Attended</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter hillelDayCamp Attended"
                        name="hillelDayCamp.attended"
                        value={hillelDayCamp?.attended}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">hillelDayCamp Camper</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter hillelDayCamp Camper"
                        name="hillelDayCamp.camper"
                        value={hillelDayCamp?.camper}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">hillelDayCamp Counselor</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter hillelDayCamp Counselor"
                        name="hillelDayCamp.counselor"
                        value={hillelDayCamp?.counselor}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                  </div>
                  <div
                    className="row mt-3 pt-2"
                    style={{ borderTop: "1px solid #fff" }}
                  >
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        HillelSleepCamp Start Year
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter hillelSleepCamp Start Year"
                        name="hillelSleepCamp.startYear"
                        value={hillelSleepCamp?.startYear}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">HillelSleepCamp End Year</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter hillelSleepCamp End Year"
                        name="hillelSleepCamp.endYear"
                        value={hillelSleepCamp?.endYear}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        HillelSleepCamp Specialty
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter hillelSleepCamp Specialty"
                        name="hillelSleepCamp.specialty"
                        value={hillelSleepCamp?.specialty}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">HillelSleepCamp Attended</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter hillelSleepCamp Attended"
                        name="hillelSleepCamp.attended"
                        value={hillelSleepCamp?.attended}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">HillelSleepCamp Camper</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter hillelSleepCamp Camper"
                        name="hillelSleepCamp.camper"
                        value={hillelSleepCamp?.camper}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        HillelSleepCamp Counselor
                      </label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter hillelSleepCamp Counselor"
                        name="hillelSleepCamp.counselor"
                        value={hillelSleepCamp?.Counselor}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                  </div>
                  <div
                    className="row mt-3 pt-2"
                    style={{ borderTop: "1px solid #fff" }}
                  >
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">hiliDayCamp Start Year</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter hiliDayCamp Start Year"
                        name="hiliDayCamp.startYear"
                        value={hiliDayCamp?.startYear}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">hiliDayCamp End Year</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter hiliDayCamp End Year"
                        name="hiliDayCamp.endYear"
                        value={hiliDayCamp?.endYear}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">hiliDayCamp Specialty</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter hiliDayCamp Specialty"
                        name="hiliDayCamp.specialty"
                        value={hiliDayCamp?.specialty}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">hiliDayCamp Attended</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter hiliDayCamp Attended"
                        name="hiliDayCamp.attended"
                        value={hiliDayCamp?.attended}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">hiliDayCamp Camper</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter hiliDayCamp Camper"
                        name="hiliDayCamp.camper"
                        value={hiliDayCamp?.camper}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">hiliDayCamp Counselor</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter hiliDayCamp Counselor"
                        name="hiliDayCamp.counselor"
                        value={hiliDayCamp?.Counselor}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                  </div>
                  <div
                    className="row mt-3 pt-2"
                    style={{ borderTop: "1px solid #fff" }}
                  >
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">hiliWhiteCamp Start Year</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter hiliWhiteCamp Start Year"
                        name="hiliWhiteCamp.startYear"
                        value={hiliWhiteCamp?.startYear}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">hiliWhiteCamp End Year</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter hiliWhiteCamp End Year"
                        name="hiliWhiteCamp.endYear"
                        value={hiliWhiteCamp?.endYear}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">hiliWhiteCamp Specialty</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter hiliWhiteCamp Specialty"
                        name="hiliWhiteCamp.specialty"
                        value={hiliWhiteCamp?.specialty}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">hiliWhiteCamp Attended</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter hiliWhiteCamp Attended"
                        name="hiliWhiteCamp.attended"
                        value={hiliWhiteCamp?.attended}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">hiliWhiteCamp Camper</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter hiliWhiteCamp Camper"
                        name="hiliWhiteCamp.camper"
                        value={hiliWhiteCamp?.camper}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">hiliWhiteCamp Counselor</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter hiliWhiteCamp Counselor"
                        name="hiliWhiteCamp.counselor"
                        value={hiliWhiteCamp?.Counselor}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                  </div>
                  <div
                    className="row mt-3 pt-2"
                    style={{ borderTop: "1px solid #fff" }}
                  >
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        hiliInternationalCamp Start Year
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter hiliInternationalCamp Start Year"
                        name="hiliInternationalCamp.startYear"
                        value={hiliInternationalCamp?.startYear}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        hiliInternationalCamp End Year
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter hiliInternationalCamp End Year"
                        name="hiliInternationalCamp.endYear"
                        value={hiliInternationalCamp?.endYear}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        hiliInternationalCamp Specialty
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter hiliInternationalCamp Specialty"
                        name="hiliInternationalCamp.specialty"
                        value={hiliInternationalCamp?.specialty}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        hiliInternationalCamp Attended
                      </label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter hiliInternationalCamp Attended"
                        name="hiliInternationalCamp.attended"
                        value={hiliInternationalCamp?.attended}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        hiliInternationalCamp Camper
                      </label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter hiliInternationalCamp Camper"
                        name="hiliInternationalCamp.camper"
                        value={hiliInternationalCamp?.camper}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        hiliInternationalCamp Counselor
                      </label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter hiliInternationalCamp Counselor"
                        name="hiliInternationalCamp.counselor"
                        value={hiliInternationalCamp?.Counselor}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                  </div>
                  <div
                    className="row mt-3 pt-2"
                    style={{ borderTop: "1px solid #fff" }}
                  >
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">boards</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter boards"
                        name="boards"
                        value={boards}
                        onChange={(e) =>
                          onChangeArrayType(e, formData, setFormData)
                        }
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">alumniPositions</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter alumniPositions"
                        name="alumniPositions"
                        value={alumniPositions}
                        onChange={(e) =>
                          onChangeArrayType(e, formData, setFormData)
                        }
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">hili</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter hili"
                        name="hili"
                        value={hili}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">hillel</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter hillel"
                        name="hillel"
                        value={hillel}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">haftr</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter haftr"
                        name="haftr"
                        value={haftr}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">parentOfStudent</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter parentOfStudent"
                        name="parentOfStudent"
                        value={parentOfStudent}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                  </div>
                  <Siblings {...{ formData, setFormData, siblingsFields }} />
                  <Children {...{ formData, setFormData, childrenFields }} />
                  <div
                    className="row mt-3 pt-2"
                    style={{ borderTop: "1px solid #fff" }}
                  >
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">comment</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter comment"
                        name="comment"
                        value={comment}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    {/* <div className="col-md-4 col-sm-6">
                      <label className="labels">Upload profilePictureURL</label>
                      <input
                        type="file"
                        style={{ color: "white" }}
                        name="profilePictureURL"
                        onChange={(e) => onFileChange(e, formData, setFormData)}
                      />
                    </div> */}
                  </div>
                  <div className="mt-5 text-center">
                    <button
                      className="btn btn-primary profile-button"
                      type="button"
                      // type="submit"
                      onClick={(e) =>
                        onSubmit({
                          e,
                          formData,
                          alumniId: user?.alumniId || queryParams,
                          history,
                        })
                      }
                    >
                      Save Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
