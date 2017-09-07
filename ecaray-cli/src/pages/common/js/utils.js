/*
* @Author:wangqibiao
* @Date:2017/7/24
* @功能：工具函数
*/

/**
* @功能 数组去重
* @arr 要去重数组
*/
export function uniqueArray(arr) {
  var res = [];
  var obj = {};
  if (!arr || arr.length < 1) {
    //不传||空数组参数返回空
    return "";
  }
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      res.push(arr[i]);
      obj[arr[i]] = 1;
    }
  }
  return res;
}

/**
* @功能 删除数组中指定元素
* @arr 要删除的数组
* @val 要删除的值
*/
export function removeArrayByValue(arr, val) {
  if (arr.length < 1) {
    return [];
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

/**
* @功能 获取屏幕可视区域高度
*/
export function getViewPortHeight() {
  return document.documentElement.clientHeight || document.body.clientHeight;
}
/**
* @功能 获取屏幕可视区域高度
*/
export function getViewPortWidth() {
  return document.documentElement.clientWidth || document.body.clientWidth;
}

/**
 * @功能 获取字符串长度
 */
export function getStringLength(str) {
  var realLength = 0,
    len = str.length,
    charCode = -1;
  for (var i = 0; i < len; i++) {
    charCode = str.charCodeAt(i);
    if (charCode >= 0 && charCode <= 128) {
      realLength += 1;
    } else {
      realLength += 2;
    }
  }
  return realLength;
}

/**
  * @description 返回tree结构对应key value的 父级key的数组
  * @param {any} json 需要递归的json
  * @param {any} key  对应的key
  * @param {any} value 对应的value
  * @returns {array} 数组
  */
export function getParentArray(json, key, value) {
  let arr = [];
  for (let index = 0; index < json.length; index++) {
    let element = json[index];
    if (element[key] == value) {
      arr.push(value);
    } else if (element.data) {
      // 由于饿了么ui会更改本身的数据，所以写死获得子级菜单数据的key 必须是被data包裹的
      // for (let variable in element) {
      //   if (!Array.isArray(element[variable])) break;
      //   let temp = getParentArray(element[variable], key, value);
      //   temp.length ? arr.push(element[key]) : null;
      //   arr = arr.concat(temp);
      //   if (arr.length) break;
      // }
      let temp = getParentArray(element.data, key, value);
      temp.length ? arr.push(element[key]) : null;
      arr = arr.concat(temp);
      if (arr.length) break;
    }
  }
  return arr;
}
/**
 * @description 更改指定json中所有子级指定key为指定value值，并返回子级的id所组成的数组
 *
 * @param {any} json 需要更改的json
 * @param {any} key 所修改的key
 * @param {any} value 修改为对应值
 * @returns
 */
export function changeSonStatus(json, key, value) {
  let arr = [];
  json[key] = value;
  if (json.data && json.data.length) {
    json.data.map(val => {
      val[key] = value;
      arr.push(val.id);
      let temp = changeSonStatus(val, key, value);
      arr.push(...temp);
    });
  }
  return arr;
}
/**
 * @description 修改指定id的的父级的is_checked为true
 *
 * @param {any} json 树形控件展示数据
 * @param {any} id 对应id
 * @param {any} searchKey 在数据中用对应key进行查找
 * @returns
 */
export function changeParentStatus(json, id, searchKey = "id") {
  if (json[searchKey] === id) {
    json.is_checked = true;
    return true;
  } else if (Array.isArray(json)) {
    for (var i = 0; i < json.length; i++) {
      if (json[i][searchKey] === id) {
        json[i].is_checked = true;
        return true;
      } else if (json[i].data && json[i].data.length) {
        let flag = changeParentStatus(json[i].data, id, searchKey);
        if (flag) {
          json[i].is_checked = true;
          return true;
        }
      }
    }
  }
}
/**
 * @description 修正指定json中同级的is_read_checked状态，即 当同级的is_checked为false时，同级is_read_checked一定为false
 *
 * @param {any} json
 */

export function checkoutChildrenStatus(json) {
  if (Array.isArray(json)) {
    json.map(item => {
      if (!item.is_checked) {
        item.is_read_checked = false;
      }
      if (item.data && item.data.length) {
        checkoutChildrenStatus(item.data);
      }
    });
  } else {
    if (!json.is_checked) {
      json.is_read_checked = false;
    }
  }
}
/**
 * @description 取出json中包含key的对象
 *
 * @export
 * @param {any} json json
 * @param {any} key   所查找的key
 * @returns
 */
export function findObjByKey(json, key) {
  return findObjByKeyHelper(json, key, []);
}
/**
 * 辅助函数
 * @param {any} json
 * @param {any} key
 * @param {any} list
 * @returns
 */
export function findObjByKeyHelper(json, key, list) {
  if (!json) return list;
  if (json instanceof Array) {
    for (let i in json) {
      list = list.concat(findObjByKeyHelper(json[i], key, []));
    }
    return list;
  }
  if (json[key]) list.push(json);
  if (typeof json == "object" && json !== null) {
    let children = Object.keys(json);
    if (children.length > 0) {
      for (let i = 0; i < children.length; i++) {
        list = list.concat(findObjByKeyHelper(json[children[i]], key, []));
      }
    }
  }
  return list;
}
