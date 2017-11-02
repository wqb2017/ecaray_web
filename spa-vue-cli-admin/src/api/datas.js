import Mock from "mockjs";
import { createPromiseMock } from "@/common/js/fetch";
/**
 * @菜单数据
 * @export
 * @param {any} params
 */
export function sidebarList(params) {
  params = {
    'data': [{
      'id': 1,
      'name': "工作台",
      'url': 'workbench',
      'icon': 'el-icon-date',
      'hidden': false
    }, {
      'id': 2,
      'name': "大数据",
      'url': 'datas',
      'icon': 'el-icon-setting',
      'hidden': false,
      'children': [{
        'id|+1': 21,
        'name': "数据概览",
        'url': 'survey',
        'icon': '',
        'hidden': false,
      }, {
        'id|+1': 22,
        'name': "数据集成",
        'url': 'integration',
        'icon': '',
        'hidden': false,
      }]
    }]
  };
  return createPromiseMock(params);
}

export function workbenchList(params) {
  params = {
    'data|4-10': [{
      'id': 1,
      'date': '2016-05-02',
      'name': '王小虎',
      'address': '上海市普陀区金沙江路 1518 弄'
    }]
  };
  return createPromiseMock(params);
}
