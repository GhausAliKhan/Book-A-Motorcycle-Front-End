import { moneyDisplay } from '../timeCalc';

test('Expect to return a money format', () => {
  const totalToPay = 2;
  expect(moneyDisplay(totalToPay)).toMatch('$2.00');
});
