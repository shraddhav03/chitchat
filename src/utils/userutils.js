import { axios } from "axios";

export const getAllUsers = async (dispatch, encodedToken) => {
  try {
    const response = await axios.get("api/users");
    dispatch({ type: "ALL_USERS", payload: response.data.users });
  } catch (e) {
    console.error(e);
  }
};
