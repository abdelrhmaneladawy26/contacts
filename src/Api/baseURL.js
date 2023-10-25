import axios from "axios";
const baseURL = axios.create({
  baseURL: "https://dummyapi.io/",
  headers: { "app-id": "64fc4a747b1786417e354f31" },
});

export default baseURL;
