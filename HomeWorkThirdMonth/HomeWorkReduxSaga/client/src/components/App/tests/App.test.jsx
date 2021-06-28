import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from '../../../../__tests__/helper';
import App from '../App';

const mockStore = configureStore();
const store = mockStore({
    movies: [],
    moviesIds: [],
    isLoading: false,
    newMovie: {},
});

describe('App', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<App />, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should have App ', () => {
        const component = mountSmart(<App />, store);
        expect(component.find('App')).toHaveLength(1);
    });
    it('Should have Header ', () => {
        const component = mountSmart(<App />, store);
        expect(component.find('Header')).toHaveLength(1);
    });
    it('Should have Movies ', () => {
        const component = mountSmart(<App />, store);
        expect(component.find('Movies')).toHaveLength(1);
    });
    it('Should have Footer ', () => {
        const component = mountSmart(<App />, store);
        expect(component.find('Footer')).toHaveLength(1);
    });
    it('Should have NotificationContainer ', () => {
        const component = mountSmart(<App />, store);
        expect(component.find('NotificationContainer')).toHaveLength(1);
    });
});
