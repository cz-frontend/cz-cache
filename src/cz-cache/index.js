/**
 * localStorage管理工具
 * 设计初衷
 *  - 统一团队编码输出规范
 * - 提高开发效率
 * - 降低多余的代码输出和低级错误
 * - 增强代码可读性与扩展性
 */

class CZStorage {
  constructor(storage = 'local') {
    this.storage = storage === 'local' ? 'localStorage' : 'sessionStorage';
  }
  /**
   *  获取当前storage类型
   * @returns storage
   */
  getStorageType() {
    return this.storage;
  }
}
module.exports = CZStorage;
