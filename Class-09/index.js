fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then((data) => {
    let imageElement = document.getElementById("random-image");
    console.log(data);
    imageElement.src = data.message;
});