// tslint:disable:no-magic-numbers
import { expect, test } from 'vitest'
import { convert } from '../../../../main/js/g0001_0100/s0006_zigzag_conversion/solution'

test('convert', () => {
    expect(convert('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR')
})

test('convert2', () => {
    expect(convert('PAYPALISHIRING', 4)).toEqual('PINALSIGYAHRPI')
})
