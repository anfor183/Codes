let apiurlcomment = "https://jsonplaceholder.typicode.com/posts/1/comments";

function apiresponse(response) {
    console.log(response.data[0].body);
}

axios.get(apiurlcomment).then(apiresponse)