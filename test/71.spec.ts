import { expect, test } from 'vitest'
import { simplifyPath } from '@/71'

test('path = "/home/" => "/home"', () => {
  expect(simplifyPath('/home/')).toBe('/home')
})

test('path = "/../" => "/"', () => {
  expect(simplifyPath('/../')).toBe('/')
})

test('path = "/home//foo/" => "/home/foo"', () => {
  expect(simplifyPath('/home//foo/')).toBe('/home/foo')
})

test('path = "/a/./b/../../c/" => "/c"', () => {
  expect(simplifyPath('/a/./b/../../c/')).toBe('/c')
})

test('path = "/a/../../b/../c//.//" => "/c"', () => {
  expect(simplifyPath('/a/../../b/../c//.//')).toBe('/c')
})

test('path = "/a//b////c/d//././/.." => "/a/b/c"', () => {
  expect(simplifyPath('/a//b////c/d//././/..')).toBe('/a/b/c')
})

test('path = "/.." => "/"', () => {
  expect(simplifyPath('/..')).toBe('/')
})

test('path = "/." => "/"', () => {
  expect(simplifyPath('/.')).toBe('/')
})
