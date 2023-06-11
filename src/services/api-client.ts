import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4a98e856a9434a2185c40907651cf892",
  },
});
