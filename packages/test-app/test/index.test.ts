import { describe, expect, it } from 'vitest'
import { testFunc } from '../src'

describe('demo', () => {
  it('1', () => {
    expect(testFunc()).toBe(true)
  })

  it('2', () => {
    expect(process.env.DATABASE_URL).toBe('from env')
  })
})
