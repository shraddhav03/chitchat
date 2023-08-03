import {
  usecontext,
  createContext,
  useEffect,
  useState,
  useReducer,
} from "react";

import { dataReduder } from "../reducer/dataReducer";
import { authReducer } from "../reducer/authReducer";
import { authContext } from "./authContext";
export const dataContext = createContext();

export const dataProvider = ({ children }) => {
  const [initState, dispatch] = useReducer(dataReduder, {
    posts: [],
    users: [],
    bookmarks: [],
  });

  const [user, setUser] = usecontext(authContext);
  const [trending, setTrending] = useState(false);
  const [latest, setLatest] = useState(false);

  const likePost = async (encodedToken, postId) => {
    try {
      const response = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      dispatch({ type: "ALL_POST", payload: response.data.posts });
    } catch (e) {
      console.error(e);
    }
  };

  const dislikePost = async (encodedToken, postId) => {
    try {
      const response = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      dispatch({ type: "ALL_POST", payload: response.data.posts });
    } catch (e) {
      console.error(e);
    }
  };

  const deletePost = async (encodedToken, postId) => {
    try {
      const response = await axios.delete(`/api/posts/${postId}`, {
        headers: { authorization: encodedToken },
      });
      dispatch({ type: "ALL_POSTS", payload: response?.data?.posts });
    } catch (e) {
      console.error(e);
    }
  };

  const allBookmark = async (encodedToken) => {
    try {
      const response = await axios.get("/api/users/bookmark/", {
        headers: { authorization: encodedToken },
      });
      dispatch({ type: "ALL-BOOKMARKS", payload: response?.data?.bookmarks });
    } catch (e) {
      console.log(e);
    }
  };

  const addToBookmark = async (encodedToken, postId) => {
    try {
      const response = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      dispatch({ type: "ALL-BOOKMARKS", payload: response?.data?.bookmarks });
    } catch (e) {
      console.error(e);
    }
  };

  const removeFromBookmark = async (encodedToken, postId) => {
    try {
      const reresponses = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      dispatch({ type: "ALL-BOOKMARKS", payload: response?.data?.bookmarks });
    } catch (e) {
      console.error(e);
    }
  };

  const followUser = async (encodedToken, followUserId) => {
    try {
      const response = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      setUser(response.data.user);
    } catch (e) {
      console.error(e);
    }
  };

  const unfollowUser = async (encodedToken, followUserId) => {
    try {
      const response = await axios.post(
        `/api/users/unfollow/${followUserId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      setUser(response.data.user);
    } catch (e) {
      console.error(e);
    }
  };

  const editUser = async (userData, encodedToken, setEditUserModal) => {
    try {
      const response = await axios.post(
        "/api/users/edit",
        { userData },
        {
          headers: { authorization: encodedToken },
        }
      );
      if (response.status === 201) {
        setUser(response.data.user);
        dispatch({ type: "UPDATE-USER-IN-USERS", payload: res.data.user });
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setEditUserModal(false);
        UpdateUser(response.data.user);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleBookmark = initialState.posts.filter((item) =>
    initialState.bookmarks.includes(item._id)
  );

  const inBookmark = (postId) => {
    return handleBookmark.find((item) => item._id === postId);
  };

  const { posts } = initialState;

  const showFeedPost = posts?.filter(
    (item) =>
      item?.username === user?.username ||
      user?.following?.some(
        (followingItem) => followingItem?.username === item?.username
      )
  );

  const trendingPost = trending
    ? showFeedPost.sort((a, b) => b.likes.likeCount - a.likes.likeCount)
    : showFeedPost;

  const recentPosts = latest
    ? trendingPost.sort(
        (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      )
    : trendingPost;

  const handleEdit = (userName) => userName === user.username;

  useEffect(() => {
    getAllUsers(dispatch);
    allPosts(dispatch);
  }, []);

  const values = {
    handleEdit,
    initialState,
    dispatch,
    handleBookmark,
    inBookmark,
    allBookmark,
    addToBookmark,
    removeFromBookmark,
    deletePost,
    likePost,
    dislikePost,
    followUser,
    unfollowUser,
    recentPosts,
    setLatest,
    setTrending,
    editUser,
  };

  return (
    <>
      <dataContext.Provider value={values}>{children}</dataContext.Provider>
    </>
  );
};
