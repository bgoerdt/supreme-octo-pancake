
      function init() {
        fetch('iowaZipCodes.json')
          .then(function(response) {
            return response.json();
          })
          .then(function(responseJson) {
            initMap(responseJson);
          });
      }

        zipCodes.forEach(zipCode => {
            //console.log(zipCode);
            
            // zipCode.coordinates.forEach(coordinate => {
            //   if(isNaN(coordinate.lat)) {
            //     console.log('lat not a number');
            //     console.log(coordinate);
            //     throw new Error();
            //   }
            //   if(isNaN(coordinate.lng)) {
            //     console.log('lng not a number');
            //     console.log(coordinate);
            //     throw new Error();
            //   }
            // });
  
            //console.log(zipCode.coordinates[0][0]);
  
            var zipCodePolygon = new google.maps.Polygon({
              paths: zipCode.coordinates,
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#FF0000',
              fillOpacity: 0.35
            });
            zipCodePolygon.setMap(map);
          });