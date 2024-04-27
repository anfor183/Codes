
let searchInputElement = document.querySelector("#search-input");
        let cityElement = document.querySelector("#current-city");
        let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("click", function() {
    // Get the search query from the input
    let query = searchInputElement.value;

    // Construct the API URL with the query and API key
    let key = "08f2af584a30512o3tf54b3f34a29ed3"; // Replace with your actual API key
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${key}`;

    // Make an HTTP request to the API using axios
    axios.get(apiUrl).then(response => {
       
        let cityElement = document.querySelector("#current-city");
        cityElement.innerHTML = response.data.city; // Display the city name

        let tempnum = document.querySelector("#tempValue");

        // Extract temperature data from the response
        let temperature1 = Math.round(response.data.temperature.current);
        tempnum.innerHTML = temperature1;
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });
  });


 function search(event) {
     event.preventDefault();
 let searchInputElement = document.querySelector("#search-input");
let cityElement = document.querySelector("#current-city");

 cityElement.innerHTML = searchInputElement.value;
 
   }
  searchForm.addEventListener("submit", search);

  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  
    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
  }
  
  
 
  
  let currentDateELement = document.querySelector("#current-date");
  let currentDate = new Date();
  
  currentDateELement.innerHTML = formatDate(currentDate);


  

