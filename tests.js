// ============================================================
// tests.js — Automated Test Suite for Roman Numeral Converter
// Based on Task #3 test case definitions (Task__3_urko_aguillo)
//
// Structure:
//   PART 1 — Human-created test cases (TC-1 … TC-48)
//   PART 2 — AI-assisted test cases   (TC-A1 … TC-A23,
//                                      TC-B1 … TC-B27)
// ============================================================

const expect = chai.expect;

// ============================================================
// PART 1 — Human-created test cases
// ============================================================

// -----------------------------------------------------------
// integerToRoman — Part 1
// -----------------------------------------------------------
describe('Part 1 (Human-created)', function () {
    describe('integerToRoman', function () {

        // --- Out-of-range / invalid input ---
        describe('Invalid input', function () {
            it('TC-1  integerToRoman(-2) => Error', function () {
                expect(() => integerToRoman(-2)).to.throw();
            });

            it('TC-2  integerToRoman(0) => Error', function () {
                expect(() => integerToRoman(0)).to.throw();
            });

            it('TC-19 integerToRoman(4000) => Error', function () {
                expect(() => integerToRoman(4000)).to.throw();
            });
        });
        // --- Lower boundary ---
        describe('Lower boundary', function () {
            it('TC-3  integerToRoman(1) => "I"', function () {
                expect(integerToRoman(1)).to.equal('I');
            });
        });
        // --- Subtractive-notation boundary values ---
        describe('Subtractive-notation boundary values', function () {
            it('TC-4  integerToRoman(4) => "IV"', function () {
                expect(integerToRoman(4)).to.equal('IV');
            });

            it('TC-5  integerToRoman(5) => "V"', function () {
                expect(integerToRoman(5)).to.equal('V');
            });

            it('TC-6  integerToRoman(6) => "VI"', function () {
                expect(integerToRoman(6)).to.equal('VI');
            });

            it('TC-7  integerToRoman(9) => "IX"', function () {
                expect(integerToRoman(9)).to.equal('IX');
            });

            it('TC-8  integerToRoman(40) => "XL"', function () {
                expect(integerToRoman(40)).to.equal('XL');
            });

            it('TC-9  integerToRoman(49) => "XLIX"', function () {
                expect(integerToRoman(49)).to.equal('XLIX');
            });

            it('TC-10 integerToRoman(50) => "L"', function () {
                expect(integerToRoman(50)).to.equal('L');
            });

            it('TC-11 integerToRoman(90) => "XC"', function () {
                expect(integerToRoman(90)).to.equal('XC');
            });

            it('TC-12 integerToRoman(100) => "C"', function () {
                expect(integerToRoman(100)).to.equal('C');
            });

            it('TC-13 integerToRoman(400) => "CD"', function () {
                expect(integerToRoman(400)).to.equal('CD');
            });

            it('TC-14 integerToRoman(499) => "CDXCIX"', function () {
                expect(integerToRoman(499)).to.equal('CDXCIX');
            });

            it('TC-15 integerToRoman(500) => "D"', function () {
                expect(integerToRoman(500)).to.equal('D');
            });

            it('TC-16 integerToRoman(900) => "CM"', function () {
                expect(integerToRoman(900)).to.equal('CM');
            });

            it('TC-17 integerToRoman(1000) => "M"', function () {
                expect(integerToRoman(1000)).to.equal('M');
            });

            it('TC-18 integerToRoman(3999) => "MMMCMXCIX"', function () {
                expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
            });
        });
    });

    // -----------------------------------------------------------
    // romanToInteger — Part 1
    // -----------------------------------------------------------
    describe('romanToInteger', function () {

        // --- Invalid characters ---
        describe('Invalid characters', function () {
            it('TC-20 romanToInteger("a") => Error', function () {
                expect(() => romanToInteger('a')).to.throw();
            });

            it('TC-21 romanToInteger("AX") => Error (invalid character A)', function () {
                expect(() => romanToInteger('AX')).to.throw();
            });

            it('TC-22 romanToInteger("XA") => Error (invalid character A)', function () {
                expect(() => romanToInteger('XA')).to.throw();
            });

            it('TC-23 romanToInteger("XAX") => Error (invalid character A)', function () {
                expect(() => romanToInteger('XAX')).to.throw();
            });
        });
        // --- Valid small values ---
        describe('Valid small values', function () {
            it('TC-24 romanToInteger("I") => 1', function () {
                expect(romanToInteger('I')).to.equal(1);
            });

            it('TC-25 romanToInteger("II") => 2', function () {
                expect(romanToInteger('II')).to.equal(2);
            });

            it('TC-26 romanToInteger("III") => 3', function () {
                expect(romanToInteger('III')).to.equal(3);
            });
        });
        // --- Repetition violations ---
        describe('Repetition violations', function () {
            it('TC-27 romanToInteger("IIII") => Error (4 × I not allowed)', function () {
                expect(() => romanToInteger('IIII')).to.throw();
            });

            it('TC-28 romanToInteger("IV") => 4', function () {
                expect(romanToInteger('IV')).to.equal(4);
            });

            it('TC-29 romanToInteger("V") => 5', function () {
                expect(romanToInteger('V')).to.equal(5);
            });

            it('TC-30 romanToInteger("VV") => Error (V cannot repeat)', function () {
                expect(() => romanToInteger('VV')).to.throw();
            });

            it('TC-31 romanToInteger("VX") => Error (V cannot subtract)', function () {
                expect(() => romanToInteger('VX')).to.throw();
            });

            it('TC-32 romanToInteger("IX") => 9', function () {
                expect(romanToInteger('IX')).to.equal(9);
            });

            it('TC-33 romanToInteger("X") => 10', function () {
                expect(romanToInteger('X')).to.equal(10);
            });

            it('TC-34 romanToInteger("XIIII") => Error (4 × I after X)', function () {
                expect(() => romanToInteger('XIIII')).to.throw();
            });

            it('TC-35 romanToInteger("XL") => 40', function () {
                expect(romanToInteger('XL')).to.equal(40);
            });

            it('TC-36 romanToInteger("XXL") => Error (invalid subtractive order)', function () {
                expect(() => romanToInteger('XXL')).to.throw();
            });

            it('TC-37 romanToInteger("IL") => Error (I can only subtract from V, X)', function () {
                expect(() => romanToInteger('IL')).to.throw();
            });

            it('TC-38 romanToInteger("L") => 50', function () {
                expect(romanToInteger('L')).to.equal(50);
            });

            it('TC-39 romanToInteger("XCIX") => 99', function () {
                expect(romanToInteger('XCIX')).to.equal(99);
            });

            it('TC-40 romanToInteger("C") => 100', function () {
                expect(romanToInteger('C')).to.equal(100);
            });

            it('TC-41 romanToInteger("CD") => 400', function () {
                expect(romanToInteger('CD')).to.equal(400);
            });

            it('TC-42 romanToInteger("CDXCIX") => 499', function () {
                expect(romanToInteger('CDXCIX')).to.equal(499);
            });

            it('TC-43 romanToInteger("D") => 500', function () {
                expect(romanToInteger('D')).to.equal(500);
            });

            it('TC-44 romanToInteger("CM") => 900', function () {
                expect(romanToInteger('CM')).to.equal(900);
            });

            it('TC-45 romanToInteger("CMXCIX") => 999', function () {
                expect(romanToInteger('CMXCIX')).to.equal(999);
            });

            it('TC-46 romanToInteger("M") => 1000', function () {
                expect(romanToInteger('M')).to.equal(1000);
            });

            it('TC-47 romanToInteger("MMMCMXCIX") => 3999', function () {
                expect(romanToInteger('MMMCMXCIX')).to.equal(3999);
            });

            it('TC-48 romanToInteger("MMMM") => Error (exceeds 3999)', function () {
                expect(() => romanToInteger('MMMM')).to.throw();
            });
        });
    });
});
// ============================================================
// PART 2 — AI-assisted test cases
// ============================================================

