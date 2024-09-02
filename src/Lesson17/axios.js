import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 4000,
  timeoutErrorMessage: "You have slow internet connection, please try again",
});

export default instance;
