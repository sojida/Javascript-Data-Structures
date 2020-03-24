const compose = require('lodash/fp/compose');
const { Advance, Show, Back } = require('./AuxilaryOperations');
const DoubleLinkedList = require('../DoubleLinkedList');

const DoubleLinkedListWithAuxilaries = compose(Advance, Show, Back)(DoubleLinkedList)

class UpdatedDoubleLnkedList extends DoubleLinkedListWithAuxilaries {}

module.exports = UpdatedDoubleLnkedList;
