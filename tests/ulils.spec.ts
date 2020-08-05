import { assign, concatLog, getFullDate } from '../lib/utils';

test('add assign case 1', () => {
  expect(assign({ name: 'xiaoming', age: '123' }, { sex: 'mon' })).toEqual({
    name: 'xiaoming',
    age: '123',
    sex: 'mon',
  });
});

test('add assign case 2', () => {
  expect(
    assign(
      {
        name: 'xiaoming',
        age: '123',
        info: {
          address: 'shenzhen',
          phone: '121221222',
        },
      },
      {
        sex: 'mon',
        info: {
          phone: '333333',
        },
      },
    ),
  ).toEqual({
    name: 'xiaoming',
    age: '123',
    sex: 'mon',
    info: {
      phone: '333333',
    },
  });
});

test('add concatLog case1', () => {
  const error = new Error('error');
  expect(concatLog(error)).toString();
});

test('add concatLog case2', () => {
  expect(concatLog('error')).toString();
});

test('add getFullDate case', () => {
  expect(getFullDate()).toString();
});
