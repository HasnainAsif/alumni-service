import { toast } from "react-toastify";
import axios from "axios";
import serverRoutes from "../../Routes/serverRoutes";
import browserRoutes from "../../Routes/browserRoutes";

export const onChange = (e, formData, setFormData) => {
  let value;
  if (["text", "email"].includes(e.target.type)) {
    value = e.target.value;
  } else if (e.target.type === "checkbox") {
    value = e.target.checked;
  }
  let nameLengthWithDot = e.target.name.split(".").length;
  if (nameLengthWithDot === 1) {
    setFormData({ ...formData, [e.target.name]: value });
  } else if (nameLengthWithDot === 2) {
    // if value is going to pass into nested object
    let nameWithDot = e.target.name.split(".");
    let mainName = nameWithDot[0];
    let nestedName = nameWithDot[1];
    setFormData({
      ...formData,
      [mainName]: { ...formData[mainName], [nestedName]: value },
    });
  }
};

// export const onChangeArrayType = (e, formData, setFormData) => {
//   let value = e.target.value;

//   let nameLengthWithDot = e.target.name.split(".").length;
//   let nameWithDot = e.target.name.split(".");

//   if (nameLengthWithDot === 1) {
//     setFormData({
//       ...formData,
//       [e.target.name]: [value],
//     });
//   }

//   if (nameLengthWithDot === 2) {
//     // if value is going to pass into nested array object
//     let mainName = nameWithDot[0];
//     let nestedName = nameWithDot[1];

//     setFormData({
//       ...formData,
//       [mainName]: [{ ...formData[mainName][0], [nestedName]: value }],
//     });
//   }
//   if (nameLengthWithDot === 3) {
//     // if value is going to pass into nested array object
//     let mainName = nameWithDot[0];
//     let nestedName = nameWithDot[1];
//     let doubleNestedName = nameWithDot[2];
//     setFormData({
//       ...formData,
//       [mainName]: [
//         {
//           ...formData[mainName][0],
//           [nestedName]: {
//             ...formData[mainName][0][nestedName],
//             [doubleNestedName]: value,
//           },
//         },
//       ],
//     });
//   }
// };
export const onChangeArrayType = (e, formData, setFormData) => {
  const value = e.target.value;

  setFormData({
    ...formData,
    [e.target.name]: [...value.split(",")],
  });
};
export const checkMimeType = (event) => {
  let files = event.target.files[0];
  let err = "";
  const types = ["image/png", "image/jpeg", "image/jpg"];
  if (types.every((type) => files.type !== type)) {
    err += files.type + " is not a supported format\n";
    toast.error(err, { draggable: true });
  }

  if (err !== "") {
    event.target.value = null;
    return false;
  }
  return true;
};

export const onFileChange = (event, formData, setFormData, setImage) => {
  if (checkMimeType(event)) {
    setFormData({ ...formData, [event.target.name]: event.target.files[0] });
    // const reader = new FileReader();
    // setImage(reader.result);
    // const url = reader.readAsDataURL(event.target.files[0]);
    setImage(URL.createObjectURL(event.target.files[0]));
  }
};

export const onSubmit = async (e, formData, history, setUser) => {
  const fData = { ...formData };
  delete fData.profilePictureURL;

  const data = new FormData();

  // for (const key in fData) {
  //   if (["string", "boolean"].includes(typeof fData[key])) {
  //     // its for string and boolean
  //     data.append(`json[${key}]`, fData[key]);
  //   } else if (Array.isArray(fData[key])) {
  //     // its for arrays
  //     const isArrayObj = fData[key].some((value) => typeof value === "object");

  //     if (isArrayObj) {
  //       // check if formData is an arrayObject
  //       if (key === "siblings") {
  //         fData[key].forEach((element, index) => {
  //           data.append(
  //             `json[${key}][firstname]`,
  //             fData[key][index]["firstname"]
  //           );
  //           data.append(
  //             `json[${key}][lastname]`,
  //             fData[key][index]["lastname"]
  //           );
  //           data.append(
  //             `json[${key}][yearCompleted]`,
  //             fData[key][index]["yearCompleted"]
  //           );

  //           data.append(
  //             `json[${key}][middleSchool][name]`,
  //             fData[key][index]["middleSchool"]["name"]
  //           );
  //           data.append(
  //             `json[${key}][middleSchool][yearStarted]`,
  //             fData[key][index]["middleSchool"]["yearStarted"]
  //           );
  //           data.append(
  //             `json[${key}][middleSchool][yearEnded]`,
  //             fData[key][index]["middleSchool"]["yearEnded"]
  //           );
  //           data.append(
  //             `json[${key}][highSchool][name]`,
  //             fData[key][index]["highSchool"]["name"]
  //           );
  //           data.append(
  //             `json[${key}][highSchool][yearStarted]`,
  //             fData[key][index]["highSchool"]["yearStarted"]
  //           );
  //           data.append(
  //             `json[${key}][highSchool][yearEnded]`,
  //             fData[key][index]["highSchool"]["yearEnded"]
  //           );
  //         });
  //       } else {
  //         fData[key].forEach((element, index) => {
  //           for (const nestedKey in element) {
  //             data.append(
  //               `json[${key}][${index}][${nestedKey}]`,
  //               element[nestedKey]
  //             );
  //           }
  //         });
  //       }
  //     } else {
  //       // formData is a simple array
  //       for (const nestedKey in fData[key]) {
  //         data.append(`json[${key}]`, fData[key][nestedKey]);
  //       }
  //     }
  //   } else {
  //     // its for objects
  //     for (const nestedKey in fData[key]) {
  //       data.append(`json[${key}][${nestedKey}]`, fData[key][nestedKey]);
  //     }
  //   }
  // }
  data.append("json", JSON.stringify(fData));
  data.append("profile", formData.profilePictureURL);
  await axios
    .post(
      "https://y0as6g37y0.execute-api.us-east-1.amazonaws.com/dev/alumni",
      data
    )
    .then((res) => {
      let ROUTE = "";
      if (JSON.parse(localStorage.getItem("user"))?.admin) {
        ROUTE = browserRoutes.PROFILE_DETAIL + "/id=" + res.data?.id;
      } else {
        ROUTE = browserRoutes.PROFILE_DETAIL;
        const user = JSON.parse(localStorage.getItem("user"));
        user.alumniId = res.data?.id;
        localStorage.setItem("user", JSON.stringify(user));
      }
      history.push(ROUTE);
      toast.success("Alumni profile created successfully");
    })
    .catch((err) => toast.error(err.message));

  axios
    .get(serverRoutes.AUTO_LOGIN)
    .then((res) => {
      setUser(res.data.user);
    })
    .catch((err) => {
      setUser(null);
      console.log(err);
    });
};

