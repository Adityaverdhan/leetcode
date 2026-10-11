/**
 * @param {string} s
 * @return {string}
 */
function reorganizeString(s) {
  const freq = new Map();

  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  // If one character appears too often, arrangement is impossible.
  if (Math.max(...freq.values()) > Math.ceil(s.length / 2)) {
    return "";
  }

  // Array used as a max heap: [count, character]
  const heap = [...freq.entries()]
    .map(([char, count]) => [count, char])
    .sort((a, b) => b[0] - a[0]);

  const popMax = () => heap.shift();

  const push = (item) => {
    heap.push(item);
    heap.sort((a, b) => b[0] - a[0]);
  };

  let result = "";
  let previous = null; // Character used in the last step

  while (heap.length > 0) {
    const [count, char] = popMax();

    result += char;

    // The previously used character can now be used again.
    if (previous !== null) {
      push(previous);
    }

    // Save this character if it still has remaining occurrences.
    previous = count - 1 > 0 ? [count - 1, char] : null;
  }

  return result;
}