describe("Plane", function() {
  var da747;

  beforeEach(function() {
    da747 = new Plane()
  });

  describe('#new', function() {
    it('knows its own name'), function() {
      expect(da747.name).toEqual('da747')
    }
  })
})  