import myFunc from "../index";

console.log('Tests started!...');

it('expect myFunc(5) to equal 25', () => {
  expect(myFunc(5)).toEqual(25);
});