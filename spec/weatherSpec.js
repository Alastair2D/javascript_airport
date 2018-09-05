describe('Weather', function() {
  var w1

  beforeEach(function() {
    w1 = new Weather();
  });

  describe('generate conditions', function() {
    it('returns random true or false', function() {
      expect([true, false]).toContain(w1.isStormy())
    });
  })

})