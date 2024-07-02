export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubstr = 'string' && value.substring(startString.length);

      if (valueSubstr && valueSubstr !== value) {
        parts.push(valueSubstr);
      }
    }
  }
  return parts.join('-');
}
