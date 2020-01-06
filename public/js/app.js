const getForcast = function (location) {
    return fetch(`/forcast?address=${location}`).then((res) => {
        return res.json();
    })
}


const weatherForm = document.querySelector("form");
const input = document.querySelector("input");
const country = document.querySelector("#location");
const message = document.querySelector("#result");
const loading = document.querySelector("#loading");

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loading.textContent = "Loading......"
    const location = input.value;
    getForcast(location).then((data) => {
        let result = (data.error) ? data.error : data.forcast.body.daily.data[0].summary + ' It is currently ' + data.forcast.body.currently.temperature + ' degress out. This high today is ' + data.forcast.body.daily.data[0].temperatureHigh + ' with a low of ' + data.forcast.body.daily.data[0].temperatureLow + '. There is a ' + data.forcast.body.currently.precipProbability + '% chance of rain.';
        //
        loading.textContent = "";
        country.textContent = data.address;
        message.textContent = "result : " + result;
        console.log(data)

    })

})