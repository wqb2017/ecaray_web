/*
 * @Author: wangqibiao
 * @Date: 2017-11-02 20:18:42
 * @Last Modified by: wangqibiao
 * @Last Modified time: 2017-11-04 22:18:56
 */
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
    }],
    'page_index':1,
    'page_size':10,
    'page_total':24,
  };
  return createPromiseMock(params);
}
