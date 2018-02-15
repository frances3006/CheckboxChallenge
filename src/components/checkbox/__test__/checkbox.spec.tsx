import * as React from "react";
import { shallow } from "enzyme";

import { Checkbox } from '../checbox';

test('checkbox snapshot', () => {
    const shallowWrapper = shallow(
        <Checkbox labelText='Hello'/>
    );
    expect(shallowWrapper).toMatchSnapshot();
});

test('checkbox onClick', () => {
    const onChange = jest.fn();

    const shallowWrapper = shallow(
        <Checkbox labelText='Hello' onChange={onChange}/>
    );
    shallowWrapper.find('.wrapper').simulate('click');

    expect(onChange).toBeCalledWith('Hello');
});

test('checkbox disabled', () => {
    const onChange = jest.fn();

    const shallowWrapper = shallow(
        <Checkbox labelText='Hello' disabled={true} onChange={onChange}/>
    );
    shallowWrapper.find('.wrapper').simulate('click');

    expect(onChange).toHaveBeenCalledTimes(0);
});

test('checkbox changes css when checked', () => {
    const shallowWrapper = shallow(
        <Checkbox labelText='Hello'/>
    );

    expect(shallowWrapper.find('.checkboxUnchecked')).toHaveLength(1);
    shallowWrapper.find('.wrapper').simulate('click');
    expect(shallowWrapper.find('.checkboxUnchecked')).toHaveLength(0);
    expect(shallowWrapper.find('.checkboxChecked')).toHaveLength(1);
});

test('checkbox css not changing when disabed', () => {
    const shallowWrapper = shallow(
        <Checkbox labelText='Hello' disabled={true}/>
    );

    expect(shallowWrapper.find('.checkboxUnchecked')).toHaveLength(1);
    shallowWrapper.find('.wrapper').simulate('click');
    expect(shallowWrapper.find('.checkboxUnchecked')).toHaveLength(1);
    expect(shallowWrapper.find('.checkboxChecked')).toHaveLength(0);
});