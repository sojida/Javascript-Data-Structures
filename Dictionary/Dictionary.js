class Dictionary {
    constructor() {
        this.dataStore = [];
    }

    add(key, value) {
        this.dataStore[key] = value;
    }

    find(key) {
        return this.dataStore[key];
    }

    delete(key) {
        delete this.dataStore[key];
    }

    showAll() {
        const store = []
        Object.keys(this.dataStore).forEach(key => {
            store.push({[key]: this.dataStore[key]})
        })
        return store
    }

    get count() {
        return Object.keys(this.dataStore).length
    }

    clear() {
        this.dataStore = [];
    }
}

module.exports = Dictionary;
