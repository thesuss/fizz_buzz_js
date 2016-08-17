describe('Partial sample', function() {
  beforeEach(function() {
    // We can load fixtures using this method:
    //jasmine.getFixtures().clearCache();
    //var f = jasmine.getFixtures();
    //f.fixturesPath = 'base/spec/fixtures';
    //f.load('sample_partial.html');
    //$.holdReady(false);

    // Or this:
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('f_fixture.html');
    $.holdReady(false);
  });

  afterEach(function() {
    // If you need to reset some values after each testing
    // you can do it here.
  });

  describe("displays number/fizz", function() {

    it("when button is clicked", function() {
      $('#number').val('77');
      $('#click_me').trigger('click');
      expect($('#display_message').text()).toBe('77');
    });
  });
});