// export const onSubmit = (e, formData) => {
//   const { gradSchools, siblings, children, profilePictureURL, oldAddresses } =
//     formData;
//   e.preventDefault();
//   const data = new FormData();
//   for (let dataKey in formData) {
//     if (
//       [
//         "address",
//         "middleschool",
//         "highschool",
//         "israelSchool",
//         "collegeAttended",
//         "hillelDayCamp",
//         "hillelSleepCamp",
//         "hiliDayCamp",
//         "hiliWhiteCamp",
//         "hiliInternationalCamp",
//       ].includes(dataKey)
//     ) {
//       // append nested object
//       for (let previewKey in formData[dataKey]) {
//         data.append(`${dataKey}[${previewKey}]`, formData[dataKey][previewKey]);
//       }
//       // data.append(`${dataKey}`, JSON.stringify(formData[dataKey]));
//     } else if (
//       [
//         "alumniPositions",
//         "boards",
//         "committees",
//         "awards",
//         "sportsTeams",
//         "clubs",
//         "birthday",
//         "profession",
//       ].includes(dataKey)
//     ) {
//       data.append(`${dataKey}`, JSON.stringify(formData[dataKey]));
//     } else if (dataKey === "gradSchools") {
//       data.append(
//         "gradSchools",
//         JSON.stringify([
//           {
//             name: gradSchools[0].name,
//             yearStarted: gradSchools[0].yearStarted,
//             yearEnded: gradSchools[0].yearEnded,
//           },
//         ])
//       );
//     } else if (dataKey === "oldAddresses") {
//       data.append(
//         "oldAddresses",
//         JSON.stringify([
//           {
//             line1: oldAddresses[0].line1,
//             line2: oldAddresses[0].line2,
//             city: oldAddresses[0].city,
//             state: oldAddresses[0].state,
//             zip: oldAddresses[0].zip,
//             country: oldAddresses[0].country,
//           },
//         ])
//       );
//     } else if (dataKey === "siblings") {
//       data.append(
//         "siblings",
//         JSON.stringify([
//           {
//             firstname: siblings[0].firstname,
//             lastname: siblings[0].lastname,
//             yearCompleted: siblings[0].yearCompleted,
//             middleSchool: {
//               name: siblings[0].middleSchool.name,
//               yearStarted: siblings[0].middleSchool.yearStarted,
//               yearEnded: siblings[0].middleSchool.yearEnded,
//             },

//             highSchool: {
//               name: siblings[0].highSchool.name,
//               yearStarted: siblings[0].highSchool.yearStarted,
//               yearEnded: siblings[0].highSchool.yearEnded,
//             },
//           },
//         ])
//       );
//     } else if (dataKey === "children") {
//       data.append(
//         "children",
//         JSON.stringify([
//           {
//             firstname: children[0].firstname,
//             lastname: children[0].lastname,
//             graduationYear: children[0].graduationYear,
//           },
//         ])
//       );
//     } else if (dataKey === "alumniPositions") {
//       data.append("alumniPositions", JSON.stringify(["asd"]));
//     } else {
//       data.append(dataKey, formData[dataKey]);
//     }
//   }
//   data.append("profilePictureURL", profilePictureURL);
//   // data.append("id", JSON.parse(localStorage.getItem("user")).id); // not verified

//   axios
//     .post(serverRoutes.ALUMNI, data)
//     .then((res) => console.log(res.data.msg))
//     .catch((err) => console.log(err.message));
// };
