const express = require('express');

const router = express.Router();

const locationStorage = {
  locations: []
};

router.post('/add-location', (req, res, next) => {
  const id = Math.random();
  locationStorage.locations.push({
    id: id, 
    address: req.body.address,
    coods: {lat: req.body.lat, lng: req.body.lng}
  });
  res.json({message: 'stored location!', locId: id});
});

router.get('/location/:lid', (req, res, next)=>{
  const locationId = +req.params.lid;
  const location = locationStorage.locations.find(loc => {
    return loc.id === location.id;
    
  });
  if(!location){
      return  res.status(404).json({message: 'Not found!'});
    }
    res.json({address: location.address, coordinates: location.coords});
});

module.exports = router;