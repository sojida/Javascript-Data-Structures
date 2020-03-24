const compose = require('lodash/fp/compose');
const { Advance, Show } = require('./AuxilaryOperations');
const CircularLinkedList = require('../CircularLinkedList');

const CircularLinkedListWithAuxilaries = compose(Advance, Show)(CircularLinkedList)

class UpdatedCircularLnkedList extends CircularLinkedListWithAuxilaries {}

module.exports = UpdatedCircularLnkedList;
