import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default  {
  state: {
    //预加载
    loading: {
      //预加载-是否显示，默认不显示=false
      isShow: false
    }
  },
  getters,
  mutations,
  actions
};
