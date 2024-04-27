
let query = "Sydney";
let key = "08f2af584a30512o3tf54b3f34a29ed3";
let unit = "metric";
let apiKey =`https://api.shecodes.io/weather/v1/current?query=${query}&key=${key}&units=${unit}`;
//let apiKey =`https://api.shecodes.io/weather/v1/forecast?query=Lisbon&key=08f2af584a30512o3tf54b3f34a29ed3&units=metric`;

function apiresponse(response) {
   
    console.log(response.data.temperature.current);
    let h1chg = document.querySelector("h1");
    h1chg.innerHTML=`It is ${response.data.temperature.current} in ${query}`;
}

axios.get(apiKey).then(apiresponse)