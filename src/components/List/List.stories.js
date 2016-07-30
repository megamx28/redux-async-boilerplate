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
    .addWithInfo(
        'Basic List',
        `
          This is the basic list component that accepts an array of list items.
        `,
        () => (<List items={items} displayKey="name" />),
        { inline: true, propTables: [List] }
    );