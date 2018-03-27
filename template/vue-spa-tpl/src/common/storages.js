/*
 * @Author: WangQiBiao
 * @Date: 2018-02-28 10:25:07
 * @Last Modified by: WangQiBiao
 * @Last Modified time: 2018-03-14 11:29:11
 */

/**
 * 平台标识【用于区别同一名下设置和获取不同cookie值，解决同一浏览器同一域名获取信息错乱bug】
 */
let PLATFORM_FLAG = 'platform_';
/**
 * 浏览器是否禁用cookie
 * @param return 返回布尔值标识是否禁用，true禁用
 */
function _browserIsDisableCookie() {
  let isCookie = document.cookie || navigator.cookieEnabled;
  console.log(isCookie);
  if (!isCookie) {
    throw 'cookie被禁用';
    return false;
  } else {
    return true;
  }
}
export default {
  localStorage: {
    /**
     * 获取
     * @param {string} name 获取localStorage名称
     * @return {string} localStorage值
     */
    get: function(name) {
      return localStorage.getItem(name);
    },
    /**
     * 设置
     * @param {string} name 获取localStorage名称
     * @param {string} value 设置localStorage值
     */
    set: function(name, value) {
      localStorage.setItem(name, value);
    },
    /**
     * 删除
     * @param {string} name 删除localStorage名称
     */
    remove: function(name) {
      localStorage.removeItem(name);
    },
    /**
     * 清除所有localStorage
     */
    clear: function() {
      localStorage.clear();
    },
  },
  cookie: {
    /**
     * 获取
     * @param {string} name 获取cookie名称
     * @return {string} cookie值
     */
    get: function(name) {
      if (!_browserIsDisableCookie()) {
        return;
      }
      let arrStr = document.cookie.split('; ');
      for (let i = 0; i < arrStr.length; i++) {
        let temp = arrStr[i].split('=');
        if (temp[0] === PLATFORM_FLAG + name) {
          if (temp[1] == 'undefined' || temp[1] == 'null') {
            return null;
          }
          return unescape(temp[1]);
        }
      }
      return null;
    },
    /**
     * 设置
     * @param {string} name 获取cookie名称
     * @param {string} value 设置cookie值
     */
    set: function(name, value) {
      if (!_browserIsDisableCookie()) {
        return;
      }
      if (!name || !value) {
        throw 'cookie的name或者value不能为空';
        return;
      }
      document.cookie = PLATFORM_FLAG + name + '=' + escape(value) + ';path=/';
    },
    /**
     * 清除所有cookie内容
     */
    clear: function() {
      if (!_browserIsDisableCookie()) {
        return;
      }
      let arrStr = document.cookie.split('; ');
      for (let i = 0; i < arrStr.length; i++) {
        let temp = arrStr[i].split('=');
        let bf = PLATFORM_FLAG ? temp[0].indexOf(PLATFORM_FLAG) != -1 : true;
        if (bf) {
          //设置过时时间
          document.cookie = temp[0] + '=0' + ';expires=' + new Date(0).toGMTString() + ';path=/';
        }
      }
    },
  },
};
