export const SHOW_USER_INFO = "SHOW_USER_INFO";
export const SET_LOADING_IS_FALSE = "SET_LOADING_IS_FALSE";
export const SET_LOADING_IS_TRUE = "SET_LOADING_IS_TRUE";

export default {
  //设置loading的值为false
  SET_LOADING_IS_FALSE: (state, token) => {
    setTimeout(function () {
      state.loading.isShow = false;
    }, 300);
  },
  //设置loading的值为true
  SET_LOADING_IS_TRUE: (state, token) => {
    state.loading.isShow = true;
  },
  SET_LIST_ERROR_PAGE: (state, token) => {
    state.loading.isShow = false;
    window.location.hash = "/error";
  }
};
