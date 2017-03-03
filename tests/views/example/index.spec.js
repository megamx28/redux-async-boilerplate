import React from 'react';
import { shallow } from 'enzyme';
import { ExampleView } from '../../../src/views/example';

describe('ExampleView', () => {
  it('returns the correct react component view', () => {
    const wrapper = shallow(<ExampleView exampleActions={{}}>Hello</ExampleView>);
    expect(wrapper.find('.rc-example-view').exists()).toEqual(true);
  });
});
