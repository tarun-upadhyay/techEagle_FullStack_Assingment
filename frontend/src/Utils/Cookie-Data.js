import axios from "axios";
import Cookies from "js-cookie";

export async function cookieData(validationMode, data) {
  if (validationMode === "auth") {
    try {
      const { data } = await axios.get(`/session`);
      if (data.token) return data;
    } catch (error) {
      return false;
    }
  } else if (validationMode === "userDetail" && data) {
    localStorage.setItem("loggedUser", JSON.stringify(data));
  } else if (validationMode === "getUserDetail") {
    const storedObject = localStorage.getItem("loggedUser");
    const parsedObject = JSON.parse(storedObject);

    return parsedObject;
  }
}
