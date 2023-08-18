import axios from "axios";

//BASE URL DECLARATION
const api = axios.create({
  baseURL: "http://localhost:3000", // Replace with your actual base URL
});

//GET Highlihted tests

export const fetchHlTests = () => {
  return api
    .get("/hlTests")
    .then((response) => {
      console.log("idi nahyi");
      console.log(response.data);
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
