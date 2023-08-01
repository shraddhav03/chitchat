export const dataReducer = (state, action) => {
  switch (action.type) {
    case "ALL-USERS":
      return { ...state, users: action.payload };
    case "ALL-POSTS":
      return { ...state, posts: action.payload };
    case "ALL-BOOKMARKS":
      return { ...state, bookmarks: action.payload };
  }
};
