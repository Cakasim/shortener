const { assert } = require('chai');
const { app } = require('../dist/app');
const { run } = require('../');

describe('Running the app', function () {
    it ('without bootstrapping will fail', function () {
        assert.throws(_ => {
            app().run({ port: 3000 });
        });
    });

    it('with valid port will work', function () {
        return run({ port: 3000 });
    });
});
