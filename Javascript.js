// Navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//---------------------------------------------------------------------------------
// Demo 1 Javascript Storymap
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 52.068, lng: -1.773},
        zoom: 7,
        mapTypeId: "hybrid",
    });
  
    // Define the symbol, using one of the predefined paths ('CIRCLE')
    // supplied by the Google Maps JavaScript API.
    const lineSymbol = {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 8,
      strokeColor: "lightblue",
    };
  
    // Create the polyline and add the symbol to it via the 'icons' property.
    const line = new google.maps.Polyline({
      path: [
        {lat: 50.854, lng: -0.555},
        {lat: 51.504, lng: -0.124},
        {lat: 51.463, lng: -0.650},
        {lat: 51.381, lng: -2.359},
        {lat: 51.454, lng: -2.627},
        {lat: 51.449, lng: -2.608},
        {lat: 51.452, lng: -2.592},
        {lat: 51.415, lng: -2.474},
        {lat: 53.382, lng: -2.937},
        {lat: 53.548, lng: -3.102},
        {lat: 53.430, lng: -2.960},
        {lat: 51.178, lng: -1.826},
        {lat: 50.816, lng: -0.1389},
      ],
      icons: [
        {
          icon: lineSymbol,
          offset: "100%",
        },
      ],
      map: map,
    });
    
  // Create the marker locations with what the label will be  
   const roadTripStops = [
        [{lat: 50.854, lng: -0.555},"Arundel Castle"],
        [{lat: 51.504, lng: -0.124},"London"],
        [{lat: 51.463, lng: -0.650},"Legoland"],
        [{lat: 51.381, lng: -2.359},"Roman Baths"],
        [{lat: 51.454, lng: -2.627},"Suspension Bridge"],
        [{lat: 51.449, lng: -2.608},"SS Great Britain"],
        [{lat: 51.452, lng: -2.592},"Floating Harbour"],
        [{lat: 51.415, lng: -2.474},"Avon Valley Adventure & Wildlife Park"],
        [{lat: 53.382, lng: -2.937},"Sefton Park"],
        [{lat: 53.548, lng: -3.102},"Formby Coast"],
        [{lat: 53.430, lng: -2.960},"Anfield Stadium"],
        [{lat: 51.178, lng: -1.826},"Stonehenge"],
        [{lat: 50.816, lng: -0.1389},"Brighton Palace Pier"],
  ];

  // Create an info window 
  const infoWindow = new google.maps.InfoWindow();

  // Create the marker labels and pop up info (title).
  roadTripStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${title}`,
      label: `${i + 1}`,
      optimized: true,
    });

    // Add a click listener for each marker, and set up the info window. Allows the markers to be clicked and open the text(title)
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });

  //inputs the animated moving symbol from the function below (can only call one function)
  animateCircle(line);
}
  
// Use the DOM setInterval() function to change the offset of the symbol
// at fixed intervals. Here the offset and speed of symbol can be set with the icon wanted as the symbol
function animateCircle(line) {
  let count = 0;
     window.setInterval(() => {
     count = (count + 1) % 200;
  
     const icons = line.get("icons");
  
     icons[0].offset = count / 2 + "%";
     line.set("icons", icons);
    }, 80);
}

//function to open in window
window.initMap = initMap;

//-----------------------------------------------------------------------------------------------------------
// Demo 2 Slideshow Javascript
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//---------------------------------------------------------------------------------------------------
// Demo 3- ArcGIS maps SDK for Javascript
    require([
      "esri/config",
      "esri/WebMap",
      "esri/views/MapView",
      "esri/widgets/LayerList",
      "esri/widgets/Legend"
    ], function(esriConfig, WebMap, MapView,LayerList, Legend) {

      esriConfig.apiKey = "AAPK4d7aa34174e8497d8e8d10189e6a88f8B9cgmO9GN1kDtF5i2hkYZr_5OukxG3z6lHj1DrW86ytYkIiWRGhrcXYUHG6-pJls";

      const webmap = new WebMap({
        portalItem: {
          id: "307a93439f0946ff9bf8683c925ebfcf"
        }
      });

      const view = new MapView({
        container: "map",
        center: [-79.036, 44.6425],
        zoom: 11,
        map: webmap,
        constraints: {
          maxZoom: 18,
          minZoom: 11,
        }

      });
      view.when(() => {
        const layerList = new LayerList({
          view: view
        });
        
    // Add widget to the top right corner of the view
        view.ui.add(layerList, "top-right");
        });
      const legend = new Legend ({
        view: view
      });
      view.ui.add(legend, "top-right");

  });

//--------------------------------------------------------------------------------------------
// Demo 4 - esri-Leaflet Map

// Leaflet map designed and edited by entire group 
     
//Create Map set View
     const apiKey = "AAPK4d7aa34174e8497d8e8d10189e6a88f8B9cgmO9GN1kDtF5i2hkYZr_5OukxG3z6lHj1DrW86ytYkIiWRGhrcXYUHG6-pJls";
      const basemapEnum = "ArcGIS:LightGray:Base";
      const map = L.map("map", {
        minZoom: 2
      }).setView([44.6308, -79.0548], 12); 
      
      L.esri.Vector.vectorBasemapLayer(basemapEnum, {
        apiKey: apiKey
      }).addTo(map);
// Create raster tile image from 1984      
    var OldCarden = L.esri.tiledMapLayer({
        url: "https://tiles.arcgis.com/tiles/pMeXRvgWClLJZr3s/arcgis/rest/services/Carden1984_WTL1/MapServer",
       apiKey: apiKey,
        zoomOffsetAllowance: 0.6,
        opacity: 1,
        }).addTo(map);    
      map.getPane("tilePane").style.zIndex = 450;
  // Create raster tile image from 2022          
       var NewCarden = L.esri.tiledMapLayer({
        url: "https://tiles.arcgis.com/tiles/pMeXRvgWClLJZr3s/arcgis/rest/services/Carden2021_WTL1/MapServer",
       apiKey: apiKey,
       zoomOffsetAllowance: 0.6,
        opacity: 1,
      }).addTo(map);   
      map.getPane("tilePane").style.zIndex = 450;

     // use function to be able to change opacity with slider
    // Needs to be done on NewCarden since it was added last to the Javascript
      function updateOpacity(value) {
        NewCarden.setOpacity(value);
      }
// create scale bar in bottom left corner
      L.control.scale ({
        metric: true,
        imperial: false,
        position: 'bottomleft'
      }).addTo(map);
    

