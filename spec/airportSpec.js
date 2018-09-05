describe("Airport", function() {
  var heathrow;
  var ba737;
  var sunnyWeather;
  var stormyWeather;

  beforeEach(function() {
    heathrow = new Airport();
    ba737 = new Plane(); 
    sunnyWeather = new Weather();
    stormyWeather = new Weather();
  });

describe('When the hangar is at capacity', function () {
  beforeEach(function() {
    spyOn(sunnyWeather, 'isStormy').and.returnValue(false);
  })
  it('should not allow plane', function () {
    for (var i = 0; i < 20; i++) {
      heathrow.land(`plane${i}`, sunnyWeather)   // heathrow.land(ba737);
      }
      expect(function () { heathrow.land(ba737, sunnyWeather) }).toThrowError('Hangar is at capacity'); // testing an error has to be a function
    });
  });

describe('When the weather is sunny', function(){
  beforeEach(function () {
    spyOn(sunnyWeather, 'isStormy').and.returnValue(false);
  })
  describe('#land', function () {
    it('should be able to land a plane', function () {
      expect(heathrow.land(ba737, sunnyWeather)).toEqual("Plane landed");
    });
  })
  describe('#take_off', function () {
    it('should be able to take_off a plane', function () {
      expect(heathrow.take_off(ba737)).toEqual("Plane has taken off");
    });
  })
})

describe('When the weather is stormy', function () {
  beforeEach(function () {
    spyOn(stormyWeather, 'isStormy').and.returnValue(true);
  })
  describe('#land', function () {
    it('should not be able to land a plane', function () {
      expect(function(){ heathrow.land(ba737, stormyWeather) }).toThrowError("Weather is too stormy");
    });
  })
  describe('#take_off', function () {
    it('should be able to take_off a plane', function () {
      expect(heathrow.take_off(ba737)).toEqual("Plane has taken off");
    });
  })
  })

})
