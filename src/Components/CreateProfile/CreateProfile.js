import React, { useContext, useState } from "react";
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
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const CreateProfile = () => {
  const history = useHistory();
  const [formData, setFormData] = useState(defaultValues);
  const [image, setImage] = useState();
  const [user, setUser] = useContext(UserContext);

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
                      Create Profile
                    </h4>
                  </div>
                  <Names {...{ formData, setFormData }} />
                  <Address {...{ formData, setFormData }} />
                  <Phones {...{ formData, setFormData }} />
                  <MiddleSchool {...{ formData, setFormData }} />
                  <HighSchool {...{ formData, setFormData }} />
                  <IsraelSchool {...{ formData, setFormData }} />
                  <CollegeAttended {...{ formData, setFormData }} />
                  <GradSchools {...{ formData, setFormData }} />
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
                        type="date"
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
                  <OldAddresses {...{ formData, setFormData }} />
                  <div
                    className="row mt-3 pt-2"
                    style={{ borderTop: "1px solid #fff" }}
                  >
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        Hillel Day Camp Start Year
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Hillel Day Camp Start Year"
                        name="hillelDayCamp.startYear"
                        value={hillelDayCamp?.startYear}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Hillel Day Camp End Year</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Hillel Day Camp End Year"
                        name="hillelDayCamp.endYear"
                        value={hillelDayCamp?.endYear}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        Hillel Day Camp Specialty
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Hillel Day Camp Specialty"
                        name="hillelDayCamp.specialty"
                        value={hillelDayCamp?.specialty}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Hillel Day Camp Attended</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter Hillel Day Camp Attended"
                        name="hillelDayCamp.attended"
                        value={hillelDayCamp?.attended}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Hillel Day Camp Camper</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter Hillel Day Camp Camper"
                        name="hillelDayCamp.camper"
                        value={hillelDayCamp?.camper}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        Hillel Day Camp Counselor
                      </label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter Hillel Day Camp Counselor"
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
                        Hillel Sleep Away Start Year
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Hillel Sleep Away Start Year"
                        name="hillelSleepCamp.startYear"
                        value={hillelSleepCamp?.startYear}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        Hillel Sleep Away End Year
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Hillel Sleep Away End Year"
                        name="hillelSleepCamp.endYear"
                        value={hillelSleepCamp?.endYear}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        Hillel Sleep Away Specialty
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Hillel Sleep Away Specialty"
                        name="hillelSleepCamp.specialty"
                        value={hillelSleepCamp?.specialty}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        Hillel Sleep Away Attended
                      </label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter Hillel Sleep Away Attended"
                        name="hillelSleepCamp.attended"
                        value={hillelSleepCamp?.attended}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Hillel Sleep Away Camper</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter Hillel Sleep Away Camper"
                        name="hillelSleepCamp.camper"
                        value={hillelSleepCamp?.camper}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        Hillel Sleep Away Counselor
                      </label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter Hillel Sleep Away Counselor"
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
                      <label className="labels">Hili Day Camp Start Year</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Hili Day Camp Start Year"
                        name="hiliDayCamp.startYear"
                        value={hiliDayCamp?.startYear}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Hili Day Camp End Year</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Hili Day Camp End Year"
                        name="hiliDayCamp.endYear"
                        value={hiliDayCamp?.endYear}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Hili Day Camp Specialty</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Hili Day Camp Specialty"
                        name="hiliDayCamp.specialty"
                        value={hiliDayCamp?.specialty}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Hili Day Camp Attended</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter Hili Day Camp Attended"
                        name="hiliDayCamp.attended"
                        value={hiliDayCamp?.attended}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Hili Day Camp Camper</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter Hili Day Camp Camper"
                        name="hiliDayCamp.camper"
                        value={hiliDayCamp?.camper}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Hili Day Camp Counselor</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter Hili Day Camp Counselor"
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
                      <label className="labels">
                        Hili White Camp Start Year
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Hili White Camp Start Year"
                        name="hiliWhiteCamp.startYear"
                        value={hiliWhiteCamp?.startYear}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Hili White Camp End Year</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Hili White Camp End Year"
                        name="hiliWhiteCamp.endYear"
                        value={hiliWhiteCamp?.endYear}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        Hili White Camp Specialty
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Hili White Camp Specialty"
                        name="hiliWhiteCamp.specialty"
                        value={hiliWhiteCamp?.specialty}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Hili White Camp Attended</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter Hili White Camp Attended"
                        name="hiliWhiteCamp.attended"
                        value={hiliWhiteCamp?.attended}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Hili White Camp Camper</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter Hili White Camp Camper"
                        name="hiliWhiteCamp.camper"
                        value={hiliWhiteCamp?.camper}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        Hili White Camp Counselor
                      </label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter Hili White Camp Counselor"
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
                        Hili International Start Year
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Hili International Start Year"
                        name="hiliInternationalCamp.startYear"
                        value={hiliInternationalCamp?.startYear}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        Hili International End Year
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Hili International End Year"
                        name="hiliInternationalCamp.endYear"
                        value={hiliInternationalCamp?.endYear}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        Hili International Specialty
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Hili International Specialty"
                        name="hiliInternationalCamp.specialty"
                        value={hiliInternationalCamp?.specialty}
                        onChange={(e) => onChange(e, formData, setFormData)}
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        Hili International Attended
                      </label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter Hili International Attended"
                        name="hiliInternationalCamp.attended"
                        value={hiliInternationalCamp?.attended}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        Hili International Camper
                      </label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter Hili International Camper"
                        name="hiliInternationalCamp.camper"
                        value={hiliInternationalCamp?.camper}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">
                        Hili International Counselor
                      </label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter Hili International Counselor"
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
                      <label className="labels">Boards</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Boards"
                        name="boards"
                        value={boards}
                        onChange={(e) =>
                          onChangeArrayType(e, formData, setFormData)
                        }
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Alumni Positions</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Alumni Positions"
                        name="alumniPositions"
                        value={alumniPositions}
                        onChange={(e) =>
                          onChangeArrayType(e, formData, setFormData)
                        }
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Hili</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter Hili"
                        name="hili"
                        value={hili}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Hillel</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter Hillel"
                        name="hillel"
                        value={hillel}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Haftr</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter Haftr"
                        name="haftr"
                        value={haftr}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Parent Of Student</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        placeholder="Enter Parent Of Student"
                        name="parentOfStudent"
                        value={parentOfStudent}
                        onChange={(e) => onChange(e, formData, setFormData)}
                        require
                      />
                    </div>
                  </div>
                  <Siblings {...{ formData, setFormData }} />
                  <Children {...{ formData, setFormData }} />
                  <div
                    className="row mt-3 pt-2"
                    style={{ borderTop: "1px solid #fff" }}
                  >
                    {user?.admin !== undefined && user?.admin && (
                      <div className="col-md-12 col-sm-12">
                        <label className="labels">comment</label>
                        {/* <input
                       type="text"
                       className="form-control"
                       placeholder="Enter comment"
                       name="comment"
                       value={comment}
                       onChange={(e) => onChange(e, formData, setFormData)}
                     /> */}
                        <textarea
                          className="form-control"
                          placeholder="Enter comment"
                          name="comment"
                          // value={comment}
                          onChange={(e) => onChange(e, formData, setFormData)}
                        >
                          {comment}
                        </textarea>
                      </div>
                    )}
                    <div className="col-md-4 col-sm-6">
                      <label className="labels">Upload profile Picture</label>
                      <input
                        type="file"
                        style={{ color: "white" }}
                        name="profilePictureURL"
                        onChange={(e) =>
                          onFileChange(e, formData, setFormData, setImage)
                        }
                      />
                    </div>
                  </div>
                  {image && (
                    <div>
                      <img src={image} alt="..." width="200" height="150" />
                    </div>
                  )}
                  <div className="mt-5 text-center">
                    <button
                      className="btn btn-primary profile-button"
                      type="button"
                      // type="submit"
                      onClick={(e) => onSubmit(e, formData, history, setUser)}
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

export default CreateProfile;
