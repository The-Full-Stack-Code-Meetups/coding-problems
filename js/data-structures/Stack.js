class Stack {
  /**
   * Stack constructor
   * @param {array} [items=[]]
   */
  constructor(items = []) {
    this.items = items;
  }

  /**
   * Pushes an item into the stack
   * @param  {*} item
   */
  push(item) {
    this.items.push(item);
  }

  /**
   * Pops item off the top/back of the stack
   * @return {*}
   */
  pop() {
    return this.items.pop();
  }

  /**
   * Peek at the top/back most element
   * @return {*}
   */
  peek() {
    return this.items[this.items.length - 1];
  }

  /**
   * Returns whether the stack is empty
   * @return {boolean}
   */
  isEmpty() {
    return this.items.length === 0;
  }
}

export default Stack;
