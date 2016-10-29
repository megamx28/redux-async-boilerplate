import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import faker from 'faker';
import List from './List';

var items = [];
for (let i = 0; i <= 6; i++) {
  items.push({ name: faker.name.findName() });
}

storiesOf('List', module)
    .addWithInfo(
        'Basic List',
        `
          This is the basic list component that accepts an array of list items.
        `,
        () => (<List displayKey="name" items={items} onClick={action('clicked!')} />),
        { inline: false, propTables: [List] }
    );
