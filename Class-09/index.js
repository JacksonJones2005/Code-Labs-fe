fetch{"https://v2.jokeapi.dev/joke/Any?safe-mode"}
.then{(response) => response.json()}
.then{(data) => {
    let textElement = document.getElementById("random-image");

    console.log(data.message);
    textElement.src = data.message;
});