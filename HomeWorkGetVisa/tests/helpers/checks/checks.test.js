import {
    checkBalance, checkAge,
    checkDocuments, checkEnglish
} from '../../../src/js/helpers/checks/checks.js';


describe('checkBalance', () => {
    it('should be defined', () => {
        expect(checkBalance).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof checkBalance).toBe('function');
    })
    it('should return false', () => {
        const testValue1 = 1000;
        const testValue2 = 1500;
        const testValue3 = 2499;
        expect(checkBalance(testValue1)).toBe(false);
        expect(checkBalance(testValue2)).toBe(false);
        expect(checkBalance(testValue3)).toBe(false);
    })
    it('should return true', () => {
        const testValue1 = 2500;
        const testValue2 = 2600;
        const testValue3 = 30342234;
        expect(checkBalance(testValue1)).toBe(true);
        expect(checkBalance(testValue2)).toBe(true);
        expect(checkBalance(testValue3)).toBe(true);
    })
})
describe('checkAge', () => {
    it('should be defined', () => {
        expect(checkAge).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof checkAge).toBe('function');
    })
    it('should return false', () => {
        const testValue1 = 17;
        const testValue2 = 10;
        const testValue3 = 61;
        const testValue4 = 100;
        expect(checkAge(testValue1)).toBe(false);
        expect(checkAge(testValue2)).toBe(false);
        expect(checkAge(testValue3)).toBe(false);
        expect(checkAge(testValue4)).toBe(false);
    })
    it('should return true', () => {
        const testValue1 = 18;
        const testValue2 = 50;
        const testValue3 = 60;
        expect(checkAge(testValue1)).toBe(true);
        expect(checkAge(testValue2)).toBe(true);
        expect(checkAge(testValue3)).toBe(true);
    })
})
describe('checkDocuments', () => {
    const testCandidate = {
        insurance: true,
        photo: true,
        passport: true,
    }
    it('should be defined', () => {
        expect(checkDocuments).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof checkDocuments).toBe('function');
    })
    it('should return true if we have all documents', () => {
        expect(checkDocuments(testCandidate)).toBe(true);
    })
    it('should return false if !passport', () => {
        testCandidate.passport = false;
        expect(checkDocuments(testCandidate)).toBe(false);
    })
    it('should return false if !insurance', () => {
        testCandidate.insurance = false;
        expect(checkDocuments(testCandidate)).toBe(false);
    })
    it('should return false if !photo', () => {
        testCandidate.photo = false;
        expect(checkDocuments(testCandidate)).toBe(false);
    })
    it('should return false if !photo && !passport && !insurance', () => {
        expect(checkDocuments(testCandidate)).toBe(false);
    })
})
describe('checkEnglish', () => {
    it('should be defined', () => {
        expect(checkEnglish).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof checkEnglish).toBe('function');
    })
    it('should return false', () => {
        const testValue = 'A1';
        expect(checkEnglish(testValue)).toBe(false);
    })
    it('should return false', () => {
        const testValue = 'B1';
        expect(checkEnglish(testValue)).toBe(true);
    })
    it('should return false', () => {
        const testValue = 'B2';
        expect(checkEnglish(testValue)).toBe(true);
    })
    it('should return false', () => {
        const testValue = 'C1';
        expect(checkEnglish(testValue)).toBe(true);
    })
    it('should return false', () => {
        const testValue = 'C2';
        expect(checkEnglish(testValue)).toBe(true);
    })
})