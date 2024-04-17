import { forEach } from './mock';
import { jest } from '@jest/globals';

const mockCallback = jest.fn((x) => 42 + x);

test('forEach mock function', () => {
  forEach([0, 1], mockCallback);

  // モック関数は2回呼び出されること
  expect(mockCallback.mock.calls).toHaveLength(2);

  // 関数の最初の呼び出しの第一引数は0であること
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // 関数の2回目の呼び出しの最初の引数は1であること
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // 関数への最初の呼び出しの戻り値は42であること
  expect(mockCallback.mock.results[0].value).toBe(42);

  expect(mockCallback.mock.results[1].value).toBe(43);
});
