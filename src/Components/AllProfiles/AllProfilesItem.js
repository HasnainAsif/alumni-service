import React, { Fragment } from "react";
import { useHistory } from "react-router";
import browserRoutes from "../../Routes/browserRoutes";

const AllProfilesItem = ({ record }) => {
  const history = useHistory();

  return (
    <Fragment>
      <td>
        {/* className="text-center" */}
        <div>
          <img
            src={record?.profilePictureURL || "images/profile-img.png"}
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
      </td>
      <td>{record?.firstname}</td>
      <td>{record?.lastname}</td>
      <td>{record?.cellPhone}</td>
      <td>{record?.emailAddress}</td>
      <td>{record?.highSchoolGradYear}</td>
      <td>
        <button
          className="btn btn-sm selectwalletbutton"
          onClick={() =>
            history.push(browserRoutes.PROFILE_DETAIL + "?id=" + record?.id)
          }
        >
          Explore
        </button>
      </td>
    </Fragment>
  );
};

export default AllProfilesItem;
