import React from 'react';
import { shallow } from 'enzyme';
import MainLayout from '../../src/layouts/main';

describe('Main', () => {
  it('returns a React component with a children prop', () => {
    const wrapper = shallow(<MainLayout>Hello</MainLayout>);
    expect(wrapper.html()).toEqual('<div>Hello</div>');
  });
});
