function Airport() {  
  this.hangar = []
  this.capacity = 20
};

Airport.prototype.land = function(plane, weather = new Weather()) {
  if (weather.isStormy() === true) {
    throw new Error ('Weather is too stormy')
  } else { 
    if (this.hangar.length >= this.capacity) {
      throw new Error('Hangar is at capacity')
    } 
    this.hangar.push(plane);
    return "Plane landed"
  }
};

Airport.prototype.take_off = function(plane) {
  // this.hangar.remove(plane)
  return "Plane has taken off"
};

