function BTNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function binarySearchTree() {
  this.root = null;

  /***** preorder, postorder, inorder *****/
  this.preOrder = function() {
    if (!this.root) {
      return null;
    }
    preOrderHelper(this.root);
  }
  this.postOrder = function() {
    if (!this.root) {
      return null;
    }
    postOrderHelper(this.root);
  }
  this.inOrder = function() {
    if (!this.root) {
      return null;
    }
    inOrderHelper(this.root);
  }

  /***** is valid *****/
  this.isValid = function() {
    if (!this.root) {
      return null;
    }
    return isValidH(this.root);
  }

  /****** is balanced *****/
  this.isBalanced = function() {
    if (!this.root) {
      return false;
    }
    return isBalancedH(this.root, 0, 0);
  }

  /******* Contains sum ******/
  this.containsSum = function(sum) {
    if (!this.root) {
      return false;
    }
    var r = this.root;
    if (r.val === sum && (!r.right && !r.left)) {
      return true
    } else if (!r.right && !r.left) {
      return false
    }
    return this.sumH2(r, sum, r.val)
  }

  this.sumH = function(r, sum, tsum) {
    if (!r.left && !r.right) {
      return tsum
    }
    if (r.left) {
      var x = this.sumH(r.left, sum, tsum + r.left.val)

    }
    if (r.right) {
      var y = this.sumH(r.right, sum, tsum + r.right.val)
    }
    if (x === sum || x === true || y === sum || y === true) {
      return true
    } else {
      return false
    }
  }

  this.sumH2 = function(r, sum, tsum) {
    if (!r.left && !r.right) {
      return tsum === sum;
    } else {
      x = false
      if (r.left) {
        var x = this.sumH2(r.left, sum, tsum + r.left.val)
      }
      y = false
      if (r.right) {
        var y = this.sumH2(r.right, sum, tsum + r.right.val)
      }
      return x || y
    }
  }
}

function preOrderHelper(node) {
  console.log(node.val);
  if (node.left) {
    preOrderHelper(node.left);
  }
  if (node.right) {
    preOrderHelper(node.right);
  }
}

function postOrderHelper(node) {
  if (node.left) {
    postOrderHelper(node.left);
  }
  if (node.right) {
    postOrderHelper(node.right);
  }
  console.log(node.val);
}

function inOrderHelper(node) {
  if (node.left) {
    inOrderHelper(node.left);
  }
  console.log(node.val);
  if (node.right) {
    inOrderHelper(node.right);
  }
}

function isValidH(node) {
  if (node.left) {
    if (node.left.val >= node.val) {
      return false;
    }
    x = isValidH(node.left);
    if (x == false) {
      return false;
    }
  }
  if (node.right) {
    if (node.right.val < node.val) {
      return false;
    }
    return isValidH(node.right);
  }
  if (!node.left && !node.right) {
    return true;
  }
}

function isBalancedH(node, lCount, rCount) {
  if (!node.left && !node.right) {
    return true;
  }
  if (!node.left) {
    lCount--;
  }
  if (!node.right) {
    rCount--;
  }
  if (node.left) {
    isBalancedH(node.left, lCount, rCount);
  }
  if (node.right) {
    isBalancedH(node.right, lCount, rCount);
  }
  if (Math.abs(lCount - rCount) > 1) {
    return false;
  }

}

node1 = new BTNode(10);
node2 = new BTNode(5);
node3 = new BTNode(20);
node1.right = node3;
node1.left = node2;
node4 = new BTNode(1);
node5 = new BTNode(7);
node2.left = node4;
node2.right = node5;
node6 = new BTNode(12);
node7 = new BTNode(25);
node3.left = node6;
node3.right = node7;

tree = new binarySearchTree()
tree.root = node1
// tree.preOrder()
// tree.postOrder()
// tree.inOrder()

console.log(tree.containsSum(55))
