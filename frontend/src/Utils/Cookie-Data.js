import Cookies from "js-cookie";

export function cookieData(validationMode, data) {
  if (validationMode === "auth") {
  
    let myCookieValue = Cookies.get("authToken");
    if (myCookieValue) {
    //   console.log("Cookie Value:", myCookieValue);
      return true;
    } else {
    //   console.log("Cookie not found");
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
