// Google Map API Integration
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
// sticky Menu Background
window.addEventListener('scroll',function(){
  if (window.scrollY>150){
    document.querySelector('#navbar').style.opacity=0.9;  
  } else {
    document.querySelector('#navbar').style.opacity=1;  
  }
});

// For Smooth Scrolling
$('#navbar a, .btn').on('click', function(event){
  if(this.hash !== ''){
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
}); 