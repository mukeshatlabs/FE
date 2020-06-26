import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  console.log('token in axios with auth', token);

  return axios.create({
    baseURL: "https://afr-marketplace.herokuapp.com/api",
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;