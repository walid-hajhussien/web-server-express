const request = require("request");

// forecast API from dark sky
const forecastUrl = "https://api.darksky.net/forecast/cab3c55d2b328308e9bff05ca4fb26e9";

// to get the user forecast
function getForecast(longitude, latitude) {
  return new Promise((resolve, reject) => {

    let url = forecastUrl + "/" + longitude + "," + latitude + "?lang=en&units=si";

    request.get({ url: url, json: true }, (error, response) => {
      if (error) {
        reject("unable to connect to the  dark sky service");
      } else if (response.statusCode != 200) {
        reject(response.body.error);
      } else {
        resolve(response);
      }
    });

  })

}

module.exports = {
  getForecast: getForecast
};
