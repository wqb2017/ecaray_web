const glob = require('glob');
const path = require('path');
const fs = require('fs');

/**
 * 获取文件名以及文件路径键值对
 *
 * @param {String} globPath 基本路径
 * @returns {Object} 键值对集合
 */
function getEntry(globPath) {
  let pathName = glob.sync(globPath);
  let temp, entries = {};
  pathName.map(val => {
    temp = path.parse(val).dir.split('/');
    temp = temp[temp.length - 1];
    // temp = path.basename(val, '.vue')
    entries[temp] = path.relative(__dirname, val).split(path.sep).join('/');
  });
  return entries;
}

const entrise = getEntry(path.join(__dirname, '../views/**/**/**.vue'));
let str = '';
let routesStr = '';
for (let k in entrise) {
  str += `import ${k} from '${entrise[k]}';\r\n`;
  routesStr += `{ path: "/${k}", component: ${k} },\r\n`;
}
routesStr = `export const routes = [\r\n${routesStr}]`;
let routerPath = path.join(__dirname, './routes.js');

fs.writeFileSync(routerPath, str, 'utf-8');
fs.appendFileSync(routerPath, routesStr, 'utf-8');
