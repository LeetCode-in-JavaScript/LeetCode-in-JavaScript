// tslint:disable:no-magic-numbers
import { isValid } from 'src/main/js/g0001_0100/s0020_valid_parentheses/solution'
import { expect, test } from 'vitest'

test('isValid', () => {
    expect(isValid('()')).toEqual(true)
})

test('isValid2', () => {
    expect(isValid('()[]{}')).toEqual(true)
})

test('isValid3', () => {
    expect(isValid('(]')).toEqual(false)
})

test('isValid4', () => {
    expect(isValid('([)]')).toEqual(false)
})

test('isValid5', () => {
    expect(isValid('{[]}')).toEqual(true)
})