// -----------------------------------------------------------
// integerToRoman — Part 2 (AI-assisted)
// -----------------------------------------------------------
describe('Part 2 (AI-assisted)', function () {
    describe('integerToRoman', function () {

        // --- Invalid type inputs ---
        describe('Invalid type inputs', function () {
            it('TC-A1  integerToRoman("III") => Error (string, not integer)', function () {
                expect(() => integerToRoman('III')).to.throw();
            });

            it('TC-A2  integerToRoman(3.5) => Error (float)', function () {
                expect(() => integerToRoman(3.5)).to.throw();
            });

            it('TC-A3  integerToRoman(null) => Error', function () {
                expect(() => integerToRoman(null)).to.throw();
            });

            it('TC-A4  integerToRoman(undefined) => Error', function () {
                expect(() => integerToRoman(undefined)).to.throw();
            });

            it('TC-A5  integerToRoman([]) => Error (array)', function () {
                expect(() => integerToRoman([])).to.throw();
            });

            it('TC-A6  integerToRoman(NaN) => Error', function () {
                expect(() => integerToRoman(NaN)).to.throw();
            });

            it('TC-A7  integerToRoman(Infinity) => Error', function () {
                expect(() => integerToRoman(Infinity)).to.throw();
            });
        });
        // --- Boundaries (confirmed from Part 1) ---
        describe('Boundaries', function () {
            it('TC-A8  integerToRoman(1) => "I" (lower boundary)', function () {
                expect(integerToRoman(1)).to.equal('I');
            });

            it('TC-A9  integerToRoman(3999) => "MMMCMXCIX" (upper boundary)', function () {
                expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
            });

            it('TC-A10 integerToRoman(-1) => Error (just below lower boundary)', function () {
                expect(() => integerToRoman(-1)).to.throw();
            });

            it('TC-A11 integerToRoman(4000) => Error (just above upper boundary)', function () {
                expect(() => integerToRoman(4000)).to.throw();
            });
        });
        // --- All six subtractive-notation pairs ---
        describe('Subtractive-notation pairs', function () {
            it('TC-A12 integerToRoman(4) => "IV"', function () {
                expect(integerToRoman(4)).to.equal('IV');
            });

            it('TC-A13 integerToRoman(9) => "IX"', function () {
                expect(integerToRoman(9)).to.equal('IX');
            });

            it('TC-A14 integerToRoman(40) => "XL"', function () {
                expect(integerToRoman(40)).to.equal('XL');
            });

            it('TC-A15 integerToRoman(90) => "XC"', function () {
                expect(integerToRoman(90)).to.equal('XC');
            });

            it('TC-A16 integerToRoman(400) => "CD"', function () {
                expect(integerToRoman(400)).to.equal('CD');
            });

            it('TC-A17 integerToRoman(900) => "CM"', function () {
                expect(integerToRoman(900)).to.equal('CM');
            });
        });
        // --- Mid-range representative values ---
        describe('Mid-range representative values', function () {
            it('TC-A18 integerToRoman(14) => "XIV"', function () {
                expect(integerToRoman(14)).to.equal('XIV');
            });

            it('TC-A19 integerToRoman(58) => "LVIII"', function () {
                expect(integerToRoman(58)).to.equal('LVIII');
            });

            it('TC-A20 integerToRoman(1994) => "MCMXCIV" (classic tricky case)', function () {
                expect(integerToRoman(1994)).to.equal('MCMXCIV');
            });

            it('TC-A21 integerToRoman(2024) => "MMXXIV"', function () {
                expect(integerToRoman(2024)).to.equal('MMXXIV');
            });

            it('TC-A22 integerToRoman(2444) => "MMCDXLIV" (multiple subtractive pairs)', function () {
                expect(integerToRoman(2444)).to.equal('MMCDXLIV');
            });

            it('TC-A23 integerToRoman(3888) => "MMMDCCCLXXXVIII" (longest valid numeral)', function () {
                expect(integerToRoman(3888)).to.equal('MMMDCCCLXXXVIII');
            });
        });
    });

    // -----------------------------------------------------------
    // romanToInteger — Part 2 (AI-assisted)
    // -----------------------------------------------------------
    describe('romanToInteger', function () {

        // --- Invalid non-string types ---
        describe('Invalid non-string types', function () {
            it('TC-B1  romanToInteger(10) => Error (integer, not string)', function () {
                expect(() => romanToInteger(10)).to.throw();
            });

            it('TC-B2  romanToInteger(null) => Error', function () {
                expect(() => romanToInteger(null)).to.throw();
            });

            it('TC-B3  romanToInteger(undefined) => Error', function () {
                expect(() => romanToInteger(undefined)).to.throw();
            });

            it('TC-B4  romanToInteger([]) => Error (array)', function () {
                expect(() => romanToInteger([])).to.throw();
            });

            it('TC-B5  romanToInteger("") => Error (empty string)', function () {
                expect(() => romanToInteger('')).to.throw();
            });
        });
        // --- Invalid subtractive combinations ---
        describe('Invalid subtractive combinations', function () {
            it('TC-B6  romanToInteger("XIIV") => Error (invalid subtractive combo)', function () {
                expect(() => romanToInteger('XIIV')).to.throw();
            });

            it('TC-B7  romanToInteger("LC") => Error (L cannot subtract)', function () {
                expect(() => romanToInteger('LC')).to.throw();
            });

            it('TC-B8  romanToInteger("DM") => Error (D cannot subtract)', function () {
                expect(() => romanToInteger('DM')).to.throw();
            });

            it('TC-B9  romanToInteger("IC") => Error (I can only subtract from V, X)', function () {
                expect(() => romanToInteger('IC')).to.throw();
            });

            it('TC-B10 romanToInteger("IM") => Error (I can only subtract from V, X)', function () {
                expect(() => romanToInteger('IM')).to.throw();
            });

            it('TC-B11 romanToInteger("XM") => Error (X can only subtract from L, C)', function () {
                expect(() => romanToInteger('XM')).to.throw();
            });

            it('TC-B12 romanToInteger("VL") => Error (V cannot subtract)', function () {
                expect(() => romanToInteger('VL')).to.throw();
            });
        });
        // --- Whitespace violations ---
        describe('Whitespace violations', function () {
            it('TC-B13 romanToInteger(" X") => Error (leading whitespace)', function () {
                expect(() => romanToInteger(' X')).to.throw();
            });

            it('TC-B14 romanToInteger("X ") => Error (trailing whitespace)', function () {
                expect(() => romanToInteger('X ')).to.throw();
            });
        });
        // --- Repetition violations ---
        describe('Repetition violations', function () { 
            it('TC-B15 romanToInteger("VVV") => Error (V cannot repeat)', function () {
                expect(() => romanToInteger('VVV')).to.throw();
            });

            it('TC-B16 romanToInteger("CCCC") => Error (C repeated 4 times)', function () {
                expect(() => romanToInteger('CCCC')).to.throw();
            });

            it('TC-B17 romanToInteger("LLLL") => Error (L cannot repeat)', function () {
                expect(() => romanToInteger('LLLL')).to.throw();
            });

            it('TC-B18 romanToInteger("DD") => Error (D cannot repeat)', function () {
                expect(() => romanToInteger('DD')).to.throw();
            });
        });
        // --- Valid mid-range and complex values ---
        describe('Valid mid-range and complex values', function () {
            it('TC-B19 romanToInteger("XIV") => 14', function () {
                expect(romanToInteger('XIV')).to.equal(14);
            });

            it('TC-B20 romanToInteger("LVIII") => 58', function () {
                expect(romanToInteger('LVIII')).to.equal(58);
            });

            it('TC-B21 romanToInteger("MCMXCIV") => 1994', function () {
                expect(romanToInteger('MCMXCIV')).to.equal(1994);
            });

            it('TC-B22 romanToInteger("MMXXIV") => 2024', function () {
                expect(romanToInteger('MMXXIV')).to.equal(2024);
            });

            it('TC-B23 romanToInteger("MMMDCCCLXXXVIII") => 3888 (longest valid numeral)', function () {
                expect(romanToInteger('MMMDCCCLXXXVIII')).to.equal(3888);
            });

            it('TC-B24 romanToInteger("MMCDXLIV") => 2444', function () {
                expect(romanToInteger('MMCDXLIV')).to.equal(2444);
            });
        });
        // --- Case sensitivity ---
        describe('Case sensitivity', function () {
            it('TC-B25 romanToInteger("x") => Error (lowercase not accepted)', function () {
                expect(() => romanToInteger('x')).to.throw();
            });

            it('TC-B26 romanToInteger("xiv") => Error (all-lowercase not accepted)', function () {
                expect(() => romanToInteger('xiv')).to.throw();
            });

            it('TC-B27 romanToInteger("Xiv") => Error (mixed-case not accepted)', function () {
                expect(() => romanToInteger('Xiv')).to.throw();
            });
        });
    });
});