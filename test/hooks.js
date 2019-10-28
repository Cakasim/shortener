const { app } = require('../dist/app');

// Automatically shutdown app after each test.
afterEach(function () {
    try { app().shutdown(); }
    catch (e) {}
});
