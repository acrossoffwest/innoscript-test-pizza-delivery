export default class Storage {
    constructor() {}

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    get(key) {
        const item = localStorage.getItem(key)
        return item !== null && item !== undefined ? JSON.parse(item) : null
    }

    delete(key) {
        localStorage.removeItem(key)
    }
}
