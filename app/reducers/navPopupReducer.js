const reducer = (state = "", action = {}) => {
  switch(action.type){
    case "TOGGLE_NAV_POPUP":
      if(state === "TOGGLE_NAV_POPUP"){
        return "";
      }
      return action.type;
    case "CLOSE_NAV_POPUPS":
      return "";
    default:
      return state;
  }
};

export default reducer;
