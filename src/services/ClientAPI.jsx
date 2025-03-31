import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "8c9493008c084ee7adcd1314c19ad81e",
  },
});
