const request = require("request");

//  geocoding API to get the longitude and latitude based on address from mapbox
const geocodingUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places";

// to get the user longitude and latitude
function getGeocoding(address) {
  return new Promise((resolve, reject) => {

    const path = "/" + encodeURIComponent(address) + ".json" + "?language=en&limit=1&access_token=pk.eyJ1Ijoid2FsaWRoYWoiLCJhIjoiY2sycmFrZ3Z6MDYzZjNocDV2bTlrMmh1MCJ9.T_N3LrBTrDVs3HTvDj_imQ";

    let URL = geocodingUrl + path;

    request.get({ url: URL, json: true }, (error, response) => {
      if (error) {
        reject("unable to connect to the  geocoding service");
      } else if (response.statusCode != 200) {
        reject(response.body.message);
      } else if (response.statusCode === 200 && response.body.features.length === 0) {
        reject("Address Not Found");
      } else {
        let data = {
          longitude: response.body.features[0].center[0],
          latitude: response.body.features[0].center[1],
          location: response.body.features[0].place_name
        };
        resolve(data);
      }
    });

  })

}

module.exports = {
  getGeocoding: getGeocoding
};
