export const storageUtil = {
    /**
     * 根据键值获取localStorage
     * @param key 键
     * @returns 失败false,成功对象
     */
    get(key) {
        if (typeof (Storage) !== 'undefined' || typeof key !== 'string') {
            var value = localStorage.getItem(key)
            try {
                value = JSON.parse(value)
            } catch (e) {
                null
            }
            return value
        } else {
            return false
        }
    },
    /**
     * 设置localStorage
     * @param key 键
     * @param value 值   String或者JSON或者ARRAY
     * @returns {boolean}
     */
    set(key, value) {
        if (typeof (Storage) !== 'undefined' || typeof key !== 'string') {
            if (typeof value !== 'string') {
                value = JSON.stringify(value)
            }
            localStorage.setItem(key, value)
            return true
        } else {
            return false
        }
    },
    /**
     * 移除localStorage
     * @param key
     * @returns {boolean}
     */
    remove(key) {
        if (typeof (Storage) !== 'undefined' || typeof key !== 'string') {
            localStorage.removeItem(key)
            return true
        } else {
            return false
        }
    },
    /**
     * 清空所有
     * @returns {boolean}
     */
    clearSession() {
        if (typeof (Storage) !== 'undefined') {
            localStorage.clear()
            return true
        } else {
            return false
        }
    }
}