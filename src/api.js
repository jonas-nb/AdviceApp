import axios from "axios";

export const api = {
  json: async () => {
    let response = await axios.get("https://api.adviceslip.com/advice");
    return response.data;
  },
};
