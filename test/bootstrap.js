const { expect } = require('chai');
const { Application } = require('../dist/app');

describe('Bootstrapping the app', function () {
    it('creates the app', async function () {
        const app = await Application.bootstrap();
        expect(app).to.be.instanceOf(Application);
    });

    it('twice does not recreate the app', async function () {
        const app1 = await Application.bootstrap();
        const app2 = await Application.bootstrap();
        expect(app1).to.be.equal(app2);
    });
});
