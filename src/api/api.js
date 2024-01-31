import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const getAuthToken = () => {
  let token = "Bearer " + localStorage.getItem("accessToken");
  return token;
};

export const loginService = async (body) => {
  try {
    let result = await axios.post(`${apiUrl}/api/parents/login`, body, {
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
    let result = await axios.get(`${apiUrl}/api/parents/student/details`, {
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

export const getFeeDetails = async () => {
  try {
    let result = await axios.get(`${apiUrl}/api/parents/fees/details`, {
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
      `${apiUrl}/api/parents/password/reset`,
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
