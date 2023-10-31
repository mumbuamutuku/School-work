export default function cleanSet(set, startString) {
  if (!set && !startString && !(set instanceof Set) && typeof startString !== 'string') {
    return '';
  }

  const filteredValues = [];

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valuesub = value.substring(startString.length);

      if (valuesub && valuesub !== value) {
        filteredValues.push(valuesub);
      }
    }
  }
  return filteredValues.join('-');
}
