const BaseAuxilary = superclass => class extends superclass {
    constructor() {
        super()
        this.currentNode = this.head;
    }
}

const Advance = superclass => class extends BaseAuxilary(superclass) {
    advance(n) {
        let counter = 0
        while(counter < n && this.currentNode.next) {
            this.currentNode = this.currentNode.next;
            counter++
        }

        return this.currentNode
    }
}

const Back = superclass => class extends BaseAuxilary(superclass) {
    back(n) {
        let counter = 0
        while(counter < n && this.currentNode.previous) {
            this.currentNode = this.currentNode.previous;
            counter++
        }

        return this.currentNode
    }
}

const Show = superclass => class extends BaseAuxilary(superclass) {
    get show() {
        return this.currentNode
    }
}

module.exports = { Advance, Back, Show };
