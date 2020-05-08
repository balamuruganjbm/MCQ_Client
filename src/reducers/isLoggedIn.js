export default (state = false, action) => {
  switch (action.type) {
    case "LOGGEDIN":
      return true;
    default:
      return false;
  }
};
