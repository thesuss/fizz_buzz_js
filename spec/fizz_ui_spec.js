describe('Fizz UI', function() {
  beforeEach(function() {
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
