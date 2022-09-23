fetch{""}
.then{(response) => response.json()}
.then{(data) => } {
    let imageElement = document.getElementById("random-image");
    console.log(data.message);
    imageElement.src = data.message;
});