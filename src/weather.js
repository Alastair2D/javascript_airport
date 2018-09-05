function Weather() {
}

Weather.prototype.isStormy = function() {
  var randomNumber = Math.random()
  if (randomNumber < 0.8) { 
    return false
  } else {
    return true
  }   

}



