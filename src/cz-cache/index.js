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

  /**
   *
   * @param {string} key 存入的key名
   * @param any value 存入的value数据
   */
  setKey(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  /**
   *
   * @param {string} key 要查找的key名
   * @returns value storage表对应key的值
   */
  getKey(key) {
    let json = this.storage.getItem(key);
    return JSON.parse(json);
  }

  /**
   *
   * @param {string} key 移除的storage key
   * @returns
   */
  removeKey(key) {
    if (typeof key !== 'string') {
      throw new TypeError('类型错误，key应为string类型');
      return;
    }
    this.storage.removeItem(key);
  }

  /**
   * 晴空所有storage
   */
  clear() {
    return this.storage.clearItem();
  }
}
module.exports = CZStorage;
