import React, { useEffect, useState } from "react";
// import MaterialTable from "material-table";
// import tableIcons from "./MaterialTableIcons";
import { useHistory } from "react-router-dom";
import browserRoutes from "../../Routes/browserRoutes";
import serverRoutes from "../../Routes/serverRoutes";
import axios from "axios";
// import { data } from "./data";
import { UserContext } from "../../App";
// import setAuthToken from "../../utils/setAuthToken";
import AllProfilesItem from "./AllProfilesItem";
import Pagination from "@material-ui/lab/Pagination";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const AllProfiles = () => {
  const [user, setUser] = React.useContext(UserContext);
  const history = useHistory();
  const RECORD_PER_PAGE = 10;

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [data, setData] = useState([]);
  const [countData, setCountData] = useState(60);

  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen

  const handleChange = (event, value) => {
    setScreen(value);
    axios
      .get(
        `${serverRoutes.ALUMNI}?page=${value}&limit=${RECORD_PER_PAGE}&firstname=${firstname}&lastname=${lastname}`
      )
      .then((res) => {
        setData([...res.data.alumni]);
      })
      .catch((err) => console.log(err.message));
  };
  // const countData = data && data.length;

  const onChangeFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const onClickSearch = (e) => {
    e.preventDefault();
    axios
      .get(
        `${
          serverRoutes.ALUMNI
        }?page=${1}&limit=${RECORD_PER_PAGE}&firstname=${firstname}&lastname=${lastname}`
      )
      .then((res) => {
        setData([...res.data.alumni]);
        setCountData(res.data.pageInfo?.lastPage * RECORD_PER_PAGE);
      })
      .catch((err) => console.log(err.message));
  };

  const onChangeLastname = (e) => {
    setLastname(e.target.value);
  };

  const createNewProfile = () => {
    history.push(browserRoutes.CREATE_PROFILES);
  };

  //noOfScreens
  useEffect(() => {
    if (countData % RECORD_PER_PAGE === 0) {
      setCount(Math.floor(countData / RECORD_PER_PAGE));
    } else {
      setCount(Math.floor(countData / RECORD_PER_PAGE) + 1);
    }
  }, [countData]);

  useEffect(() => {
    axios
      .get(`${serverRoutes.ALUMNI}?page=${screen}&limit=${RECORD_PER_PAGE}`)
      .then((res) => {
        setData(res.data.alumni);
        setCountData(res.data.pageInfo?.lastPage * RECORD_PER_PAGE);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    setUser(null);
    history.push(browserRoutes.AUTH);
  };

  return (
    <>
      <div className="container">
        <nav className="navbar">
          {/* <img style={{ width: "50%" }} src="images/logo.png" alt="..." /> */}
          <img width="200px" src="images/haftr-logo.jpg" alt="..." />
          <div className="d-flex">
            {/* <a className="nav-link" href="#!">
              Your Profile
            </a> */}
            <button
              // className="btn selectwalletbutton my-2 my-sm-0"
              className="nav-link"
            >
              {user.admin ? "Admin Center" : "Find Others"}
            </button>
            <button
              className="btn selectwalletbutton ml-2"
              type="button"
              onClick={logout}
            >
              Log out
            </button>
          </div>
        </nav>
        <div className="container">
          <div className="row mt-2">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">All Alumni</div>
                <div className="card-body">
                  <div className="d-flex justify-content-end">
                    <div
                      className="input-group rounded mr-2"
                      style={{ width: "250px" }}
                    >
                      <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Search Firstname"
                        value={firstname}
                        onChange={onChangeFirstname}
                        aria-label="Search"
                        aria-describedby="search-addon"
                      />
                      <span
                        className="input-group-text border-0 search-name"
                        id="search-addon"
                        onClick={onClickSearch}
                      >
                        <i className="fas fa-search"></i>
                      </span>
                    </div>
                    <div
                      className="input-group rounded"
                      style={{ width: "250px" }}
                    >
                      <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Search Lastname"
                        value={lastname}
                        onChange={onChangeLastname}
                        aria-label="Search"
                        aria-describedby="search-addon"
                      />
                      <span
                        className="input-group-text border-0 search-name"
                        id="search-addon"
                        onClick={onClickSearch}
                      >
                        <i className="fas fa-search"></i>
                      </span>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <Table className="table">
                      <Thead>
                        <Tr>
                          <Th>Profile Picture</Th>
                          <Th>First Name</Th>
                          <Th>Last Name</Th>
                          <Th>Cell Phone</Th>
                          <Th>Email Address</Th>
                          <Th>Class Of</Th>
                          <Th></Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {data?.length > 0 &&
                          data.map((record) => (
                            <Tr key={record?.id}>
                              {/* <AllProfilesItem record={record} /> */}
                              <Td>
                                {/* className="text-center" */}
                                <div>
                                  <img
                                    src={
                                      record?.profilePictureURL ||
                                      "images/profile-img.png"
                                    }
                                    className="rounded"
                                    alt="..."
                                    style={{
                                      width: "40px",
                                      height: "40px",
                                      objectFit: "cover",
                                      borderRadius: "50%",
                                    }}
                                  />
                                </div>
                              </Td>
                              <Td>{record?.firstname}</Td>
                              <Td>{record?.lastname}</Td>
                              <Td>{record?.cellPhone}</Td>
                              <Td>{record?.emailAddress}</Td>
                              <Td>{record?.highSchoolGradYear}</Td>
                              <Td>
                                <button
                                  className="btn btn-sm selectwalletbutton"
                                  onClick={() =>
                                    history.push(
                                      browserRoutes.PROFILE_DETAIL +
                                        "?id=" +
                                        record?.id
                                    )
                                  }
                                >
                                  Explore
                                </button>
                              </Td>
                            </Tr>
                          ))}
                      </Tbody>
                    </Table>

                    {/* <table
                      className="table"
                      style={{ backgroundColor: "#fff" }}
                    >
                      <thead>
                        <tr>
                          <th scope="col">Profile Picture</th>
                          <th scope="col">First Name</th>
                          <th scope="col">Last Name</th>
                          <th scope="col">Cell Phone</th>
                          <th scope="col">Email Address</th>
                          <th scope="col">Class Of</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.length > 0 &&
                          data.map((record) => (
                            <tr key={record?.id}>
                              <AllProfilesItem record={record} />
                            </tr>
                          ))}
                      </tbody>
                    </table> */}
                    {(!data || (data && data.length === 0)) && (
                      <h4 className="text-center">No Record Found</h4>
                    )}
                  </div>
                  <div style={{ marginBottom: "5px", float: "right" }}>
                    <Pagination
                      count={count}
                      shape="rounded"
                      screen={screen}
                      onChange={handleChange}
                      showFirstButton
                      showLastButton
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row mt-2 d-flex mb-2"
            style={{ justifyContent: "space-between" }}
          >
            {/* <div className="col-lg-6"> */}
            <div>
              {user.admin && (
                <button
                  className="btn selectwalletbutton my-2 my-sm-0"
                  onClick={createNewProfile}
                >
                  Create New Profile
                </button>
              )}
            </div>
            {/* </div>
            <div className="col-lg-6 myright"> */}
            <div>
              <button
                className="btn selectwalletbutton"
                onClick={() => history.goBack()}
              >
                Previous Page
              </button>

              <button
                className="btn selectwalletbutton ml-2"
                onClick={() => history.goForward()}
              >
                Next Page
              </button>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProfiles;
