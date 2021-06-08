
function initMap() {

  const loc ={lat: 32.506929, lng: 74.524809 };

  const map = new google.maps.Map(document.querySelector(".map")
  , {
    zoom: 12,
    Center: loc
  });

  const marker = new google.maps.Marker({ position:loc,map:
    map});
}