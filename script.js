document.addEventListener('DOMContentLoaded', function () {
    const locationInput = document.getElementById('locationInput');
    const searchButton = document.getElementById('searchButton');

    // Set default location to Tokyo when the page loads
    locationInput.value = 'Tokyo';

        const themeSwitch = document.getElementById('themeSwitch');
        const body = document.body;

        themeSwitch.addEventListener('change', function () {
            body.classList.toggle('dark-theme', themeSwitch.checked);
        });
    // Call the function to fetch and display weather data for Tokyo
    handleSearch();

    searchButton.addEventListener('click', handleSearch);
    locationInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    function handleSearch() {
        const location = locationInput.value;
        const apiKey = "5E5EAHF7W2HRCLC5LMSKEVB5T";

        const cityAndCountry = document.getElementById('cityAndCountry');
        const temp = document.getElementById('temperature');
        const feelsLike = document.getElementById('feelsLike');
        const weatherDescription = document.getElementById('weatherDescription');
        const weatherIcon = document.getElementById('weatherIcon');
        const notif = document.getElementById('errorNotification');
        const humidity = document.getElementById('humidity');
        const windSpeed = document.getElementById('windSpeed');
        const cloudCover = document.getElementById('cloudCover');

        function getWeatherData(location, apiKey) {
            const unit = "metric";
            const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=${apiKey}&contentType=json`;

            return fetch(apiUrl)
                .then(response => response.json())
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    throw error;
                });
        }

        function updateDayNightIndicator() {
            const now = new Date();
            const hours = now.getHours();

            const dayNightIndicator = document.getElementById('dayNightIndicator');

            // Define your day and night hours (adjust as needed)
            const dayStartHour = 6; // 6 AM
            const nightStartHour = 18; // 6 PM

            if (hours >= dayStartHour && hours < nightStartHour) {
                // Daytime
                dayNightIndicator.innerHTML = "Day";
                document.body.classList.remove('night-mode');
            } else {
                // Nighttime
                dayNightIndicator.innerHTML = "Night";
                document.body.classList.add('night-mode');
            }
        }

        // Initial call to set the indicator based on the page load time
        updateDayNightIndicator();

        // Call the function every minute to update the indicator
        setInterval(updateDayNightIndicator, 60000);
        
        function displayWeatherData(data) {
            cityAndCountry.innerHTML = `${data.resolvedAddress}`;
            temp.innerHTML = `${Math.floor(data.currentConditions.temp)}°`;
            feelsLike.innerHTML = `${data.currentConditions.feelslike} %`;
            // weatherDescription.innerHTML = `${data.description}`;
            weatherIcon.src = `icons/${data.currentConditions.icon}.png`;
            notif.innerHTML = "";
            humidity.innerHTML = `${data.currentConditions.humidity} %`;
            cloudCover.innerHTML = `${data.currentConditions.cloudcover} %`;
            windSpeed.innerHTML = `${data.currentConditions.windspeed} km/h`;

            const datetimeEpoch = document.getElementById('datetimeEpoch');
            const datetimeEpoch2 = document.getElementById('datetimeEpoch2');
            const datetimeEpoch3 = document.getElementById('datetimeEpoch3');
            const datetimeEpoch4 = document.getElementById('datetimeEpoch4');
            const datetimeEpoch5 = document.getElementById('datetimeEpoch5');
            const datetimeEpoch6 = document.getElementById('datetimeEpoch6');

            const temp1 = document.getElementById('temp1');
            const temp2 = document.getElementById('temp2');
            const temp3 = document.getElementById('temp3');
            const temp4 = document.getElementById('temp4');
            const temp5 = document.getElementById('temp5');
            const temp6 = document.getElementById('temp6');

            const icon = document.getElementById('icon');
            const icon2 = document.getElementById('icon2');
            const icon3 = document.getElementById('icon3');
            const icon4 = document.getElementById('icon4');
            const icon5 = document.getElementById('icon5');
            const icon6 = document.getElementById('icon6');
            


            mainIcon.src = `icons/${data.days[0].icon}.png`;
            icon.src = `icons/${data.days[1].icon}.png`;
            icon2.src = `icons/${data.days[2].icon}.png`;
            icon3.src = `icons/${data.days[3].icon}.png`;
            icon4.src = `icons/${data.days[4].icon}.png`;
            icon5.src = `icons/${data.days[5].icon}.png`;
            icon6.src = `icons/${data.days[6].icon}.png`;

            const currentDay = data.days[0];

            const sixamIcon = document.getElementById('6amIcon');
            const sixamTemp = document.getElementById('6amTemp');
            sixamIcon.src = `icons/${currentDay.hours[6].icon}.png`;
            sixamTemp.innerHTML = `${currentDay.hours[6].temp}°C`;

            const nineamIcon = document.getElementById('9amIcon');
            const nineamTemp = document.getElementById('9amTemp');
            nineamIcon.src = `icons/${currentDay.hours[9].icon}.png`;
            nineamTemp.innerHTML = `${currentDay.hours[9].temp}°C`;

            const twelvepmIcon = document.getElementById('12pmIcon');
            const twelvepmTemp = document.getElementById('12pmTemp');
            twelvepmIcon.src = `icons/${currentDay.hours[12].icon}.png`;
            twelvepmTemp.innerHTML = `${currentDay.hours[12].temp}°C`;

            const threepmIcon = document.getElementById('3pmIcon');
            const threepmTemp = document.getElementById('3pmTemp');
            threepmIcon.src = `icons/${currentDay.hours[15].icon}.png`;
            threepmTemp.innerHTML = `${currentDay.hours[15].temp}°C`;

            const sixpmIcon = document.getElementById('6pmIcon');
            const sixpmTemp = document.getElementById('6pmTemp');
            sixpmIcon.src = `icons/${currentDay.hours[18].icon}.png`;
            sixpmTemp.innerHTML = `${currentDay.hours[18].temp}°C`;

            const ninepmIcon = document.getElementById('9pmIcon');
            const ninepmTemp = document.getElementById('9pmTemp');
            ninepmIcon.src = `icons/${currentDay.hours[21].icon}.png`;
            ninepmTemp.innerHTML = `${currentDay.hours[21].temp}°C`;


            
            console.log(data)

            mainTemp.innerHTML = `${Math.floor(data.days[0].temp)}°`;
            temp1.innerHTML = `${Math.floor(data.days[1].temp)}°`;
            temp2.innerHTML = `${Math.floor(data.days[2].temp)}°`;
            temp3.innerHTML = `${Math.floor(data.days[3].temp)}°`;
            temp4.innerHTML = `${Math.floor(data.days[4].temp)}°`;
            temp5.innerHTML = `${Math.floor(data.days[5].temp)}°`;
            temp6.innerHTML = `${Math.floor(data.days[6].temp)}°`;


            datetimeMain = `${new Date(data.days[0].datetime)}`;
            datetime = `${new Date(data.days[1].datetime)}`;
            datetime2 = `${new Date(data.days[2].datetime)}`;
            datetime3 = `${new Date(data.days[3].datetime)}`;
            datetime4 = `${new Date(data.days[4].datetime)}`;
            datetime5 = `${new Date(data.days[5].datetime)}`;
            datetime6 = `${new Date(data.days[6].datetime)}`;
            datetimeEpoch.innerHTML = `${datetime[0] + datetime[1] + datetime[2]}&nbsp;&nbsp;`;
            datetimeEpoch2.innerHTML = `${datetime2[0] + datetime2[1] + datetime2[2]}&nbsp;&nbsp;`;
            datetimeEpoch3.innerHTML = `${datetime3[0] + datetime3[1] + datetime3[2]}&nbsp;&nbsp;`;
            datetimeEpoch4.innerHTML = `${datetime4[0] + datetime4[1] + datetime4[2]}&nbsp;&nbsp;`;
            datetimeEpoch5.innerHTML = `${datetime5[0] + datetime5[1] + datetime5[2]}&nbsp;&nbsp;`;
            datetimeEpoch6.innerHTML = `${datetime6[0] + datetime6[1] + datetime6[2]}&nbsp;&nbsp;`;
            datetimeEpochMain.innerHTML = "Today"
        }
        

        getWeatherData(location, apiKey)
            .then(weatherData => {
                displayWeatherData(weatherData, location);
            })
            .catch(error => {
                notif.innerHTML = 'Provided location is incorrect';

                console.error('Error fetching weather data:', error);
                clearWeatherData();
            });

        function clearWeatherData() {
            cityAndCountry.innerHTML = '';
            temp.innerHTML = '';
            weatherDescription.innerHTML = '';
            weatherIcon.src = './location incorrect.png';
            notif.innerHTML = 'Provided location is incorrect';
            humidity.innerHTML = '';
            cloudCover.innerHTML = '';
            windSpeed.innerHTML = '';
            datetimeEpoch.innerHTML = '';
            datetimeEpoch2.innerHTML = '';
            datetimeEpoch3.innerHTML = '';
            datetimeEpoch4.innerHTML = '';
            datetimeEpoch5.innerHTML = '';
            datetimeEpoch6.innerHTML = '';
            icon.src = '';
            icon2.src = '';
            icon3.src = '';
            icon4.src = '';
            icon5.src = '';
            icon6.src = '';
            feelsLike.innerHTML = '';
            temp1.innerHTML = '';
            temp2.innerHTML = '';
            temp3.innerHTML = '';
            temp4.innerHTML = '';
            temp5.innerHTML = '';
            temp6.innerHTML = '';
            mainIcon.src = '';
        }
    }
});
