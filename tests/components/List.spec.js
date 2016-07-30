import React from 'react';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import { mount, shallow } from 'enzyme';

import List from '../../src/components/List/List';

describe('Component: List', () => {

    it('should have props for items and displayKey', () => {
        const wrapper = mount(<List items={[]} displayKey="name" />);

        expect(wrapper.props().items).toExist;
        expect(wrapper.props().displayKey).toExist;
    });

});

