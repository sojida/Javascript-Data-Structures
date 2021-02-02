/** Class representing a Dictionary */
class Dictionary {
    /**
     * Create a Dictionary
     */
    constructor() {
        this.dataStore = [];
    }

    /**
     * Add item to dictionary
     * @param {String} key The key
     * @param {Any} value The value
     */
    add(key, value) {
        this.dataStore[key] = value;
    }

    /**
     * Find the value mapped to the key
     * @param {String} key The key
     * @returns {Any} item in dictionary
     */
    find(key) {
        return this.dataStore[key];
    }

    /**
     * Deletes item from the dictionary
     * @param {String} key The key
     */
    delete(key) {
        delete this.dataStore[key];
    }

    /**
     * returns a list of items in the dictionary
     * @returns {Array} list of items
     */
    showAll() {
        const store = []
        Object.keys(this.dataStore).forEach(key => {
            store.push({[key]: this.dataStore[key]})
        })
        return store
    }

    /**
     * The total amount of items in the dictionary
     * @returns {Number} number of items
     */
    get count() {
        return Object.keys(this.dataStore).length
    }

    /**
     * Removes all the items in the dictionary
     */
    clear() {
        this.dataStore = [];
    }
}

module.exports = Dictionary;
