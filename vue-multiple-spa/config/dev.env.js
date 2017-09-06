/**
 * @description 开发环境配置
 * @author wangqibiao
 * @date 2017-09-6, 14:53:28 GMTCST
 */

const
	merge = require('webpack-merge'),
	prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"'
});