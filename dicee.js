imgFileFolder = "public/img/";
img = imgFileFolder.concat("dice-question-mark.png");
$(".left img, .right img").attr("src", img);
Roll = function () {
    left = Math.floor(Math.random() * 6) + 1;
    right = Math.floor(Math.random() * 6) + 1;

    leftIMG = imgFileFolder.concat(left, '.png');
    rightIMG = imgFileFolder.concat(right, '.png');
    document.querySelector(".left img").setAttribute('src', leftIMG);
    document.querySelector(".right img").setAttribute('src', rightIMG);
    if (left > right) {
        result = "Player 1 Won!";
    } else if (left < right) {
        result = "Player 2 Won!";
    } else {
        result = "Tie";
    }
    document.getElementById("greeting").textContent = result;
    var closings = ["Bye!", "Farewell..."];
    var closingID = 0;
    $("#toggle-closing").text(closings[closingID]);
    $("#toggle-closing").click(() => {
        closingID = 1 - closingID;
        //console.log(closings[closingID]);
        $("#toggle-closing").text(closings[closingID]);
    })
}

$("#roll").click(Roll);
$("#roll").mouseover(() => {
    $("#roll").addClass("roll-on-hover");
});
