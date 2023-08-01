import axios from "axios";

export const allPsts = async (dispatch) => {
  try {
    const response = await axios.get("/api/posts");
    dispatch: ({ type: "ALL_POSTS", payload: response.data.post });
  } catch (e) {
    console.error(e);
  }
};
