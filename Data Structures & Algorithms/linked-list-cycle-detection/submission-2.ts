/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        const uniqueRef = new Set();

        if (!head) {
            return false
        }

        let current = head;

        while (current.next) {
            if (uniqueRef.has(current.next)) {
                return true
            }

            uniqueRef.add(current.next)
            current = current.next
        }

        return false
    }
}
