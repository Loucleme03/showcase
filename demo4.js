// Demo 4 - esri-Leaflet Map    
//Create Map set View
     const apiKey = "AAPKf07cb82d9eca4d1bb282c457f31e98989hugHldsf54OiHoyG5H2qoN5Esp1pdJcuZV3F1fKwh4PPQF8uOzqkGAtY8T0JZxg";
      const basemapEnum = "arcgis/light-gray/base";
      const map2 = L.map("map2", {
        minZoom: 2
      }).setView([44.6308, -79.0548], 11); 
     L.esri.Vector.vectorBasemapLayer(basemapEnum, {
        apiKey: apiKey
      }).addTo(map2);
// Create raster tile image from 1984      
    var OldCarden = L.esri.tiledMapLayer({
        url: "https://tiles.arcgis.com/tiles/pMeXRvgWClLJZr3s/arcgis/rest/services/Carden1984_WTL1/MapServer",
       apiKey: apiKey,
        zoomOffsetAllowance: 0.6,
        opacity: 1,
        }).addTo(map2);    
      map2.getPane("tilePane").style.zIndex = 450;
  // Create raster tile image from 2022          
       var NewCarden = L.esri.tiledMapLayer({
        url: "https://tiles.arcgis.com/tiles/pMeXRvgWClLJZr3s/arcgis/rest/services/Carden2021_WTL1/MapServer",
       apiKey: apiKey,
       zoomOffsetAllowance: 0.6,
        opacity: 1,
      }).addTo(map2);   
      map2.getPane("tilePane").style.zIndex = 450;

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
      }).addTo(map2);
