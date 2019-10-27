const assert = require('assert');
const run = require('../').run;

describe('Running the service', function () {
    it('with valid port should work', function () {
        return run({ port: 3000 });
    });
});
