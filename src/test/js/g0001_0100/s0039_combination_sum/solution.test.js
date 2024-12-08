// tslint:disable:no-magic-numbers
import { combinationSum } from 'src/main/js/g0001_0100/s0039_combination_sum/solution'
import { expect, test } from 'vitest'

test('combinationSum', () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[7], [3, 2, 2]])
})

test('combinationSum2', () => {
    expect(combinationSum([2, 3, 5], 8)).toEqual([
        [5, 3],
        [3, 3, 2],
        [2, 2, 2, 2],
    ])
})

test('combinationSum3', () => {
    expect(combinationSum([2], 1)).toEqual([])
})
