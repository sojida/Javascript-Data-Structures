const compose = require('lodash/fp/compose');
const { Advance, Show } = require('./AuxilaryOperations');
const SingleLinkedList = require('../SingleLinkedList');

const SingleLinkedListWithAuxilaries = compose(Advance, Show)(SingleLinkedList)

class UpdatedSingleLnkedList extends SingleLinkedListWithAuxilaries {}

module.exports = UpdatedSingleLnkedList;
