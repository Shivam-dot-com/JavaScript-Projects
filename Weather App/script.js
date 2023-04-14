let weather = {
    apiKey: "78c0b2346ea6f1c362d30f77baca2be6",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric&appid=" +
                this.apiKey
        )
            .then((response) => response.json())
            .then((data) => console.log(data));
    },
};
