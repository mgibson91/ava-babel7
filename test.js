import test from 'ava';
import { isNum } from './validate';

test('Test', (t) => {
  t.true(isNum(2));
})
