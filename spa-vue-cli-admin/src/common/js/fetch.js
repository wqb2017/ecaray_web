import Mock from "mockjs";

export function createPromiseMock(params) {
  return new Promise((resolve, reject) => {
    let res = Mock.mock(params);
    let err = "出错了";
    resolve(res);
    reject(err);
  });
}
