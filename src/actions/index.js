export const GET_CLASSES = "GET_CLASSES";
export const GET_CLASSES_SUCCESS = "GET_CLASSES_SUCCESS";
export const GET_CLASSES_FAILURE = "GET_CLASSES_FAILURE";

export const getClasses = () => ({
  type: GET_CLASSES,
});
export const getClassesSuccess = (data) => ({
  type: GET_CLASSES_SUCCESS,
  data: data,
});
export const getClassesFailure = (data) => ({
  type: GET_CLASSES_FAILURE,
  data: data,
});
const res = [
  { id: "1", name: "1YEAR", desc: "1YEAR DESC" },
  { id: "2", name: "2YEAR", desc: "2YEAR DESC" },
];
export function fetchClasses() {
  return function (dispatch) {
    dispatch(getClasses());
    return dispatch(getClassesSuccess(res));
    //return dispatch(getClassesSuccess(res));
  };
}
