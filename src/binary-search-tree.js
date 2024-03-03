const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor () {
    this.rt = null;
  } 

  root() {
    return this.rt;
  }

  add(data) {
    const node = this.rt;
    if (node === null) {
      this.rt = new Node(data);
      return
    } else {
      const search = node => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return
          } else {
            return search(node.left);
          }
        } else if (data > node.data){
          if (node.right === null) {
            node.right = new Node(data);
            return
          } else {
            return search(node.right);
          } 
        }
      }
      return search(node);
    }
  }

  has(data) {
    let node = this.rt;
    while (node !== null) {
      if (node.data === data) {
        return true
      } else if (data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return false;
  }

  find(data) {
    let node = this.rt;
    while (node !== null) {
      if (node.data === data) {
        return node
      } else if (data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return null;
  }

  remove(data) {
    const remove = (node, data) => {
      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }
        let temp = node.right;
        while (temp.left !== null) {
          temp = temp.left;
        }
        node.data = temp.data;
        node.right = remove(node.right, temp.data);
        return node;
      } else if (data > node.data) {
        node.right = remove(node.right, data);
        return node;
      } else {
        node.left = remove(node.left, data);
        return node;
      }
    }
    this.rt = remove(this.rt, data);
  }

  min() {
    let node = this.rt;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.rt;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};