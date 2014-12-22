mocha.bail(false); //mocha continues after first error to show

describe('Test failures', function() {
    it('should fail on assertion', function() {
        expect('hi').to.equal('goodbye');
    });

    it('should fail on unexpected exception', function() {
        throw new Error();
    });
})