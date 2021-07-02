var colors = ['green', 'red', 'yellow', 'blue'];
colors.forEach(color => {
    buttonClass = '.button.'.concat(color);
    console.log(color);
    $(buttonClass).css("background-color", color);
})
var lose = true;
var clicked = 0;
var level = 0;
var formerPanels = [];
function startRound() {
    lose = false;
    //change the title
    level++;
    $('#greeting').text("Level ".concat(level));
    //add new color to the former panels
    var newPanel = Math.floor(Math.random() * 4);
    var newColor = colors[newPanel];
    formerPanels.push(newColor);
    console.log(formerPanels);
    $('.button.'.concat(newColor)).addClass('dark-button');
    setTimeout(() => {
        $('.button.'.concat(newColor)).removeClass('dark-button');
    }, 500);
    
    //then do nothing
    //it's the other function's work to decide 
    //if we need to start a new round

};

$("body").keypress(() => {
    if (lose) {
        //add event listeners to buttons
            //first give buttons event listeners
        $('.button').click((e) => {
            console.log($(e.target).attr("class"));
            $(e.target).addClass('dark-button');
            setTimeout(() => {
                $(e.target).removeClass('dark-button');
            }, 500);
            //check if we clicked on the correct target
            var classes = $(e.target).attr("class");
            var classes_array = classes.split(" ");
            var color = classes_array[1];
            if (color === formerPanels[clicked]) {
                clicked++;
                //go to next round?
                if (clicked == level) {
                    clicked = 0;
                    //wait for 0.5s
                    setTimeout(startRound, 1000);
                } else {
                    //still this level
                }
            } else {
                lose = true;
                clicked = 0;
                level = 0;
                formerPanels = [];
                //end of game
                $('#greeting').text("You lost. Press any button to start a new game.");
                //detach event listeners
                $(".button").off();
            }
        })
        startRound();
    }
});




