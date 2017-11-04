/*
 * @Author: wangqibiao
 * @Date: 2017-11-02 20:15:36
 * @Last Modified by: wangqibiao
 * @Last Modified time: 2017-11-04 22:05:56
 */
import Mock from "mockjs";

export function createPromiseMock(params) {
  return new Promise((resolve, reject) => {
    let res = Mock.mock(params);
    let err = "出错了";
    resolve(res);
    reject(err);
  });
}
