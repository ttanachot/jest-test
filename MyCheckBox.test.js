import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import MyCheckBox from './MyCheckBox';

configure({adapter: new Adapter.default()});

test('MyCheckBox should show the text after click', () => {
  const checkbox = shallow(<MyCheckBox labelText="My label" />);
  expect(checkbox.text()).toEqual('');

  checkbox.find('input').simulate('change');
  expect(checkbox.text()).toEqual('My label');
});