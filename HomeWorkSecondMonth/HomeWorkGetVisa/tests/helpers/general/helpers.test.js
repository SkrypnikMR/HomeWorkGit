import {
    click, validator, cleaner, createNotif, mutateObject, removeSessionStorageItem, drowInit
} from '../../../src/js/helpers/general/helpers.js';
import 'jest-localstorage-mock';
jest.mock("../../../src/js/helpers/validators/validators.js", () => ({
    validateName: jest.fn(),
    validateNumber: jest.fn(),
    validateLength: jest.fn(),
    validateEnglish: jest.fn(),
}));
jest.mock("../../../src/js/helpers/listeners/listeners.js", () => ({ notifKill: jest.fn() }));
jest.mock('../../../src/js/helpers/drowers/drowers.js', () => ({
    drowBackground: jest.fn(),
    drowCircle: jest.fn(),
    drowText: jest.fn()
}))
jest.useFakeTimers();
import { notifKill } from '../../../src/js/helpers/listeners/listeners.js';
import * as validate from "../../../src/js/helpers/validators/validators.js";
import * as drowers from '../../../src/js/helpers/drowers/drowers.js';

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
        validate.validateLength.mockReturnValue(true);
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
        validate.validateLength.mockReturnValue(true);
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
        validate.validateNumber.mockReturnValue(false);
        validate.validateLength.mockReturnValue(false);
        validate.validateEnglish.mockReturnValue(false);
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
    it('should remoItem from session Storage', () => {
        const key = 'condidates';
        const array = [{ testValue: 1 }];
        const secondArray = [{ testValue: 2 }]
        sessionStorage.setItem(key, JSON.stringify(array));
        sessionStorage.setItem('testKey', JSON.stringify(secondArray));
        const oldSessionStorageLength = sessionStorage.length;
        removeSessionStorageItem(key);
        const newSessionStorageLength = sessionStorage.length;
        expect(newSessionStorageLength).toBe(oldSessionStorageLength - 1);
    })
})
describe('drowInit', () => {
    it('should be defined', () => {
        expect(drowInit).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof drowInit).toBe('function');
    })
    it('should all methods are called', () => {
        const candidates = [{
            name: "sadName",
            distance: '',
            balancePoint: '',
            documentPoint: '',
            agePoint: '',
            englishPoint: ''
        },
        {
            name: "HappyName",
            distance: '',
            balancePoint: '',
            documentPoint: '',
            agePoint: '',
            englishPoint: ''
        }
        ];
        const canvas = {};
        const context = {};
        const distance_Between = 100;
        drowInit(candidates, canvas, context, distance_Between);
        expect(drowers.drowBackground).toHaveBeenCalledWith(canvas, context);
        expect(drowers.drowText).toHaveBeenCalledWith(context, candidates[0].name, 102, 92, 'white', 12);
        expect(drowers.drowText).toHaveBeenCalledWith(context, candidates[1].name, 202, 92, 'white', 12);
        expect(drowers.drowText).toHaveBeenCalledWith(context, 'balance', 102, 292, 'white', 12);
        expect(drowers.drowText).toHaveBeenCalledWith(context, 'balance', 202, 292, 'white', 12);
        expect(drowers.drowText).toHaveBeenCalledWith(context, 'documents', 102, 492, 'white', 12);
        expect(drowers.drowText).toHaveBeenCalledWith(context, 'documents', 202, 492, 'white', 12);
        expect(drowers.drowText).toHaveBeenCalledWith(context, 'age', 102, 692, 'white', 12);
        expect(drowers.drowText).toHaveBeenCalledWith(context, 'age', 202, 692, 'white', 12);
        expect(drowers.drowText).toHaveBeenCalledWith(context, 'english', 102, 892, 'white', 12);
        expect(drowers.drowText).toHaveBeenCalledWith(context, 'english', 202, 892, 'white', 12);
        expect(drowers.drowCircle).toHaveBeenCalledWith(context, canvas, 0, ((2 * Math.PI) / 100), 100, 102, 100, 0, 'green');
        expect(drowers.drowCircle).toHaveBeenCalledWith(context, canvas, 0, ((2 * Math.PI) / 100), 100, 202, 100, 0, 'green');
    })
    it('should candidates values are changed', () => {
        const candidates = [{
            name: "sadName",
            distance: '',
            balancePoint: '',
            documentPoint: '',
            agePoint: '',
            englishPoint: ''
        },
        {
            name: "HappyName",
            distance: '',
            balancePoint: '',
            documentPoint: '',
            agePoint: '',
            englishPoint: ''
        }
        ];
        const canvas = {};
        const context = {};
        const distance_Between = 100;
        drowInit(candidates, canvas, context, distance_Between);
        expect(candidates[0].distance).toBe(102);
        expect(candidates[1].distance).toBe(202);
        expect(candidates[0].balancePoint).toBe(292);
        expect(candidates[1].balancePoint).toBe(292);
        expect(candidates[0].documentsPoint).toBe(492);
        expect(candidates[1].documentsPoint).toBe(492);
        expect(candidates[0].agePoint).toBe(692);
        expect(candidates[1].agePoint).toBe(692);
        expect(candidates[0].englishPoint).toBe(892);
        expect(candidates[1].englishPoint).toBe(892);
    })

})