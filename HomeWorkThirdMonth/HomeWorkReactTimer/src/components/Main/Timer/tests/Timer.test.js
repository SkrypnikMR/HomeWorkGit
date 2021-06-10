import React from 'react';
import { shallow, mount } from 'enzyme';
import Timer from '../Timer';

describe('Main', () => {
    const realGbI = global.clearInterval;
    beforeEach(() => {
        jest.useFakeTimers();
        global.clearInterval = jest.fn();
    });
    afterEach(() => {
        jest.advanceTimersByTime(5001);
        jest.clearAllTimers();
        global.clearInterval = realGbI;
    });
    it('Should match snapshot', () => {
        const component = shallow(<Timer />);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should have Timer ', () => {
        const component = mount(<Timer />);
        expect(component.find('Timer')).toHaveLength(1);
    });
    it('Should have timer__tablo p', () => {
        const component = mount(<Timer />);
        expect(component.find('p').hasClass('timer__tablo')).toBe(true);
    });
    it('Should have timer__controll-set div with childrens', () => {
        const component = mount(<Timer />);
        const divControllSet = component.find('.timer__controll-set');
        expect(divControllSet).toHaveLength(1);
        expect(divControllSet.find('Input')).toHaveLength(1);
        expect(divControllSet.find('Button')).toHaveLength(1);
    });
    it('Should have timer__controll-operations div with childrens', () => {
        const component = mount(<Timer />);
        const divControllOperations = component.find('.timer__controll-operations');
        expect(divControllOperations).toHaveLength(1);
        expect(divControllOperations.find('Button')).toHaveLength(3);
    });
    it('Should have NotificationContainer', () => {
        const component = mount(<Timer />);
        expect(component.find('NotificationContainer')).toHaveLength(1);
    });
    it('Should change startTime in state if we change input', () => {
        const component = mount(<Timer />);
        const testValue = 'someTestValue';
        component.find('Input').simulate('change', { target: { value: testValue } });
        expect(component.state().startTime).toBe(testValue);
    });
    it('Should not set a realTime if we set not a number', () => {
        const component = mount(<Timer />);
        const testValue = 'someTestValue';
        component.find('Input').simulate('change', { target: { value: testValue } });
        component.findWhere((n) => n.type() === 'button' && n.text() === 'Set').simulate('click');
        jest.advanceTimersByTime(3000);
        expect(component.state().realTime).toBe(0);
        expect(component.find('Notification')).toHaveLength(1);
    });
    it('Should not set a realTime if we set number > 86400', () => {
        const component = mount(<Timer />);
        const testValue = '86401';
        component.find('Input').simulate('change', { target: { value: testValue } });
        component.findWhere((n) => n.type() === 'button' && n.text() === 'Set').simulate('click');
        jest.advanceTimersByTime(3000);
        expect(component.state().realTime).toBe(0);
        expect(component.find('Notification')).toHaveLength(1);
    });
    it('Should  set a realTime if we set number <= 3600 and call this.TimerCounter', () => {
        const component = mount(<Timer />);
        const testValue = '3600';
        component.find('Input').simulate('change', { target: { value: testValue } });
        component.findWhere((n) => n.type() === 'button' && n.text() === 'Set').simulate('click');
        expect(component.state().time).toBe('01:00:00');
    });
    it('Should  set a realTime if we set number <= 360 and call this.TimerCounter', () => {
        const component = mount(<Timer />);
        const testValue = '360';
        component.find('Input').simulate('change', { target: { value: testValue } });
        component.findWhere((n) => n.type() === 'button' && n.text() === 'Set').simulate('click');
        expect(component.state().time).toBe('00:06:00');
    });
    it('Should  set a realTime if we set number <= 720 and call this.TimerCounter', () => {
        const component = mount(<Timer />);
        const testValue = '720';
        component.find('Input').simulate('change', { target: { value: testValue } });
        component.findWhere((n) => n.type() === 'button' && n.text() === 'Set').simulate('click');
        expect(component.state().time).toBe('00:12:00');
    });
    it('Should  set a realTime if we set number <= 59 and call this.TimerCounter', () => {
        const component = mount(<Timer />);
        const testValue = '59';
        component.find('Input').simulate('change', { target: { value: testValue } });
        component.findWhere((n) => n.type() === 'button' && n.text() === 'Set').simulate('click');
        expect(component.state().time).toBe('00:00:59');
    });
    it('Should  set a realTime if we set number <= 60and call this.TimerCounter', () => {
        const component = mount(<Timer />);
        const testValue = '6';
        component.find('Input').simulate('change', { target: { value: testValue } });
        component.findWhere((n) => n.type() === 'button' && n.text() === 'Set').simulate('click');
        expect(component.state().time).toBe('00:00:06');
    });
    it('Should  set a realTime if we set number <= 36000 and call this.TimerCounter', () => {
        const component = mount(<Timer />);
        const testValue = '36000';
        component.find('Input').simulate('change', { target: { value: testValue } });
        component.findWhere((n) => n.type() === 'button' && n.text() === 'Set').simulate('click');
        expect(component.state().time).toBe('10:00:00');
    });
    it('Should  click on stop ', () => {
        const component = mount(<Timer />);
        const testValue = 12;
        component.setState({ interval: testValue, stopButtonDisabled: false });
        component.findWhere((n) => n.type() === 'button' && n.text() === 'Stop').simulate('click');

        expect(clearInterval).toHaveBeenCalledWith(testValue);
        expect(component.state().interval).not.toBe(testValue);
        expect(component.state().interval).toBe(null);
    });
    it('Should  click on reset ', () => {
        const component = mount(<Timer />);
        const testValue = 12;
        component.setState({ interval: testValue, resetBtnDisabled: false });
        component.findWhere((n) => n.type() === 'button' && n.text() === 'Reset').simulate('click');

        expect(clearInterval).toHaveBeenCalledWith(testValue);
        expect(component.state().interval).not.toBe(testValue);
        expect(component.state().interval).toBe(null);
        expect(component.state().setBtnDisabled).toBe(true);
        expect(component.state().startBrnDisabled).toBe(true);
        expect(component.state().stopButtonDisabled).toBe(true);
        expect(component.state().resetBtnDisabled).toBe(true);
        expect(component.state().startTime).toBe('');
        expect(component.state().realTime).toBe(0);
        expect(component.state().time).toBe('00:00:00');
    });
    it('Should  click on start ', () => {
        const component = mount(<Timer />);
        const testValue = 1;
        component.setState({ realTime: testValue, startBrnDisabled: false });
        component.findWhere((n) => n.type() === 'button' && n.text() === 'Start').simulate('click');

        jest.advanceTimersByTime(2001);
        expect(component.state().setBtnDisabled).toBe(true);
        expect(component.state().startBrnDisabled).toBe(true);
        expect(component.state().stopButtonDisabled).toBe(true);
        expect(component.state().resetBtnDisabled).toBe(true);
        expect(component.state().startTime).toBe('');
        expect(component.state().realTime).toBe(0);
        expect(component.state().time).toBe('00:00:00');
    });
    it('Should  click on start2 ', () => {
        const component = mount(<Timer />);
        const testValue = 4;
        component.setState({ realTime: testValue, startBrnDisabled: false });
        component.findWhere((n) => n.type() === 'button' && n.text() === 'Start').simulate('click');

        jest.advanceTimersByTime(2001);
        expect(component.state().setBtnDisabled).toBe(true);
        expect(component.state().startBrnDisabled).toBe(true);
        expect(component.state().stopButtonDisabled).toBe(true);
        expect(component.state().resetBtnDisabled).toBe(true);
        expect(component.state().startTime).toBe('');
        expect(component.state().realTime).toBe(2);
        expect(component.state().time).toBe('00:00:03');
    });
});
