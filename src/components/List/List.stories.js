import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Faker from 'Faker';
import List from './List';

var items = [];
for (let i = 0; i <= 6; i++) {
    items.push({name: Faker.Name.findName()})
}

storiesOf('List', module)
    .addWithInfo(
        'Basic List',
        `
          This is the basic list component that accepts an array of list items.
        `,
        () => (<List items={items} displayKey="name" />),
        { inline: true, propTables: [List] }
    );