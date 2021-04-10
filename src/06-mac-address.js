/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (!n.includes('-')) return false;
  const arr = n.split('-');
  return (arr.length === 6 && arr[0].charAt(0).match(/[F\d]/) !== null);
}

module.exports = isMAC48Address;
