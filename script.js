// ============================================================
// script.js — Roman Numeral Converter (JavaScript)
// Implementation mirrors the PHP logic from index.php but adds full input validation so the test suite can verify both happy-path and error cases.
// ============================================================

/**
 * Converts an integer (1–3999) to its Roman numeral representation.
 * @param  {*}      num  The value to convert.
 * @returns {string}     The Roman numeral string.
 * @throws  {Error}      If num is not a valid integer in [1, 3999].
 */
function integerToRoman(num) {
    if (
        typeof num !== 'number' ||
        !Number.isFinite(num) ||
        !Number.isInteger(num)
    ) {
        throw new Error('The number must be between 1 and 3999.');
    }
    if (num < 1 || num > 3999) {
        throw new Error('The number must be between 1 and 3999.');
    }

    const map = [
        ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
        ['C',  100], ['XC',  90], ['L',  50], ['XL',  40],
        ['X',   10], ['IX',   9], ['V',   5], ['IV',   4],
        ['I',    1]
    ];

    let result = '';
    for (const [roman, value] of map) {
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }
    return result;
}

/**
 * Converts a Roman numeral string to its integer value.
 * Only canonical (standard) Roman numeral strings are accepted.
 * @param  {*}      roman  The string to convert.
 * @returns {number}       The integer value.
 * @throws  {Error}        If the input is not a valid Roman numeral.
 */
function romanToInteger(roman) {
    // Must be a non-empty string with no leading/trailing whitespace
    if (typeof roman !== 'string' || roman.length === 0 || roman !== roman.trim()) {
        throw new Error('Input must be a valid Roman numeral.');
    }

    // Only uppercase Roman numeral characters allowed
    if (!/^[IVXLCDM]+$/.test(roman)) {
        throw new Error('Input must be a valid Roman numeral.');
    }

    // Parse the value using the subtractive algorithm
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0;
    let prev = 0;
    for (let i = roman.length - 1; i >= 0; i--) {
        const val = map[roman[i]];
        total += (val < prev) ? -val : val;
        prev = val;
    }

    // Validate by converting the result back — non-canonical strings
    // (e.g. "IIII", "VV", "IL", "XXL", "MMMM") will not round-trip.
    if (total < 1 || total > 3999 || integerToRoman(total) !== roman) {
        throw new Error('Input must be a valid Roman numeral.');
    }

    return total;
}
