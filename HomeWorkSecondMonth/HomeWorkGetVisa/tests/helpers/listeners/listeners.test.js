import "regenerator-runtime/runtime";
import {
    generateAll, addCandidate, notifKill, startRace, initRace, clearRace
} from '../../../src/js/helpers/listeners/listeners';

jest.useFakeTimers();
describe('generateAll', () => {
    it('should be defined', () => {
        expect(generateAll).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof generateAll).toBe('function');
    })
    it('should return helpers.createNotif ', () => {
        const helpers = {
            createNotif: jest.fn().mockReturnValue(true),
            click: jest.fn()
        }
        const candidates = [{ a: 1 },
        { b: 2 },
        { c: 3 },
        { d: 4 },
        { e: 5 }]
        sessionStorage.setItem('candidates', JSON.stringify(candidates));
        expect(generateAll(helpers)).toBe(true);
    })
    it('should call click with generateButtons', () => {
        const helpers = {
            click: jest.fn()
        }
        sessionStorage.removeItem('candidates');
        const generateButtons = 'testValue';
        generateAll(helpers, generateButtons)
        expect(helpers.click).toHaveBeenCalledWith(generateButtons);
    })

})
describe('addCandidate', () => {
    it('should be defined', () => {
        expect(addCandidate).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof addCandidate).toBe('function');
    })
    it('should return helpers.create', () => {
        const helpers = {
            createNotif: jest.fn().mockReturnValue(true),
            cleaner: jest.fn()
        }
        const candidates = [{ a: 1 },
        { b: 2 },
        { c: 3 },
        { d: 4 },
        { e: 5 }]
        const inputs = {
            nameInput: { value: 'Name' },
            cardBalanceInput: { value: 'cardBalance' },
            ageInput: { value: '25' },
            passportCheckBox: { value: true },
            insuranceCheckBox: { value: true },
            photoCheckBox: { value: true },
            englishInput: { value: 'B1' },
        };
        sessionStorage.setItem('candidates', JSON.stringify(candidates));
        expect(addCandidate(helpers, inputs)).toBe(true);
        expect(helpers.cleaner).toHaveBeenCalledWith(inputs);
        expect(helpers.createNotif).toHaveBeenCalledWith('No vacancy');
        sessionStorage.removeItem('candidates');
    })
    it('should return helpers.create', () => {
        const helpers = {
            createNotif: jest.fn().mockReturnValue(true),
            cleaner: jest.fn(),
            validator: jest.fn().mockReturnValue(true),
        }
        const inputs = {
            nameInput: { value: 'Name' },
            cardBalanceInput: { value: 'cardBalance' },
            ageInput: { value: '25' },
            passportCheckBox: { value: true },
            insuranceCheckBox: { value: true },
            photoCheckBox: { value: true },
            englishInput: { value: 'B1' },
        };
        const candidate = {
            name: inputs.nameInput.value,
            balance: inputs.cardBalanceInput.value,
            age: inputs.ageInput.value,
            passport: inputs.passportCheckBox.checked,
            insurance: inputs.insuranceCheckBox.checked,
            photo: inputs.photoCheckBox.checked,
            english: inputs.englishInput.value,
        }
        addCandidate(helpers, inputs);
        expect(helpers.validator).toHaveBeenCalledWith(candidate);
        expect(helpers.cleaner).toHaveBeenCalledWith(inputs);
        expect(helpers.createNotif).toHaveBeenCalledWith('Candidate is added!');
        const SSArray = JSON.parse(sessionStorage.getItem('candidates'));
        expect(SSArray[0]).toEqual(candidate);
        sessionStorage.removeItem('candidates');
    })
})
describe('notifKill', () => {
    it('should be defined', () => {
        expect(notifKill).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof notifKill).toBe('function');
    })
    it('should change notif properties', () => {
        const notif = { classList: { add: jest.fn() }, style: { zIndex: 1 }, remove: jest.fn() }
        notifKill(notif)
        expect(notif.classList.add).toHaveBeenCalledWith('deleted');
        expect(notif.style.zIndex).toBe(0);
    })
    it('should call methods and timeouts', () => {
        const notif = { classList: { add: jest.fn() }, style: { zIndex: 1 }, remove: jest.fn() }
        notifKill(notif)
        jest.advanceTimersByTime(2500);
        expect(setTimeout).toHaveBeenCalled();
        expect(notif.remove).toHaveBeenCalled();
        expect(clearTimeout).toHaveBeenCalled();
    })
})
describe('generateAll', () => {
    it('should be defined', () => {
        expect(generateAll).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof generateAll).toBe('function');
    })
    it('should return helpers.createNotif ', () => {
        const helpers = {
            createNotif: jest.fn().mockReturnValue(true),
            click: jest.fn()
        }
        const candidates = [{ a: 1 },
        { b: 2 },
        { c: 3 },
        { d: 4 },
        { e: 5 }]
        sessionStorage.setItem('candidates', JSON.stringify(candidates));
        expect(generateAll(helpers)).toBe(true);
    })
    it('should call click with generateButtons', () => {
        const helpers = {
            click: jest.fn()
        }
        sessionStorage.removeItem('candidates');
        const generateButtons = 'testValue';
        generateAll(helpers, generateButtons)
        expect(helpers.click).toHaveBeenCalledWith(generateButtons);
    })

})
describe('initRace', () => {
    it('should be defined', () => {
        expect(initRace).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof initRace).toBe('function');
    })
    it('should return helpers.createNotif("oops, no one to race with :(")', () => {
        sessionStorage.removeItem('candidates');
        const helpers = { createNotif: jest.fn(), drowInit: jest.fn() }
        const canvas = { getContext: jest.fn().mockReturnValue({}) }
        expect(initRace(helpers, canvas)).toBe();
        expect(helpers.createNotif).toHaveBeenCalledWith("oops, no one to race with :(");
    })
    it('should return helpers.createNotif("One person is not interested in competing:)"', () => {
        sessionStorage.setItem('candidates', JSON.stringify([{}]));
        const helpers = { createNotif: jest.fn(), drowInit: jest.fn() }
        const canvas = { getContext: jest.fn().mockReturnValue({}) }
        expect(initRace(helpers, canvas)).toBe();
        expect(helpers.createNotif).toHaveBeenCalledWith("One person is not interested in competing:)");
        sessionStorage.removeItem('candidates');
    })
    it('should return helpers.createNotif("oops, no one to race with :(")', () => {
        sessionStorage.setItem('candidates', JSON.stringify([{}]));
        const helpers = { createNotif: jest.fn(), drowInit: jest.fn() }
        const canvas = { getContext: jest.fn().mockReturnValue({}) }
        expect(initRace(helpers, canvas)).toBe();
        expect(helpers.createNotif).toHaveBeenCalledWith("One person is not interested in competing:)");
        sessionStorage.removeItem('candidates');
    })
    it('should call methods', () => {
        const candidatesArray = [{ a: 1 }, { b: 2 }];
        sessionStorage.setItem('candidates', JSON.stringify(candidatesArray));
        const helpers = { createNotif: jest.fn(), drowInit: jest.fn(), mutateObject: jest.fn() }
        const canvas = { getContext: jest.fn().mockReturnValue({}), parentElement: { classList: { remove: jest.fn() }, scrollIntoView: jest.fn() } }
        expect(initRace(helpers, canvas)).toBe();
        expect(helpers.createNotif).toHaveBeenCalledWith("Race initialized!");
        expect(canvas.parentElement.classList.remove).toHaveBeenCalledWith("hide");
        expect(canvas.parentElement.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
        expect(helpers.mutateObject).toHaveBeenCalledWith(candidatesArray[0]);
        expect(helpers.mutateObject).toHaveBeenCalledWith(candidatesArray[1]);
        expect(helpers.drowInit).toHaveBeenCalledWith(candidatesArray, canvas, canvas.getContext('2d'), 105);
        sessionStorage.removeItem('candidates');
    })
})
describe('startRace', () => {
    it('should be defined', () => {
        expect(startRace).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof startRace).toBe('function');
    })
    it('should call all and go resolve', () => {
        const data = { name: 'winnerName' };
        sessionStorage.setItem('candidates', JSON.stringify([{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }]))
        const promises = { promiseStart: jest.fn().mockResolvedValue(data) }
        const callbacks = { callback: 1 };
        const draw = { drowFillCircle: jest.fn(), drowText: jest.fn() }
        const showNotification = jest.fn();
        const canvas = {
            getContext: jest.fn().mockReturnValue({ context: 'someContext' })
        };
        return startRace(callbacks, promises, draw, showNotification, canvas).then((imho) => {
            expect(draw.drowFillCircle).toHaveBeenCalledWith(canvas.getContext("2d"), 1300, 300, 'yellow')
            expect(draw.drowText).toHaveBeenCalledWith(canvas.getContext("2d"), `${data.name}`, 300, 1250, 'blue', 30)
            expect(draw.drowText).toHaveBeenCalledWith(canvas.getContext("2d"), `get Visa!`, 330, 1250, 'blue', 30)
        })
    })
    sessionStorage.removeItem('candidates');
    it('should call all and go resolve', () => {
        const data = { name: 'winnerName' };
        sessionStorage.setItem('candidates', JSON.stringify([{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }]))
        const promises = { promiseStart: jest.fn().mockRejectedValue(data) }
        const callbacks = { callback: 1 };
        const draw = { drowFillCircle: jest.fn(), drowText: jest.fn() }
        const showNotification = jest.fn();
        const canvas = {
            getContext: jest.fn().mockReturnValue({ context: 'someContext' })
        };
        return startRace(callbacks, promises, draw, showNotification, canvas).then((imho) => {
            expect(draw.drowFillCircle).toHaveBeenCalledWith(canvas.getContext("2d"), 1300, 300, 'red')
            expect(draw.drowText).toHaveBeenCalledWith(canvas.getContext("2d"), `Nobody got through.`, 300, 1220, 'black', 30)
            expect(draw.drowText).toHaveBeenCalledWith(canvas.getContext("2d"), `Come back tomorrow`, 330, 1200, 'black', 30)
        })
    })
})
describe('clearRace', () => {
    it('should be defined', () => {
        expect(clearRace).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof clearRace).toBe('function');
    })
    it('should all methods are called', () => {
        const draw = { drowBackground: jest.fn(), clearRect: jest.fn() };
        const canvas = { getContext: jest.fn(), parentElement: { classList: { add: jest.fn() } } };
        const helpers = { createNotif: jest.fn(), removeSessionStorageItem: jest.fn() };
        clearRace(draw, canvas, helpers);
        expect(draw.drowBackground).toHaveBeenCalledWith(canvas, canvas.getContext('2d'));
        expect(canvas.parentElement.classList.add).toHaveBeenCalledWith('hide');
        expect(helpers.createNotif).toHaveBeenCalledWith('You clear racing board!');
        expect(helpers.removeSessionStorageItem).toHaveBeenCalledWith('candidates');
        expect(draw.clearRect).toHaveBeenCalledWith(canvas);
    })
})
