export const GET_CLASSES = "GET_CLASSES";
export const GET_CLASSES_SUCCESS = "GET_CLASSES_SUCCESS";
export const GET_CLASSES_FAILURE = "GET_CLASSES_FAILURE";
const initstate = {};
export const classesReducer = (state = initstate, action) => {
  switch (action.type) {
    case GET_CLASSES:
      return { ...state, loading: true };
    case GET_CLASSES_SUCCESS:
      console.log("reducer log");
      console.log(state);
      console.log({ ...state, classes: action.data, loading: false });
      console.log("reducer log end");
      return { ...state, classes: action.data, loading: false };
    case GET_CLASSES_FAILURE:
      return { ...state, classes: action.data, loading: false };
    default:
      return state;
  }
};
