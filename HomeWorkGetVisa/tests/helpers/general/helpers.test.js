import {
    click, validator, cleaner, createNotif, mutateObject, removeSessionStorageItem
} from '../../../src/js/helpers/general/helpers.js';
import 'jest-localstorage-mock';
jest.mock("../../../src/js/helpers/validators/validators.js", () => ({
    validateName: jest.fn(),
    validateNumber: jest.fn(),
    validateLength: jest.fn(),
    validateEnglish: jest.fn(),
}));
jest.mock("../../../src/js/helpers/listeners/listeners.js", () => ({ notifKill: jest.fn() }));
jest.useFakeTimers();
import { notifKill } from '../../../src/js/helpers/listeners/listeners.js';
import * as validate from "../../../src/js/helpers/validators/validators.js";

describe('click', () => {
    it('should be defined', () => {
        expect(click).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof click).toBe('function');
    })
    it('should be function', () => {
        const btn1Mock = jest.fn();
        const btn2Mock = jest.fn();
        const btn3Mock = jest.fn();
        const btn4Mock = jest.fn();
        const btn5Mock = jest.fn();
        const buttons = {
            btn1: { click: btn1Mock },
            btn2: { click: btn2Mock },
            btn3: { click: btn3Mock },
            btn4: { click: btn4Mock },
            btn5: { click: btn5Mock },
        }
        click(buttons);
        expect(btn1Mock).toHaveBeenCalled();
        expect(btn2Mock).toHaveBeenCalled();
        expect(btn3Mock).toHaveBeenCalled();
        expect(btn4Mock).toHaveBeenCalled();
        expect(btn5Mock).toHaveBeenCalled();
    })
})
describe('validator', () => {
    const candidate = {
        name: '',
        balance: '',
        age: '',
        english: '',
    }
    it('should be defined', () => {
        expect(validator).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof validator).toBe('function');
    })
    it('should return false', () => {
        validate.validateName.mockReturnValue(true);
        validate.validateNumber.mockReturnValue(true);
        validate.validateLength.mockReturnValue(false);
        validate.validateEnglish.mockReturnValue(true);
        expect(validator(candidate)).toBe(false);
        expect(validate.validateName).toHaveBeenCalledWith(candidate.name);
        expect(validate.validateNumber).toHaveBeenCalledWith(candidate.balance);
        expect(validate.validateNumber).toHaveBeenCalledWith(candidate.age);
        expect(validate.validateLength).toHaveBeenCalledWith(candidate.age, 3);
        expect(validate.validateEnglish).toHaveBeenCalledWith(candidate.english);
    });
    it('should return false', () => {
        validate.validateName.mockReturnValue(true);
        validate.validateNumber.mockReturnValue(false);
        validate.validateLength.mockReturnValue(false);
        validate.validateEnglish.mockReturnValue(true);
        expect(validator(candidate)).toBe(false);
        expect(validate.validateName).toHaveBeenCalledWith(candidate.name);
        expect(validate.validateNumber).toHaveBeenCalledWith(candidate.balance);
        expect(validate.validateNumber).toHaveBeenCalledWith(candidate.age);
        expect(validate.validateLength).toHaveBeenCalledWith(candidate.age, 3);
        expect(validate.validateEnglish).toHaveBeenCalledWith(candidate.english);
    });
    it('should return false', () => {
        validate.validateName.mockReturnValue(true);
        validate.validateNumber.mockReturnValue(true);
        validate.validateLength.mockReturnValue(false);
        validate.validateEnglish.mockReturnValue(false);
        expect(validator(candidate)).toBe(false);
        expect(validate.validateName).toHaveBeenCalledWith(candidate.name);
        expect(validate.validateNumber).toHaveBeenCalledWith(candidate.balance);
        expect(validate.validateNumber).toHaveBeenCalledWith(candidate.age);
        expect(validate.validateLength).toHaveBeenCalledWith(candidate.age, 3);
        expect(validate.validateEnglish).toHaveBeenCalledWith(candidate.english);
    });
    it('should return true', () => {
        validate.validateName.mockReturnValue(false);
        validate.validateNumber.mockReturnValue(true);
        validate.validateLength.mockReturnValue(false);
        validate.validateEnglish.mockReturnValue(true);
        expect(validator(candidate)).toBe(true);
    })

})
describe('cleaner', () => {
    it('should be defined', () => {
        expect(cleaner).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof cleaner).toBe('function');
    })
    it('should clean all nodes elements', () => {
        const nodes = {
            inputOne: { value: 'heh' },
            inputTwo: { value: 'kek' },
            checkBoxOne: { checked: true },
        }
        expect(cleaner(nodes)).toBe();
        expect(nodes.inputOne.value).toBe('');
        expect(nodes.inputTwo.value).toBe('');
        expect(nodes.checkBoxOne.checked).toBe(false);
    })
})
describe('createNotif', () => {
    it('should be defined', () => {
        expect(createNotif).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof createNotif).toBe('function');
    })
    it('should create notification on DOM Tree', () => {
        const expectedMessage = 'expectedMessage';
        notifKill.bind = jest.fn();
        createNotif(expectedMessage);
        const deleteButton = document.querySelector('.button__item');
        const notification = document.querySelector('.notification');
        expect(document.querySelector('.notification')).not.toBe(null);
        expect(document.querySelector('.notification__message')).not.toBe(null);
        expect(document.querySelector('.button__item')).not.toBe(null);
        expect(document.querySelector('.button')).not.toBe(null);
        expect(document.querySelector('.button__item').textContent).toBe('X');
        expect(document.querySelector('.message__item').textContent).toBe(expectedMessage);
        expect(notifKill.bind).toHaveBeenCalledWith(null, notification);
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenCalledWith(notifKill.bind(null, notification), 2000);

    })
})
describe('mutateObject', () => {
    it('should be defined', () => {
        expect(mutateObject).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof mutateObject).toBe('function');
    })
    it('should be function', () => {
        const testObject = {
            balance: '3245',
            age: '666',
        }
        mutateObject(testObject);
        expect(testObject.balance).toBe(3245);
        expect(testObject.age).toBe(666);
    })
})
describe('removeSessionStorageItem', () => {
    it('should be defined', () => {
        expect(removeSessionStorageItem).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof removeSessionStorageItem).toBe('function');
    })
    /*  don't know how to test this 
 it('should remoItem from session Storage', () => {
        const key = 'condidates';
              removeSessionStorageItem(key);
              expect(sessionStorage.removeItem).toHaveBeenCalledWith(key);
    }) */
})