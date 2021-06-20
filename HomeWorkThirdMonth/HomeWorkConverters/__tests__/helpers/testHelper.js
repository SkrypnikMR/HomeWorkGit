import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';

export const shallowSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    return shallow(core);
};
export const mountSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    return mount(core);
};
