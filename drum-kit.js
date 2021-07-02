var buttons = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
imgFileFolder = "public/img/";
audioFolder = 'public/sounds/';
for (var i = 0; i < buttons.length; i++){
    //build the image file
    buttonIMG = imgFileFolder.concat(buttons[i], '.png');
    imgID = '#'.concat(buttons[i],' img');
    //set it to imageFile
    document.querySelector(imgID).setAttribute('src', buttonIMG);
}
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const audioFile = audioFolder.concat(button.id, '.mp3');
        var audio = new Audio(audioFile);
        audio.play();
    });
});
document.addEventListener('keypress', (e) => {
    if (buttons.includes(e.key)) {
        const audioFile = audioFolder.concat(e.key, '.mp3');
        var audio = new Audio(audioFile);
        audio.play();

    }


})
document.addEventListener('keydown', (e) => {
    if (buttons.includes(e.key)) {
        const buttonId = "#".concat(e.key);
        document.querySelector(buttonId).classList.add("pressed-button");

    }
})
document.addEventListener('keyup', (e) => {
    if (buttons.includes(e.key)) {
        const buttonId = "#".concat(e.key);
        document.querySelector(buttonId).classList.remove("pressed-button");

    }
})
