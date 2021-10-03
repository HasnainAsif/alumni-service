import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import tableIcons from "./MaterialTableIcons";
import { useHistory } from "react-router-dom";
import browserRoutes from "../../Routes/browserRoutes";
import serverRoutes from "../../Routes/serverRoutes";
import axios from "axios";
// import { data } from "./data";
import { UserContext } from "../../App";
import setAuthToken from "../../utils/setAuthToken";

const AllProfiles = () => {
  const [user, setUser] = React.useContext(UserContext);
  const history = useHistory();

  const [data, setData] = useState([]);

  const createNewProfile = () => {
    history.push(browserRoutes.CREATE_PROFILES);
  };

  const columns = [
    { title: "Firstname", field: "firstname" },
    { title: "Lastname", field: "lastname" },
    { title: "Cellphone", field: "cellPhone" },
    { title: "Emailaddress", field: "emailAddress" },
    {
      field: "id",
      title: "Explore",
      render: (rowData) => (
        <button
          className="btn selectwalletbutton"
          onClick={() =>
            history.push(browserRoutes.PROFILE_DETAIL + "?id=" + rowData.id)
          }
        />
      ),
    },
  ];
  const data1 = [
    {
      Firstname: "first",
    },
    {
      Firstname: "second",
    },
  ];

  useEffect(() => {
    axios
      .get(serverRoutes.ALUMNI)
      .then((res) => {
        setData(res.data);
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
          <img width="200px" src="images/fake-logo.png" alt="..." />
          <div className="d-flex">
            {/* <a className="nav-link" href="#!">
              Your Profile
            </a> */}
            <button
              // className="btn selectwalletbutton my-2 my-sm-0"
              className="nav-link"
            >
              Admin Center
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
              <MaterialTable
                icons={tableIcons}
                columns={columns}
                data={data1}
                title="All Profiles"
                // actions={[
                //   {
                //     icon: "explore",
                //     tooltip: "Explore Alumni",
                //     onClick: (event, rowData) => {
                //       history.push(browserRoutes.PROFILE_DETAIL + "?id=" + 1);
                //     },
                //   },
                // ]}
                // components={{
                //   Action: (props) => (
                //     <button
                //       className="btn btn-blue text-center"
                //       onClick={(event) =>
                //         props.action.onClick(event, props.data)
                //       }
                //     >
                //       My Button
                //     </button>
                //   ),
                // }}
                options={{
                  actionsColumnIndex: -1,
                }}
              />
            </div>
          </div>
          <div
            className="row mt-2 d-flex"
            style={{ justifyContent: "space-between" }}
          >
            {/* <div className="col-lg-6"> */}
            <div>
              <button
                className="btn selectwalletbutton my-2 my-sm-0"
                onClick={createNewProfile}
              >
                Create New Profile
              </button>
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
