const linkedList = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: null,
        },
      },
    },
  };

  /**
   * Definition for singly-linked list.
   * function ListNode(val, next) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.next = (next===undefined ? null : next)
   * }
   */
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  var middleNode = function (head) {
    var length = 0;
    var currentNode = head;

    while (currentNode) {
      length += 1;
      currentNode = currentNode.next;
    }

    var index = length % 2 === 0 ? length / 2 + 1 : Math.ceil(length / 2);
    currentNode = head;

    while (currentNode.val && currentNode.val !== index) {
      currentNode = currentNode.next;
    }

    return currentNode;
  };

  console.log(middleNode(linkedList));
