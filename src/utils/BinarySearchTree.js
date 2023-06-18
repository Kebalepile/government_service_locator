class Node {
  constructor(data, P = null, L = null, R = null) {
    this.data = data;
    this.L = L;
    this.R = R;
    this.P = P;
  }
}

export default class BST {
  #root = null;
  insert(data) {
    const node = this.#root;
    if (!node) {
      this.#root = new Node(data);
      return;
    }
    this.#traverseInsert(node, data);
    if (!this.#isBalanced()) {
      this.#balance();
    }
    return;
  }
  #traverseInsert(node, data) {
    if (data.province < node.data.province) {
      if (!node.L) {
        node.L = new Node(data);
        node.L.P = node;
        return;
      }
      return this.#traverseInsert(node.L, data);
    } else if (data.province > node.data.province) {
      if (!node.R) {
        node.R = new Node(data);
        node.R.P = node;
        return;
      }
      return this.#traverseInsert(node.R, data);
    } else {
      return `${data.province}, already in Binary Search Tree.`;
    }
  }
  hasProvince(provinceName) {
    let node = this.#root;
    if (provinceName) {
      while (node.data.province !== provinceName) {
        if (provinceName < node.data.province) {
          node = node.L;
        } else if (provinceName > node.data.province) {
          node = node.R;
        }
        if (!node) {
          return false;
        }
      }
      return true;
    } else {
      return `province name is null, enter province name parameter.`;
    }
  }
  searchByProvince(name) {
    try {
      let node = arguments[1] || this.#root;
      let suggestions = arguments[2] || [];
      const regex = new RegExp(name, "i");
      if (regex.test(node.data.province)) {
        suggestions.push(node.data);
      }
      suggestions.concat(this.searchByProvince(name, node.L, suggestions));
      suggestions.concat(this.searchByProvince(name, node.R, suggestions));
      return suggestions.length
        ? suggestions
        : `No province with such name: ${name}`;
    } catch (error) {
      console.error(error);
    }
  }
  searchByDistrict() {}
  searchByMunicipality() {}
  searchByTown() {}
  searchByHealthCareFacility() {}

  #min() {
    let node = this.#root;
    while (node.L) {
      node = node.L;
    }
    return node.data;
  }
  #max() {
    let node = this.#root;
    while (node.R) {
      node = node.R;
    }
    return node.data;
  }
  #minHeight() {
    let node = arguments[0] || this.#root;
    if (!node) {
      return -1;
    }
    let left = this.#minHeight(node.L),
      right = this.#minHeight(node.R);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  #maxHeight() {
    let node = arguments[0] || this.#root;
    if (!node) {
      return -1;
    }
    let left = this.#maxHeight(node.L),
      right = this.#maxHeight(node.R);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  #isBalanced() {
    return this.#minHeight() >= this.#maxHeight() - 1;
  }
  #balance() {
    const nodes = this.inOrder();

    this.#root = _rebuildBinarySearchTree(nodes, 0, nodes.length - 1);
    /**
     *
     * @param {Array} arr
     * @param {Number} start
     * @param {Number} end
     * @description Rebuild the BST by recursively dividing the array in
     *  half and inserting the middle element into the BST
     * @returns node, to be usewd as new #root.
     */
    function _rebuildBinarySearchTree(arr, start, end) {
      if (start > end) {
        return null;
      }
      const mid = Math.floor((start + end) / 2),
        node = new Node(arr[mid]);
      node.L = _rebuildBinarySearchTree(arr, start, mid - 1);
      node.R = _rebuildBinarySearchTree(arr, mid + 1, end);
      return node;
    }
  }
  /**
   * @returns  array of nodes or empty array.
   */
  inOrder() {
    let node = arguments[0] || this.#root;
    let results = [];
    _traverse(node);
    return results;
    /**
     *
     * @param {Object} node
     * @description is a traversal method, traverses the BST from
     * Left  -> Right -> Root
     */
    function _traverse(node) {
      try {
        if (node?.L) {
          _traverse(node?.L);
        }
        results.push(node.data);
        if (node?.R) {
          _traverse(node?.R);
        }
      } catch (error) {
        console.error(error);
        return [];
      }
    }
  }
}
