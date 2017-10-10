import Mock from "mockjs";
/**
 * 用promise包装mockjs请求，模仿数据
 * @param {Object} params
 * @param {boolean} [sync=false]
 * @returns
 */
export function createMockPromiseCmd(params) {
  let stutas = 1;
  return new Promise((resolve, reject) => {
    let res = Mock.mock(params);
    if (1 === stutas) {
      resolve(res);
    } else {
      reject(res);
    }
  });
}
