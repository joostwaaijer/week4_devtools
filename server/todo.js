const _ = require('lodash');

/**
 * Class for keeping track of ToDo-items
 */
class ToDoList {
  /**
   * Initialize an empty ToDoList
   */
  constructor() {
    this.items = [];
  }

  /**
   * Add an todo item to the list. The items need to be unique!
   * @param {string} todoItem Todo list item
   * @throws Will throw an error when the item is already in the list
   */
  add(todoItem) {
    if (!this.contains(todoItem)) {
      this.items.push(todoItem);
    } else {
      throw 'Duplicate item';
    }
  }

  contains(todoItem) {
    return _.includes(this.items, todoItem);
  }

  delete(todoItem) {
    if (this.contains(todoItem)) {
      _.remove(this.items, function(curItem) {
        return curItem === todoItem;
      });
    } else {
      throw 'Item not found';
    }
  }

  /**
   * Get the list from the object
   * @return {string[]} todo list
   */
  getList() {
    return this.items;
  }
}

module.exports = ToDoList;