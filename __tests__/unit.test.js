// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//isPhoneNumber
test('isPhoneNumber: (619) 555-1234 is valid', () => {
  expect(isPhoneNumber('(619) 555-1234')).toBe(true);
});
test('isPhoneNumber: 123-456-7890 is valid', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber: letters are invalid', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});
test('isPhoneNumber: too few digits is invalid', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});

//isEmail
test('isEmail: test@ucsd.edu is valid', () => {
  expect(isEmail('test@ucsd.edu')).toBe(true);
});
test('isEmail: user@gmail.com is valid', () => {
  expect(isEmail('user@gmail.com')).toBe(true);
});
test('isEmail: missing @ is invalid', () => {
  expect(isEmail('invalidemail.com')).toBe(false);
});
test('isEmail: missing domain is invalid', () => {
  expect(isEmail('user@')).toBe(false);
});

//isStrongPassword
test('isStrongPassword: Abcd1 is valid', () => {
  expect(isStrongPassword('Abcd1')).toBe(true);
});
test('isStrongPassword: hello_World99 is valid', () => {
  expect(isStrongPassword('hello_World99')).toBe(true);
});
test('isStrongPassword: starts with number is invalid', () => {
  expect(isStrongPassword('1abcdef')).toBe(false);
});
test('isStrongPassword: too short (under 4 chars) is invalid', () => {
  expect(isStrongPassword('Ab1')).toBe(false);
});

//isDate
test('isDate: 01/01/2000 is valid', () => {
  expect(isDate('01/01/2000')).toBe(true);
});
test('isDate: 1/1/2024 is valid', () => {
  expect(isDate('1/1/2024')).toBe(true);
});
test('isDate: 2000-01-01 wrong format is invalid', () => {
  expect(isDate('2000-01-01')).toBe(false);
});
test('isDate: 01/01/25 short year is invalid', () => {
  expect(isDate('01/01/25')).toBe(false);
});

//isHexColor
test('isHexColor: #fff is valid', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('isHexColor: #1a2b3c is valid', () => {
  expect(isHexColor('#1a2b3c')).toBe(true);
});
test('isHexColor: #gggggg invalid hex chars', () => {
  expect(isHexColor('#gggggg')).toBe(false);
});
test('isHexColor: #12345 wrong length is invalid', () => {
  expect(isHexColor('#12345')).toBe(false);
});