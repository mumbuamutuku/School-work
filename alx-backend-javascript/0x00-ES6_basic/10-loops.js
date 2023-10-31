/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  const myarr = [];
  for (const value of array) {
    myarr.push(appendString + value);
  }

  return myarr;
}
