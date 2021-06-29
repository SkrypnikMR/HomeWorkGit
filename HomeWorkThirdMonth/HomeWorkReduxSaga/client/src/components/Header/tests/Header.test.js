import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from '../../../../__tests__/helper';
import Header from '../Header';
import { act } from 'react-dom/test-utils';

const mockStore = configureStore();
const store = mockStore({
    movies: [],
    moviesIds: [],
    isLoading: false,
    newMovie: {},
});

describe('Header', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<Header />, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should have Header ', () => {
        const component = mountSmart(<Header />, store);
        expect(component.find('Header')).toHaveLength(1);
    });
    it('Should have h1 ', () => {
        const component = mountSmart(<Header />, store);
        expect(component.find('h1')).toHaveLength(1);
    });
    it('Should have Button ', () => {
        const component = mountSmart(<Header />, store);
        expect(component.find('Button')).toHaveLength(3);
    });
    it('Should have Modal ', () => {
        const component = mountSmart(<Header />, store);
        expect(component.find('Modal')).toHaveLength(1);
    });
    it('Should click Button ', () => {
        const component = mountSmart(<Header />, store);
        act(() => {
            component.find('Button').at(0).props().onButtonClick();
        })
        component.update();
        expect(component.find('Modal').props().myClassName).toBe(true);
    });
});
