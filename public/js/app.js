const getForcast = function (location) {
    return fetch(`/forcast?address=${location}`).then((res) => {
        return res.json();
    })
}


const weatherForm = document.querySelector("form");
const input = document.querySelector("input");
const message = document.querySelector("#result");
const loading = document.querySelector("#loading");

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loading.textContent = "Loading......"
    const location = input.value;
    getForcast(location).then((data) => {
        let result = (data.error) ? data.error : data.forcast.body.daily.summary;

        loading.textContent = "";
        message.textContent = "result : " + result;
        console.log(data)

    })

})