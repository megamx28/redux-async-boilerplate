import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import List from './List';

const items = [{'name': 'John Doe'}, {'name': 'Jane Doe'}];
let onClickSpy;
let element;

describe('List Component', () => {
  beforeEach(() => {
    onClickSpy = sinon.spy();

    element = (
      <List displayKey="name" items={items} onClick={onClickSpy} />
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

  it('will trigger the li onClick if prop is provided', () => {
    const component = shallow(element);
    component.find('li').at(0).simulate('click');
    expect(onClickSpy.calledOnce).toBe(true);
  });

  it('wont trigger the li onClick if prop is provided', () => {
    const component = shallow(<List displayKey="name" items={items} />);
    component.find('li').at(0).simulate('click');
    expect(onClickSpy.calledOnce).toBe(false);
  });
});
