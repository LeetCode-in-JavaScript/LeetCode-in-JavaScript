// tslint:disable:no-magic-numbers
import { createTreeNode } from 'src/main/js/com_github_leetcode/treenode'
import { kthSmallest } from 'src/main/js/g0201_0300/s0230_kth_smallest_element_in_a_bst/solution'
import { expect, test } from 'vitest'

test('kthSmallest', () => {
    const tree = createTreeNode([3, 1, 4, null, 2])
    expect(kthSmallest(tree, 1)).to.equal(1)
})

test('kthSmallest2', () => {
    const tree = createTreeNode([5, 3, 6, 2, 4, null, null, 1])
    expect(kthSmallest(tree, 3)).to.equal(3)
})
