function distanceFromHqInBlocks(street) {
    const headquarters = 42;
    return Math.abs(headquarters - street);
  }
  
  function distanceFromHqInFeet(street) {
    const block = 264; 
    return distanceFromHqInBlocks(street) * block;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const block = 264; 
    return Math.abs(start - destination) * block;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  

  