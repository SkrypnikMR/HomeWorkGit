import {
    validateName, validateNumber,
    validateLength, validateEnglish
} from '../../../src/js/helpers/validators/validators.js';


describe('validateLength', () => {
    it('should be defined', () => {
        expect(validateLength).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof validateLength).toBe('function');
    })
    it('should return false if length > str.length', () => {
        const length = 20;
        const str = 'SadBadRequest400';
        expect(validateLength(str, length)).toBe(false);
    })
    it('should return true if str.length  > length', () => {
        const length = 10;
        const str = 'HappyGoodRequest400';
        expect(validateLength(str, length)).toBe(true);
    })
})
describe('validateName', () => {
    it('should be defined', () => {
        expect(validateName).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof validateName).toBe('function');
    })
    it('should return null, if name match [a-z] ', () => {
        const validName = 'lowercasenamelatin'
        expect(validateName(validName)).toBe(null);
    })
    it('should return null, if name match [A-Z] ', () => {
        const validName = 'UPPERCASENAME'
        expect(validateName(validName)).toBe(null);
    })
    it('should return null, if name match [а-я] ', () => {
        const validName = 'имямаленькимибуквами'
        expect(validateName(validName)).toBe(null);
    })
    it('should return null, if name match [А-Я] ', () => {
        const validName = 'ИМЯБОЛЬШИМИБУКВАМИ'
        expect(validateName(validName)).toBe(null);
    })
    it('should return array of symbols, if name match [a-z] ', () => {
        const validName = 'notonlyletterinname2'
        expect(validateName(validName)).toEqual(['2']);
    })
    it('should return array of symbols, if name match [A-Z] ', () => {
        const validName = 'AXAZAAZAZAZ2321'
        expect(validateName(validName)).toEqual(['2321']);
    })
    it('should return array of symbols, if name match [а-я] ', () => {
        const validName = 'имястранноекакое324'
        expect(validateName(validName)).toEqual(['324']);
    })
    it('should return array of symbols, if name match [А-Я] ', () => {
        const validName = 'СТРАННОЕИМЯКАПСОМ213'
        expect(validateName(validName)).toEqual(['213']);
    })
})
describe('validateNumber', () => {
    const testObj = {}
    let counter = 0;
    beforeEach(() => {
        testObj[counter] = validateNumber((Math.random() * 100).toString())
        counter++;
    })
    it('should be defined', () => {
        expect(validateNumber).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof validateNumber).toBe('function');
    })
    it('shold return null, if argument === number ', () => {
        expect(testObj[2]).toBe(null);
    })
    it('shold return null, if argument === number ', () => {
        expect(testObj[3]).toBe(null);
    })
    it('shold return null, if argument === number ', () => {
        expect(testObj[4]).toBe(null);
    })
    it('shold return null, if argument === number ', () => {
        expect(testObj[5]).toBe(null);
    })
    it('shold return null, if argument === number ', () => {
        expect(testObj[6]).toBe(null);
    })
    it('shold return null, if argument === number ', () => {
        expect(testObj[7]).toBe(null);
    })
    it('shold return null, if argument === number ', () => {
        expect(testObj[8]).toBe(null);
    })
    it('shold return null, if argument === number ', () => {
        expect(testObj[9]).toBe(null);
    })
    it('shold return null, if argument === number ', () => {
        expect(testObj[10]).toBe(null);
    })
    it('shold return no numbers array ', () => {
        const testStr = '2131231232163dsadas';
        expect(validateNumber(testStr)).toEqual(['d', 's', 'a', 'd', 'a', 's']);
    })
    it('shold return no numbers array ', () => {
        const testStr = '@&^#*)324234535325235235';
        expect(validateNumber(testStr)).toEqual(['@', '&', '^', '#', '*', ')']);
    })
})
describe('validateEnglish', () => {
    it('should be defined', () => {
        expect(validateEnglish).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof validateEnglish).toBe('function');
    })
    it('should return null', () => {
        const testELVL = 'A1'
        expect(validateEnglish(testELVL)).toBe(null);
    })
    it('should return null', () => {
        const testELVL = 'A2'
        expect(validateEnglish(testELVL)).toBe(null);
    })
    it('should return null', () => {
        const testELVL = 'B1'
        expect(validateEnglish(testELVL)).toBe(null);
    })
    it('should return null', () => {
        const testELVL = 'B2'
        expect(validateEnglish(testELVL)).toBe(null);
    })
    it('should return null', () => {
        const testELVL = 'C1'
        expect(validateEnglish(testELVL)).toBe(null);
    })
    it('should return null', () => {
        const testELVL = 'C2'
        expect(validateEnglish(testELVL)).toBe(null);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'a1'
        expect(validateEnglish(testELVL)).toEqual(['a']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'a2'
        expect(validateEnglish(testELVL)).toEqual(['a']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'b1'
        expect(validateEnglish(testELVL)).toEqual(['b']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'b2'
        expect(validateEnglish(testELVL)).toEqual(['b']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'c1'
        expect(validateEnglish(testELVL)).toEqual(['c']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'c2'
        expect(validateEnglish(testELVL)).toEqual(['c']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'A3'
        expect(validateEnglish(testELVL)).toEqual(['3']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'A4'
        expect(validateEnglish(testELVL)).toEqual(['4']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'A5'
        expect(validateEnglish(testELVL)).toEqual(['5']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'A6'
        expect(validateEnglish(testELVL)).toEqual(['6']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'A7'
        expect(validateEnglish(testELVL)).toEqual(['7']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'A8'
        expect(validateEnglish(testELVL)).toEqual(['8']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'A9'
        expect(validateEnglish(testELVL)).toEqual(['9']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'A0'
        expect(validateEnglish(testELVL)).toEqual(['0']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'B3'
        expect(validateEnglish(testELVL)).toEqual(['3']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'B4'
        expect(validateEnglish(testELVL)).toEqual(['4']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'B5'
        expect(validateEnglish(testELVL)).toEqual(['5']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'B6'
        expect(validateEnglish(testELVL)).toEqual(['6']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'B7'
        expect(validateEnglish(testELVL)).toEqual(['7']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'B8'
        expect(validateEnglish(testELVL)).toEqual(['8']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'B9'
        expect(validateEnglish(testELVL)).toEqual(['9']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'B0'
        expect(validateEnglish(testELVL)).toEqual(['0']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'C3'
        expect(validateEnglish(testELVL)).toEqual(['3']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'C4'
        expect(validateEnglish(testELVL)).toEqual(['4']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'C5'
        expect(validateEnglish(testELVL)).toEqual(['5']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'C6'
        expect(validateEnglish(testELVL)).toEqual(['6']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'C7'
        expect(validateEnglish(testELVL)).toEqual(['7']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'C8'
        expect(validateEnglish(testELVL)).toEqual(['8']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'C9'
        expect(validateEnglish(testELVL)).toEqual(['9']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'C0'
        expect(validateEnglish(testELVL)).toEqual(['0']);
    });
    it('should return not valid symbols array', () => {
        const testELVL = 'D1'
        expect(validateEnglish(testELVL)).toEqual(['D']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'E1'
        expect(validateEnglish(testELVL)).toEqual(['E']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'F1'
        expect(validateEnglish(testELVL)).toEqual(['F']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'G1'
        expect(validateEnglish(testELVL)).toEqual(['G']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'H1'
        expect(validateEnglish(testELVL)).toEqual(['H']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'I1'
        expect(validateEnglish(testELVL)).toEqual(['I']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'J1'
        expect(validateEnglish(testELVL)).toEqual(['J']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'K1'
        expect(validateEnglish(testELVL)).toEqual(['K']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'L1'
        expect(validateEnglish(testELVL)).toEqual(['L']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'M1'
        expect(validateEnglish(testELVL)).toEqual(['M']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'N1'
        expect(validateEnglish(testELVL)).toEqual(['N']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'O1'
        expect(validateEnglish(testELVL)).toEqual(['O']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'P1'
        expect(validateEnglish(testELVL)).toEqual(['P']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'Q1'
        expect(validateEnglish(testELVL)).toEqual(['Q']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'R1'
        expect(validateEnglish(testELVL)).toEqual(['R']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'S1'
        expect(validateEnglish(testELVL)).toEqual(['S']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'T1'
        expect(validateEnglish(testELVL)).toEqual(['T']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'U1'
        expect(validateEnglish(testELVL)).toEqual(['U']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'W1'
        expect(validateEnglish(testELVL)).toEqual(['W']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'V1'
        expect(validateEnglish(testELVL)).toEqual(['V']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'X1'
        expect(validateEnglish(testELVL)).toEqual(['X']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'Y1'
        expect(validateEnglish(testELVL)).toEqual(['Y']);
    })
    it('should return not valid symbols array', () => {
        const testELVL = 'Z1'
        expect(validateEnglish(testELVL)).toEqual(['Z']);
    })
});