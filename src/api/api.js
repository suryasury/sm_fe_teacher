import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const getAuthToken = () => {
  let token = "Bearer " + localStorage.getItem("teacherAccessToken");
  return token;
};

export const loginService = async (body) => {
  try {
    let result = await axios.post(`${apiUrl}/api/teachers/login`, body, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return result;
  } catch (err) {
    console.log("error", err);
    throw err;
  }
};

export const getUserDetails = async () => {
  try {
    let result = await axios.get(`${apiUrl}/api/teachers/details`, {
      headers: {
        Authorization: getAuthToken(),
      },
    });
    return result;
  } catch (err) {
    console.log("error", err);
    throw err;
  }
};

export const getSections = async () => {
  try {
    let result = await axios.get(`${apiUrl}/api/teachers/dashboard/sections`, {
      headers: {
        Authorization: getAuthToken(),
      },
    });
    return result;
  } catch (err) {
    console.log("error", err);
    throw err;
  }
};

export const passwordReset = async (body) => {
  try {
    let result = await axios.patch(
      `${apiUrl}/api/teachers/password/reset`,
      body,
      {
        headers: {
          Authorization: getAuthToken(),
        },
      }
    );
    return result;
  } catch (err) {
    console.log("error", err);
    throw err;
  }
};

export const getStudentList = async (sectionId, filters) => {
  try {
    let result = await axios.get(
      `${apiUrl}/api/teachers/sections/students/list/${sectionId}` + filters,
      {
        headers: {
          Authorization: getAuthToken(),
        },
      }
    );
    return result;
  } catch (err) {
    console.log("error", err);
    throw err;
  }
};

export const getSectionDetails = async (sectionId) => {
  try {
    let result = await axios.get(
      `${apiUrl}/api/teachers/section/details/${sectionId}`,
      {
        headers: {
          Authorization: getAuthToken(),
        },
      }
    );
    return result;
  } catch (err) {
    console.log("error", err);
    throw err;
  }
};

export const getStudentDetails = async (studentId) => {
  try {
    let result = await axios.get(
      `${apiUrl}/api/teachers/student/details/${studentId}`,
      {
        headers: {
          Authorization: getAuthToken(),
        },
      }
    );
    return result;
  } catch (err) {
    console.log("error", err);
    throw err;
  }
};

export const forgotPassword = async (email) => {
  try {
    let result = await axios.post(`${apiUrl}/api/teachers/forgot-password`, {
      email,
    });
    return result;
  } catch (err) {
    console.log("error", err);
    throw err;
  }
};

export const resetPassword = async (password, token) => {
  try {
    let result = await axios.patch(
      `${apiUrl}/api/teachers/reset-password/${token}`,
      {
        password,
      }
    );
    return result;
  } catch (err) {
    console.log("error", err);
    throw err;
  }
};
