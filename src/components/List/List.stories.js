import React from 'react';
import { storiesOf } from '@kadira/storybook';
import List from './List';

const items = [
    { name: 'jondoe1' },
    { name: 'jondoe2' },
    { name: 'jondoe3' },
    { name: 'jondoe4' }
];

storiesOf('List', module)
    .add('with a text', () => (
        <List items={items} displayKey="name" />
    ));