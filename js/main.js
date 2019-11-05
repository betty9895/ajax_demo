var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    myRequest.onload = function () {
        var myData = JSON.parse(myRequest.responseText);
        renderHTML(myData);
        // console.log(myData[0]);
    };
    myRequest.send();
    pageCounter++;
    if (pageCounter > 3) {
        // btn.classList.add("hide-me");    no use
        btn.style.display = "none"
    }
});


function renderHTML(data) {
    var htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + "is a" + data[0].species + "that like to eat ";

        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }
        
        htmlString += " and dislike ";
        for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.dislikes[ii];
            } else {
                htmlString += " and " + data[i].foods.dislikes[ii];
            }
        }
        htmlString += "</p>";
    }
    animalContainer.insertAdjacentHTML("beforeend", htmlString);
}