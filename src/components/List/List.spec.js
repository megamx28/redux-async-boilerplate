import React from 'react';
import { shallow, mount } from 'enzyme';
import List from './List';

const items = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
let element;

describe('List Component', () => {
  beforeEach(() => {
    element = (
      <List displayKey="name" items={items} />
    );
  });

  it('renders the list element', () => {
    const component = shallow(element);
    expect(component.is('.list')).toBe(true);
  });

  it('renders the correct number of li elements', () => {
    const component = shallow(element);
    expect(component.find('li').length).toBe(items.length);
  });

  it('renders the display key in the li element', () => {
    const component = shallow(element);
    expect(component.find('li').at(0).text()).toBe(items[0].name);
    expect(component.find('li').at(1).text()).toBe(items[1].name);
  });
});
