let weather = {
    paris: {
        temp: 19.7,
        humidity: 80
    },
    tokyo: {
        temp: 17.3,
        humidity: 50
    },
    lisbon: {
        temp: 30.2,
        humidity: 20
    },
    "san francisco": {
        temp: 20.9,
        humidity: 100
    },
    oslo: {
        temp: -5,
        humidity: 20
    }
};

// write your code here
let city = prompt("Enter a city");


// if (city = weather.paris) {
//     alert(`It is currently ${weather.paris.temp}`)
// } else {


// }

switch (city) {
    case city = "paris":
        alert(`It is currently in ${weather.paris.temp} with Humidity of ${weather.paris.humidity}`)
        break;
    case city = "tokyo":
        alert(`It is currently in ${weather.tokyo.temp} with Humidity of ${weather.tokyo.humidity}`)
        break;
    case city = "lisbon":
        alert(`It is currently in ${weather.lisbon.temp} with Humidity of ${weather.lisbon.humidity}`)
        break;
    case city = "oslo":
        alert(`It is currently in ${weather.oslo.temp} with Humidity of ${weather.oslo.humidity}`)
        break;
    case city = "san francisco":
        alert(`It is currently in ${weather["san francisco"].temp} with Humidity of ${weather["san francisco"].humidity}`)
        break;
    default:
        alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney`)
}