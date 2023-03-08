/**
 * 包文件统一出口
 */
const CZStorage = require('./src/cz-cache/index');

module.exports = {
  localCache: new CZStorage('local'),
  sessCache: new CZStorage('sess'),
};
