import { configure } from '@kadira/storybook';

const req = require.context('./../src/components', true, /.stories\.js$/);

function loadStories() {
    req.keys().forEach(req)
}

configure(loadStories, module);